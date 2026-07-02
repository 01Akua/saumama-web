import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // GitHub Pages sirve el sitio bajo /saumama-web
  basePath: isProd ? "/saumama-web" : "",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
