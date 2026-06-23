import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kit-recursos-copa",
  trailingSlash: true,

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
