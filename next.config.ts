import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("https://i.ytimg.com/vi/SVepTuBK4V0/hqdefault.jpg"),
    ],
  },
};

export default nextConfig;
