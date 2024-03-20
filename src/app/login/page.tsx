import Login from '@/components/commons/Login/server/Login';
import Header from '@/components/commons/header/client/Header';

const LoginPage = () => {
  return (
    <>
      <Header title="" back />
      <Login
        title="안녕하세요👋 빵그리의 오븐입니다 :)"
        subTitle="여러분들이 원하는 비건 베이커리들을 함께 만나봐요!"
      />
    </>
  );
};

export default LoginPage;
