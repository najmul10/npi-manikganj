import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "sfile.chatglm.cn",
      },
      {
        protocol: "https",
        hostname: "npimanikganj.edu.bd",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "scontent.fbcdn.net",
      },
    ],
  },
};

export default nextConfig;
