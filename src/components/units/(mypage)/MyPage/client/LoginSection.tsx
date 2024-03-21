import PaddingWrapper from '@/components/commons/PaddingWrapper';
import { IconLogoSub } from '@/components/units/(mypage)/MyPage/client/Icons';
import SignInButton from '@/components/units/(mypage)/MyPage/client/SignInButton';

const LoginSection = () => {
  return (
    <PaddingWrapper className="flex items-center flex-col gap-[16px] pb-[26px]">
      <IconLogoSub />
      <SignInButton />
      <p className="text-14 tracking-tight-2 leading-150 text-gray-800">
        회원가입 및 로그인을 하고 더 많은 정보들을 받아보세요! 🎉
      </p>
    </PaddingWrapper>
  );
};

export default LoginSection;
