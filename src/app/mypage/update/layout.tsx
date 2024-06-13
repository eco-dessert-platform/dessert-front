import Header from '@/shared/components/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header title="회원 수정" back />
    {children}
  </>
);

export default Layout;
