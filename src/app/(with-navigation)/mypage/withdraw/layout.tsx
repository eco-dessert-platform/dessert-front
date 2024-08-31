import Header from '@/shared/components/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header title="회원 탈퇴" back />
    {children}
  </>
);

export default Layout;
