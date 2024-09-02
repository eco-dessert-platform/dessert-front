import WithdrawButton from '@/domains/user/components/WithdrawForm/WithdrawButton';
import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <DefaultLayout
    header={<Header title="회원 탈퇴" back />}
    main={children}
    footer={<WithdrawButton disabled={false} />} // Todo. disabled 검증
  />
);

export default Layout;
