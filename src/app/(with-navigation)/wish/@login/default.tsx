import SadBbangleBox from '@/shared/components/SadBbangleBox';
import Button from '@/shared/components/Button';
import Link from 'next/link';
import PATH from '@/shared/constants/path';

const WishLoginPage = () => (
  <SadBbangleBox className="absoulte-center">
    <div className="flex flex-col gap-[16px]">
      <div>로그인후 이용 가능한 기능입니다.</div>
      <Link href={PATH.login}>
        <Button variants="primary-bd" className="w-[159px]">
          로그인/회원가입
        </Button>
      </Link>
    </div>
  </SadBbangleBox>
);

export default WishLoginPage;
