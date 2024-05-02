import { getCookie } from '@/shared/actions/cookie';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  login: ReactNode;
}

const Layout = async ({ children, login }: Props) => {
  const accessToken = await getCookie('accessToken');
  const isLoggedIn = !!accessToken;

  return isLoggedIn ? children : login;
};
export default Layout;
