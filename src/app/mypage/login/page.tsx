import Header from '@/components/commons/header/client/Header';
import GoogleLoginButton from '@/components/units/Login/GoogleLoginButton';
import KakaoLoginButton from '@/components/units/Login/KakaoLoginButton';
import LogoBox from '@/components/units/Login/LogoBox';

const LoginPage = () => {
  return (
    <>
      <Header back />
      <div className="flex flex-col gap-[81px] px-[16px] m-[16px] pt-[70px]">
        <LogoBox />
        <div className="flex flex-col gap-3">
          <KakaoLoginButton />
          <GoogleLoginButton />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
