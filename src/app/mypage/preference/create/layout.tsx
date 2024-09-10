import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { FORM_ID } from '@/domains/user/constants/form';
import PreferenceFormProvider from '../_blocks/PreferenceFormProvider';

interface PreferenceCreateLayoutProps {
  children: React.ReactNode;
}

const PreferenceCreateLayout = ({ children }: PreferenceCreateLayoutProps) => (
  <PreferenceFormProvider defaultValues={{ preferenceType: [] }}>
    <DefaultLayout
      header={<Header title="맞춤 추천 받기" />}
      main={children}
      footer={
        <PaddingWrapper>
          <ButtonNewver
            form={FORM_ID.preferenceCreate}
            type="submit"
            size="lg"
            color="black"
            className="w-full"
          >
            완료
          </ButtonNewver>
        </PaddingWrapper>
      }
    />
  </PreferenceFormProvider>
);

export default PreferenceCreateLayout;
