import Header from '@/shared/components/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <>
    <Header title="마케팅 수신 정보 이용 동의" back />
    {children}
  </>
);

export default Layout;
