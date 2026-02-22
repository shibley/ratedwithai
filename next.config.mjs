/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['playwright-core'],
  },
  serverExternalPackages: ['playwright-core'],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), 'playwright-core'];
    }
    return config;
  },
};

export default nextConfig;
