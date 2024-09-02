import { FORM_ID } from '@/domains/user/constants/form';
import ButtonNewver from '@/shared/components/ButtonNewver';
import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => (
  <DefaultLayout
    header={<Header title="프로필 수정" back />}
    main={children}
    footer={
      <PaddingWrapper>
        <ButtonNewver
          className="w-full"
          size="lg"
          form={FORM_ID.profileUpdate}
          type="submit"
          color="black"
        >
          수정하기
        </ButtonNewver>
      </PaddingWrapper>
    }
  />
);

export default Layout;
