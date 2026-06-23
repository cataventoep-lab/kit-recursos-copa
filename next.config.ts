import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/kit-recursos-copa",
  trailingSlash: true,

  images: {
    loader: "custom",
    loaderFile: "./imageLoader.ts",
  },
};

export default nextConfig;
