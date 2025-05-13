import { GoogleTagManager } from '@next/third-parties/google';

const GAScript = () => {
  const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return <GoogleTagManager gtmId={GTM_ID} />;
};

export default GAScript;
