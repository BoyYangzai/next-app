/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // Basic redirect
      {
        source: "/chat",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
