'use client';

import { ChangeEvent } from 'react';
import CheckBox from '@/shared/components/Checkbox';
import { useRecoilState } from 'recoil';
import { twMerge } from 'tailwind-merge';
import GrayDivider from '@/shared/components/GrayDivider';
import { agreeState } from '../../atoms/profile';

interface Props {
  className?: string;
}

const CheckSection = ({ className }: Props) => {
  const [agree, setAgree] = useRecoilState(agreeState);

  const checkAll = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setAgree({
      isAllowingMarketing: checked,
      isPersonalInfoConsented: checked,
      isTermsOfServiceAccepted: checked
    });
  };

  const onChangeMarketing = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setAgree((prev) => ({
      ...prev,
      isAllowingMarketing: checked
    }));
  };

  const onChangeService = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setAgree((prev) => ({
      ...prev,
      isTermsOfServiceAccepted: checked
    }));
  };

  const onChangePersonalInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setAgree((prev) => ({
      ...prev,
      isPersonalInfoConsented: checked
    }));
  };

  const allChecked =
    agree.isAllowingMarketing && agree.isPersonalInfoConsented && agree.isTermsOfServiceAccepted;

  return (
    <div className={twMerge('flex flex-col gap-[16px] w-full', className)}>
      <CheckBox name="" isChecked={allChecked} onChange={checkAll}>
        <span className="typo-title-16-medium text-gray-900">모두 동의합니다.</span>
      </CheckBox>
      <GrayDivider color="gray100" />
      <p className="typo-body-12-regular text-primaryOrangeRed">유효성체크문구영역</p>
      <CheckBox
        name="isTermsOfServiceAccepted"
        required
        isChecked={agree.isTermsOfServiceAccepted}
        onChange={onChangeService}
      >
        [필수] 서비스 이용약관
      </CheckBox>
      <CheckBox
        name="isPersonalInfoConsented"
        required
        isChecked={agree.isPersonalInfoConsented}
        onChange={onChangePersonalInfo}
      >
        [필수] 개인 정보 처리방침 및 수집이용 동의
      </CheckBox>
      <CheckBox
        name="isAllowingMarketing"
        isChecked={agree.isAllowingMarketing}
        onChange={onChangeMarketing}
      >
        [선택] 마케팅 수신 정보 및 이용 동의
      </CheckBox>
    </div>
  );
};

export default CheckSection;
