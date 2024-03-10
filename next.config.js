/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js'
        }
      }
    }
  },

  images: {
    remotePatterns: [
      { hostname: 'bbangle-bucket.kr.object.ncloudstorage.com' },
      { hostname: 'firebasestorage.googleapis.com' },
      { hostname: 'k.kakaocdn.net' },
      { hostname: 't1.kakaocdn.net' }
    ]
  }
};

module.exports = nextConfig;
