'use client';

import Script from 'next/script';

const KaKaoChatScript = () => (
  <Script
    src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.channel.min.js"
    strategy="afterInteractive"
    integrity="sha384-ty4605mXDCz/lA+RRt4bHCRa1c9uIaIi0JrsmmWVxaNJZzu58jMhJK8wAMqDxrYv"
    crossOrigin="anonymous"
    onLoad={() => {
      window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY!);
    }}
  />
);

export default KaKaoChatScript;
