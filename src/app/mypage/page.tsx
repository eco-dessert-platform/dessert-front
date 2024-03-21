import Header from '@/components/commons/header/client/Header';
import UserInfo from '@/components/units/(mypage)/MyPage/client/UserInfo';
import MoreInfo from '@/components/units/(mypage)/MyPage/client/MoreInfo';
import KaKaoChatScript from '@/components/units/(mypage)/MyPage/client/KaKaoChatScript';
import SeparateLine from '@/components/units/(mypage)/MyPage/client/SeparateLine';
import LoginSection from '@/components/units/(mypage)/MyPage/client/LoginSection';

const IsLoggedIn = false;

const MyPage = () => {
  return (
    <>
      <Header title="마이페이지" />
      {IsLoggedIn ? <UserInfo /> : <LoginSection />}
      <SeparateLine />
      <MoreInfo />
      <KaKaoChatScript />
    </>
  );
};

export default MyPage;
