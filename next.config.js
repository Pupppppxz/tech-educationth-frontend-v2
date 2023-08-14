/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "www.telegraph.co.uk",
                port: "",
                pathname: "/content/dam/**",
            },
        ],
    },

    // output: 'standalone',
};

module.exports = nextConfig;
