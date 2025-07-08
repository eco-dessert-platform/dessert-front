/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      { hostname: 'd37g3q9mfan3cw.cloudfront.net' },
      { hostname: 'd41zmgwrjn4bn.cloudfront.net' },
      { hostname: 'bbangle-bucket.s3.ap-northeast-2.amazonaws.com' },
      { hostname: 'bbangle-bucket.kr.object.ncloudstorage.com' },
      { hostname: 'firebasestorage.googleapis.com' },
      { hostname: '*.kakaocdn.net' },
      { hostname: 'bbangree-oven.cdn.ntruss.com' },
      { hostname: 'smartstore.naver.com' }
    ],
    formats: ['image/webp']
  },

  output: 'standalone',

  // TurboPack 설정
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js'
      }
    }
  },

  // webpack 설정
  webpack: (config) => {
    // @ts-expect-error 타입 에러 무시
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));

    config.module.rules.push(
      {
        ...fileLoaderRule,
        test: /\.svg$/i,
        resourceQuery: /url/
      },
      {
        test: /\.svg$/i,
        issuer: fileLoaderRule.issuer,
        resourceQuery: { not: [...fileLoaderRule.resourceQuery.not, /url/] },
        use: [
          {
            loader: '@svgr/webpack',
            options: {
              typescript: true,
              ext: 'tsx'
            }
          }
        ]
      }
    );
    fileLoaderRule.exclude = /\.svg$/i;
    return config;
  }
};
