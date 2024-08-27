import type { Metadata } from 'next';
import { getCookie } from '@/shared/actions/cookie';
import { ReactNode } from 'react';
import { TOKEN } from '@/shared/constants/token';
import WishHeader from '@/blocks/wish/(list)/products/WishHeader';

export const metadata: Metadata = {
  title: '위시리스트',
  description: '관심있는 상품이나 스토어를 위시리스트에 담아보세요.'
};

interface Props {
  children: ReactNode;
  login: ReactNode;
}

const Layout = async ({ children, login }: Props) => {
  const accessToken = await getCookie(TOKEN.accessToken);
  const isLoggedIn = !!accessToken;

  return (
    <>
      <WishHeader />
      {isLoggedIn ? children : login}
    </>
  );
};
export default Layout;
