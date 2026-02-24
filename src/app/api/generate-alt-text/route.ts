import { NextRequest, NextResponse } from "next/server";

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

export async function POST(request: NextRequest) {
  if (!OPENAI_API_KEY) {
    return NextResponse.json(
      { error: "OpenAI API key not configured" },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { imageBase64, imageUrl } = body as {
      imageBase64?: string;
      imageUrl?: string;
    };

    if (!imageBase64 && !imageUrl) {
      return NextResponse.json(
        { error: "Provide either imageBase64 or imageUrl" },
        { status: 400 }
      );
    }

    // Validate URL if provided
    if (imageUrl) {
      try {
        new URL(imageUrl);
      } catch {
        return NextResponse.json(
          { error: "Invalid image URL" },
          { status: 400 }
        );
      }
    }

    // Validate base64 size (max ~5MB)
    if (imageBase64 && imageBase64.length > 7_000_000) {
      return NextResponse.json(
        { error: "Image too large. Maximum size is 5MB." },
        { status: 400 }
      );
    }

    const imageContent = imageUrl
      ? { type: "image_url" as const, image_url: { url: imageUrl } }
      : {
          type: "image_url" as const,
          image_url: { url: `data:image/jpeg;base64,${imageBase64}` },
        };

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content: `You are an accessibility expert specializing in WCAG 2.1 Success Criterion 1.1.1 (Non-text Content). Your job is to generate alt text for images that is accurate, concise, and useful for screen reader users.

Rules:
- Never start with "Image of", "Picture of", "Photo of", or similar phrases — screen readers already announce it as an image.
- Focus on the meaningful content and function of the image.
- Be specific and concise. Avoid filler words.
- If the image contains text, include that text.
- If the image appears to be purely decorative (abstract pattern, divider, background), say so.

Respond in this exact JSON format:
{
  "concise": "A brief alt text under 125 characters, suitable for most uses",
  "descriptive": "A more detailed description (1-2 sentences) for complex images that need additional context",
  "isDecorative": false,
  "decorativeReason": "Only populated if isDecorative is true — explains why alt=\"\" is recommended",
  "context": "Brief note about what type of image this is and any accessibility considerations"
}

Always respond with valid JSON only. No markdown, no code fences.`,
          },
          {
            role: "user",
            content: [
              {
                type: "text" as const,
                text: "Generate WCAG-compliant alt text for this image.",
              },
              imageContent,
            ],
          },
        ],
        max_tokens: 500,
        temperature: 0.3,
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      console.error("OpenAI API error:", err);
      return NextResponse.json(
        { error: "Failed to analyze image. Please try again." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (!content) {
      return NextResponse.json(
        { error: "No response from AI model" },
        { status: 502 }
      );
    }

    // Parse the JSON response
    try {
      const parsed = JSON.parse(content);
      return NextResponse.json({
        concise: parsed.concise || "",
        descriptive: parsed.descriptive || "",
        isDecorative: parsed.isDecorative || false,
        decorativeReason: parsed.decorativeReason || "",
        context: parsed.context || "",
      });
    } catch {
      // If JSON parsing fails, use the raw content as concise alt text
      return NextResponse.json({
        concise: content.slice(0, 125),
        descriptive: content,
        isDecorative: false,
        decorativeReason: "",
        context: "",
      });
    }
  } catch (error) {
    console.error("Alt text generation error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
