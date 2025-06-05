'use client';

import { ChangeEvent } from 'react';

import { useFormContext } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

import ViewLinkWrapper from '@/domains/user/components/RegistrationForm/CheckSection/ViewLinkWrapper';
import CheckBox from '@/shared/components/Checkbox';
import GrayDivider from '@/shared/components/GrayDivider';
import PATH from '@/shared/constants/path';

interface Props {
  className?: string;
}

const CheckSection = ({ className }: Props) => {
  const { watch, setValue } = useFormContext();

  const allChecked =
    watch('isAllowingMarketing') &&
    watch('isPersonalInfoConsented') &&
    watch('isTermsOfServiceAccepted');

  const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setValue('isAllowingMarketing', checked);
    setValue('isPersonalInfoConsented', checked);
    setValue('isTermsOfServiceAccepted', checked);
  };

  return (
    <div className={twMerge('flex flex-col gap-[16px] w-full', className)}>
      <CheckBox name="" isChecked={allChecked} onChange={checkAll}>
        <span className="typo-title-16-medium text-gray-900">모두 동의합니다.</span>
      </CheckBox>
      <GrayDivider color="gray100" />
      <p className="typo-body-12-regular text-primary-orange-red">유효성체크문구영역</p>
      <CheckBox
        name="isTermsOfServiceAccepted"
        isChecked={watch('isTermsOfServiceAccepted')}
        onChange={(e) => setValue('isTermsOfServiceAccepted', e.target.checked)}
      >
        <ViewLinkWrapper href={PATH.serviceTerm}>[필수] 서비스 이용약관</ViewLinkWrapper>
      </CheckBox>
      <CheckBox
        name="isPersonalInfoConsented"
        isChecked={watch('isPersonalInfoConsented')}
        onChange={(e) => setValue('isPersonalInfoConsented', e.target.checked)}
      >
        <ViewLinkWrapper href={PATH.privacyPolicy}>
          [필수] 개인 정보 처리방침 및 수집이용 동의
        </ViewLinkWrapper>
      </CheckBox>
      <CheckBox
        name="isAllowingMarketing"
        isChecked={watch('isAllowingMarketing')}
        onChange={(e) => setValue('isAllowingMarketing', e.target.checked)}
      >
        <ViewLinkWrapper href={PATH.marketing}>
          [선택] 마케팅 수신 정보 및 이용 동의
        </ViewLinkWrapper>
      </CheckBox>
    </div>
  );
};

export default CheckSection;
