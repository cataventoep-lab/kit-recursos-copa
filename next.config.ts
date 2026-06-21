import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kit-recursos-copa",
  images: { unoptimized: true },
};

export default nextConfig;
