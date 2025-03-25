/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers() {
        return [
          {
            source: '/api/:path*',
            headers: [
              { key: 'Access-Control-Allow-Origin', value: 'https://codewithabel.tech' },
              { key: 'Access-Control-Allow-Methods', value: 'POST' },
              { key: 'Access-Control-Allow-Headers', value: 'Content-Type' },
            ],
          },
        ];
      },
};

export default nextConfig;
