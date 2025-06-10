import WithdrawButton from '@/domains/user/components/WithdrawForm/WithdrawButton';
import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import { ReactNode } from 'react';
import { WithdrawFormType } from '@/domains/user/types/profile';
import WithdrawFormProvider from './_blocks/WithdrawFormProvider';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const defaultValues: WithdrawFormType = {
    deleteReasons: [],
    isAgreeChecked: false
  };

  return (
    <WithdrawFormProvider defaultValues={defaultValues}>
      <DefaultLayout
        header={<Header title="회원 탈퇴" back />}
        main={children}
        footer={<WithdrawButton />}
      />
    </WithdrawFormProvider>
  );
};

export default Layout;
