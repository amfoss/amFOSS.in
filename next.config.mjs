/** @type {import('next').NextConfig} */ 
const nextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
        {
            protocol: 'https',
            hostname: 'raw.githubusercontent.com',
            port: '',
            pathname: '/amfoss/member-directory/main/**',
        },
    ],
  },
  output: "export",
};

export default nextConfig;