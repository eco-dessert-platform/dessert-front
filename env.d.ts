declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';

      NEXT_PUBLIC_KAKAO_JS_KEY: string;
      NEXT_PUBLIC_KAKAO_CHANNEL_PROFILE_ID: string;

      NEXT_PUBLIC_KAKAO_AUTH_CLIENT_ID: string;
      NEXT_PUBLIC_KAKAO_AUTH_REDIRECT_URI: string;

      NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID: string;
      NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_SECRET: string;
      NEXT_PUBLIC_GOOGLE_AUTH_REDIRECT_URI: string;
      NEXT_PUBLIC_GA_ID: string;
      NEXT_PUBLIC_GTM_ID: string;
    }
  }
}

// If this file has no import/export statements (i.e. is a script)
// convert it into a module by adding an empty export statement.
export {};
