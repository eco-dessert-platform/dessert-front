'use client';

import CheckBox from '@/components/commons/checkbox/client/Checkbox';
import { useRecoilState } from 'recoil';
import { agreeState } from '../../../atoms';
import { ChangeEvent } from 'react';

const CheckSection = () => {
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
    setAgree(prev => ({
      ...prev,
      isAllowingMarketing: checked
    }));
  };

  const onChangeService = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setAgree(prev => ({
      ...prev,
      isTermsOfServiceAccepted: checked
    }));
  };

  const onChangePersonalInfo = (e: ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setAgree(prev => ({
      ...prev,
      isPersonalInfoConsented: checked
    }));
  };

  const allChecked =
    agree.isAllowingMarketing && agree.isPersonalInfoConsented && agree.isTermsOfServiceAccepted;

  return (
    <div className="flex flex-col gap-[16px] w-full">
      <CheckBox isChecked={allChecked} onChange={checkAll}>
        <span className="text-base text-gray-900">모두 동의합니다.</span>
      </CheckBox>
      <hr />
      <CheckBox required isChecked={agree.isTermsOfServiceAccepted} onChange={onChangeService}>
        [필수] 서비스 이용약관
      </CheckBox>
      <CheckBox required isChecked={agree.isPersonalInfoConsented} onChange={onChangePersonalInfo}>
        [필수] 개인 정보 처리방침 및 수집이용 동의
      </CheckBox>
      <CheckBox isChecked={agree.isAllowingMarketing} onChange={onChangeMarketing}>
        [선택] 마케팅 수신 정보 및 이용 동의
      </CheckBox>
    </div>
  );
};

export default CheckSection;
