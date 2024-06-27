/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        remotePatterns: [
            { 
                protocol: "https",
                hostname: 'raw.githubusercontent.com'
            }, 
            {
                protocol: "https",
                hostname: 'i.scdn.co'
            },
            {
                protocol: "https",
                hostname: 'media.githubusercontent.com'
            }
        ],
      },
};

export default nextConfig;
