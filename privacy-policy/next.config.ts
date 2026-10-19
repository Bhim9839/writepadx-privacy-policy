import type { NextConfig } from "next";

const isStaticExport = Boolean(process.env.NEXT_PUBLIC_BASE_PATH);

const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: !isStaticExport,
  partialPrefetching: !isStaticExport,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
