import Header from '@/shared/components/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header title="개인정보 처리방침 및 수집이용 동의" back />
    {children}
  </>
);

export default Layout;
