import type { NextConfig } from "next";

// Static export so the site can be hosted free on GitHub Pages or Vercel.
// If you deploy to a project repo (username.github.io/portfolio) set
// BASE_PATH=/portfolio at build time. For a user site
// (Sarunpat-Promthong.github.io) leave it empty.
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  trailingSlash: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
