import { GoogleAnalytics } from '@next/third-parties/google';

const GAScript = () => {
  const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
  return <GoogleAnalytics gaId={GA_ID} />;
};

export default GAScript;
