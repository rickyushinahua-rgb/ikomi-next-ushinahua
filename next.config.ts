import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    remotePatterns: [
      new URL("https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg"),
      new URL("https://images.pexels.com/photos/7565164/pexels-photo-7565164.jpeg"),
      new URL("https://images.pexels.com/photos/4277794/pexels-photo-4277794.jpeg"),
      new URL("https://images.pexels.com/photos/4480986/pexels-photo-4480986.jpeg"),
      new URL("https://images.pexels.com/photos/4481327/pexels-photo-4481327.jpeg"),
      new URL("https://images.pexels.com/photos/16663692/pexels-photo-16663692.jpeg"),
    ],
  },
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
