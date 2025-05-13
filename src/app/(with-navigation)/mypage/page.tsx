import Header from '@/shared/components/Header';
import UserInfoSection from '@/blocks/user/UserInfoSection';
import MoreInfoSection from '@/blocks/user/MoreInfoSection';
import DisplayFcmToken from '@/blocks/user/DisplayFcmToken';
import { getCookie } from '@/shared/actions/cookie';
import LoginSection from '@/blocks/user/LoginSection';
import { TOKEN } from '@/shared/constants/token';
import { getStaticMetadata } from '@/shared/utils/metadata';

export const metadata = getStaticMetadata('mypage');

const MyPage = async () => {
  const accessToken = await getCookie(TOKEN.accessToken);
  const isLoggedIn = !!accessToken;

  return (
    <>
      <div className="relative">
        <Header title="마이페이지" />
        <DisplayFcmToken />
      </div>
      {isLoggedIn ? <UserInfoSection /> : <LoginSection />}
      <div className="w-full h-[6px] bg-gray-100" />
      <MoreInfoSection />
    </>
  );
};

export default MyPage;
