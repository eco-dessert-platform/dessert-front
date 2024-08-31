import Header from '@/shared/components/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header title="프로필 수정" back />
    {children}
  </>
);

export default Layout;
