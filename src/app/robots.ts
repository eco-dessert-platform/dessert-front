import { MetadataRoute } from 'next';

const IS_DEV_MODE = JSON.parse(process.env.NEXT_PUBLIC_DEV_SETTING ?? 'false');

export default function robots(): MetadataRoute.Robots {
  if (IS_DEV_MODE) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/'
      }
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/'
    }
  };
}
