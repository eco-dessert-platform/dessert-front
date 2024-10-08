import { getCookie } from '@/shared/actions/cookie';
import { ReactNode } from 'react';
import { TOKEN } from '@/shared/constants/token';
import { getStaticMetadata } from '@/shared/utils/metadata';
import WishHeader from '@/blocks/wish/(list)/products/WishHeader';

export const metadata = getStaticMetadata('wish');

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
