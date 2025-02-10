import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "secure.meetupstatic.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.lumacdn.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: 'https',
        hostname: 'imageurl.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
