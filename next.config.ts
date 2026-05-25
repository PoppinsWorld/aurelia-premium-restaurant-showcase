import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/aurelia-premium-restaurant-showcase",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
