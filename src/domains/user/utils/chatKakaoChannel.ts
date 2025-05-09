export const chatKakaoChannel = () => {
  window.Kakao.Channel.chat({
    channelPublicId: process.env.NEXT_PUBLIC_KAKAO_CHANNEL_PROFILE_ID
  });
};
