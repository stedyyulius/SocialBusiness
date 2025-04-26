import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ2-l5gtnYXBdkOObeKZyV_GbovPqsUsqTwg&s",
      ),
      new URL(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGNjrJldZoJmapvX1v3BFq1IUx9459_fTlrw&s",
      ),
      new URL(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwlSwI7zI43PK0oypQ_H3z9DmXl0vlq8Qb0g&s",
      ),
      new URL(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5BEXx6JBYPSUJApykzcNUezS-4Hgq_DPBVw&s",
      ),
    ],
  },
};

export default nextConfig;
