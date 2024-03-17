import GoogleLogin from '@/components/commons/Login/client/GoogleLogin';
import KakaoLogin from '@/components/commons/Login/client/KakaoLogin';
import LogoBox from '@/components/commons/Login/client/LogoBox';

interface LoginProps {
  title: string;
  subTitle: string;
}

const Login = ({ title, subTitle }: LoginProps) => {
  return (
    <div className="w-[91%] m-auto">
      <LogoBox />
      <div className="mb-20">
        <p className="text-base font-semibold text-center text-neutral-800 ">{title}</p>
        <p className="text-sm font-normal text-center text-neutral-700">{subTitle}</p>
      </div>
      <div className="flex flex-col gap-3">
        <KakaoLogin />
        <GoogleLogin />
      </div>
    </div>
  );
};

export default Login;
