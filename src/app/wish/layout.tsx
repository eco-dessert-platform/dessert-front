import { getCookie } from '@/shared/actions/cookie';
import Header from '@/shared/components/Header';
import ProductAndStoreTab from '@/shared/components/ProductAndStoreTab';
import PATH from '@/shared/constants/path';
import { ReactNode } from 'react';
import { TOKEN } from '@/shared/constants/token';

interface Props {
  children: ReactNode;
  login: ReactNode;
}

const Layout = async ({ children, login }: Props) => {
  const accessToken = await getCookie(TOKEN.accessToken);
  const isLoggedIn = !!accessToken;

  return (
    <>
      <Header title="찜" />
      <ProductAndStoreTab defaultPath={PATH.wish} />
      {isLoggedIn ? children : login}
    </>
  );
};
export default Layout;
