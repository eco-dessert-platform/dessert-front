import LoginLogoSection from '@/blocks/user/login/LoginLogoSection';
import GoogleLoginButton from '@/blocks/user/login/GoogleLoginButton';
import KakaoLoginButton from '@/domains/user/components/KakaoLoginButton';

const LoginPage = () => (
  <div className="flex flex-col gap-[81px] px-[16px] m-[16px] pt-[70px]">
    <LoginLogoSection
      title="안녕하세요👋 빵그리의 오븐입니다 :)"
      subTitle="여러분들이 원하는 비건 베이커리들을 함께 만나봐요!"
    />
    <div className="flex flex-col gap-3">
      <KakaoLoginButton />
      <GoogleLoginButton />
    </div>
  </div>
);

export default LoginPage;
