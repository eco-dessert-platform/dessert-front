import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import { ReactNode } from 'react';
import userService from '@/domains/user/queries/service';
import ButtonSection from './_blocks/ButtonSection';
import UpdateFormProvider from './_blocks/UpdateFormProvider';

interface Props {
  children: ReactNode;
}

const Layout = async ({ children }: Props) => {
  const myProfile = await userService.getUserProfile();
  return (
    <UpdateFormProvider defaultValues={myProfile}>
      <DefaultLayout
        header={<Header title="프로필 수정" back />}
        main={children}
        footer={<ButtonSection />}
      />
    </UpdateFormProvider>
  );
};

export default Layout;
