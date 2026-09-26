import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   experimental: {
    globalNotFound: true,
  },
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
       protocol: "https",
      hostname: "img.magnific.com",
      },
    ],
  },
};

export default nextConfig;
