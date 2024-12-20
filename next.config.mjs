/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.ap-south-1.amazonaws.com",
        pathname: "/awsimages.imagesbazaar.com/**",
      },
    ],
  },
};

export default nextConfig;