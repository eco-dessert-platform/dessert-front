/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,
  webpack(config) {
    // Grab the existing rule that handles SVG imports
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      // Reapply the existing rule, but only for svg imports ending in ?url
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/ // *.svg?url
      },
      // Convert all other *.svg imports to React components
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack']
      }
    );

    // Modify the file loader rule to ignore *.svg, since we have it handled now.
    fileLoaderRule.exclude = /\.svg$/i;

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
    },
    serverActions: {
      allowedOrigins: ['www.bbangle.store']
    }
  },

  images: {
    remotePatterns: [
      { hostname: 'bbangle-bucket.kr.object.ncloudstorage.com' },
      { hostname: 'firebasestorage.googleapis.com' },
      { hostname: 'k.kakaocdn.net' },
      { hostname: 't1.kakaocdn.net' },
      { hostname: 'bbangree-oven.cdn.ntruss.com' }
    ]
  },

  output: 'standalone'
};
