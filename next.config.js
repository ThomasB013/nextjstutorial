/** @type {import('next').NextConfig} */
const nextConfig = {

    experimental: {
        serverActions: {
          // edit: updated to new key. Was previously `allowedForwardedHosts`
          allowedOrigins: ['127.0.0.1:3000'],
        },
    },    
};
module.exports = nextConfig;

