import WithdrawButton from '@/domains/user/components/WithdrawForm/WithdrawButton';
import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import { ReactNode } from 'react';
import WithdrawFormProvider from './_blocks/WithdrawFormProvider';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <WithdrawFormProvider defaultValues={{ deleteReasons: [], isAgreeChecked: false }}>
    <DefaultLayout
      header={<Header title="회원 탈퇴" back />}
      main={children}
      footer={<WithdrawButton />}
    />
  </WithdrawFormProvider>
);

export default Layout;
