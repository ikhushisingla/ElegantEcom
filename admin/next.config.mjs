/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "cdn.cosmicjs.com" }, { hostname: "localhost" }],
  },
};

export default nextConfig;
