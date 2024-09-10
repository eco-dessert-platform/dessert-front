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
    header={<Header title="프로필 등록" />}
    main={children}
    footer={
      <PaddingWrapper>
        <ButtonNewver
          form={FORM_ID.profileRegist}
          type="submit"
          size="lg"
          className="w-full"
          color="black"
        >
          완료
        </ButtonNewver>
      </PaddingWrapper>
    }
  />
);

export default Layout;
