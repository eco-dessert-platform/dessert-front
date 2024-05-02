import Header from '@/shared/components/Header';
import UserInfoSection from '@/blocks/user/UserInfoSection';
import MoreInfoSection from '@/blocks/user/MoreInfoSection';
import { getCookie } from '@/shared/actions/cookie';
import LoginSection from '@/blocks/user/LoginSection';

const MyPage = async () => {
  const accessToken = await getCookie('accessToken');
  const isLoggedIn = !!accessToken;

  return (
    <>
      <Header title="마이페이지" />
      {isLoggedIn ? <UserInfoSection /> : <LoginSection />}
      <div className="w-full h-[6px] bg-gray-100" />
      <MoreInfoSection />
    </>
  );
};

export default MyPage;
