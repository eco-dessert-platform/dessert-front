import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import { transformDataToAtomFormat } from '@/domains/user/utils/transformPreference';
import userService from '@/domains/user/queries/service';
import ButtonNewver from '@/shared/components/ButtonNewver';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { FORM_ID } from '@/domains/user/constants/form';
import PreferenceFormProvider from '../_blocks/PreferenceFormProvider';

interface PreferenceUpdateLayoutProps {
  children: React.ReactNode;
}

const PreferenceUpdateLayout = async ({ children }: PreferenceUpdateLayoutProps) => {
  const data = await userService.getPreference();
  const preferenceType = transformDataToAtomFormat(data);

  return (
    <PreferenceFormProvider defaultValues={{ preferenceType }}>
      <DefaultLayout
        header={<Header title="맞춤 추천 수정하기" back />}
        main={children}
        footer={
          <PaddingWrapper>
            <ButtonNewver
              form={FORM_ID.preferenceUpdate}
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
};

export default PreferenceUpdateLayout;
