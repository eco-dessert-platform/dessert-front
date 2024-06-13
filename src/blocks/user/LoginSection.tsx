import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Button from '@/shared/components/Button';
import PATH from '@/shared/constants/path';
import Link from 'next/link';
import { BbangleIcon } from '@/shared/components/icons';

const LoginSection = () => (
  <PaddingWrapper className="flex items-center flex-col gap-[16px] pb-[26px]">
    <BbangleIcon shape="vertical-name" />
    <Link href={PATH.login} className="w-full">
      <Button variants="primary-orange">로그인/회원가입</Button>
    </Link>
    <p className="text-14 tracking-tight-2 leading-150 text-gray-800">
      회원가입 및 로그인을 하고 더 많은 정보들을 받아보세요! 🎉
    </p>
  </PaddingWrapper>
);

export default LoginSection;
