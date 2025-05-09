'use client';

const KaKaoChatScript = () => {
  const handleScriptLoad = () => {
    window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_JS_KEY);
  };

  return (
    <script
      defer
      src="https://t1.kakaocdn.net/kakao_js_sdk/2.6.0/kakao.channel.min.js"
      integrity="sha384-ty4605mXDCz/lA+RRt4bHCRa1c9uIaIi0JrsmmWVxaNJZzu58jMhJK8wAMqDxrYv"
      crossOrigin="anonymous"
      onLoad={handleScriptLoad}
    />
  );
};

export default KaKaoChatScript;
