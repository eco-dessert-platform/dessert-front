import { ReactNode } from 'react';
import Header from '@/shared/components/Header';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header title="찜" />
    {children}
  </>
);

export default Layout;
