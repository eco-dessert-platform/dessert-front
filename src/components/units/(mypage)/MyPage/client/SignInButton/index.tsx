import Button from '@/components/commons/button/client/Button';
import Link from 'next/link';

const SignInButton = () => {
  return (
    <Link href="/mypage/login" className="w-full">
      <Button variants="primary-orange">로그인/회원가입</Button>
    </Link>
  );
};

export default SignInButton;
