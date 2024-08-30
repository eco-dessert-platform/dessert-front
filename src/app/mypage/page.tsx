import type { Metadata } from 'next';
import Header from '@/shared/components/Header';
import UserInfoSection from '@/blocks/user/UserInfoSection';
import MoreInfoSection from '@/blocks/user/MoreInfoSection';
import DisplayFcmToken from '@/blocks/user/DisplayFcmToken';
import { getCookie } from '@/shared/actions/cookie';
import LoginSection from '@/blocks/user/LoginSection';
import { TOKEN } from '@/shared/constants/token';

export const metadata: Metadata = {
  title: '마이페이지',
  description: '빵그리의 오븐에 로그인 하고 다양한 서비스를 이용해 보세요.',
  openGraph: {
    title: '마이페이지 | 빵그리의 오븐',
    description: '빵그리의 오븐에 로그인 하고 다양한 서비스를 이용해 보세요.'
  }
};

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
