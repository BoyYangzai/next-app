/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
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
