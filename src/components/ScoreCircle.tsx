type Grade = "A" | "B" | "C" | "D" | "F";

type ScoreCircleProps = {
  score: number;
  grade: Grade;
  size?: "sm" | "md" | "lg";
};

const gradeStyles: Record<Grade, string> = {
  A: "text-green-400 border-green-400",
  B: "text-yellow-400 border-yellow-400",
  C: "text-orange-400 border-orange-400",
  D: "text-rose-400 border-rose-400",
  F: "text-red-400 border-red-400",
};

const sizeStyles = {
  sm: {
    wrapper: "h-24 w-24",
    grade: "text-3xl",
    score: "text-xl",
  },
  md: {
    wrapper: "h-32 w-32",
    grade: "text-4xl",
    score: "text-2xl",
  },
  lg: {
    wrapper: "h-44 w-44",
    grade: "text-5xl",
    score: "text-3xl",
  },
} as const;

export default function ScoreCircle({ score, grade, size = "md" }: ScoreCircleProps) {
  const styles = sizeStyles[size];

  return (
    <div
      className={`inline-flex ${styles.wrapper} flex-col items-center justify-center rounded-full border-8 ${
        gradeStyles[grade]
      } bg-slate-950/40`}
    >
      <div className={`font-bold ${styles.grade}`}>{grade}</div>
      <div className={`mt-1 font-semibold ${styles.score}`}>{score}</div>
    </div>
  );
}
