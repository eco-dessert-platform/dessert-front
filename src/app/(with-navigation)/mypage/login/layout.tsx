import Header from '@/shared/components/Header';
import Loading from '@/shared/components/Loading';
import { ReactNode, Suspense } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header back />
    <Suspense fallback={<Loading />}>{children}</Suspense>
  </>
);

export default Layout;
