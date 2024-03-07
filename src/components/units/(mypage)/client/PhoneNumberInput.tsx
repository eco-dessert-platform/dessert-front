'use client';

import Input from '@/components/commons/inputs/Input';
import Button from '@/components/commons/button/client/Button';
import { useSetRecoilState } from 'recoil';
import { phoneNumberState } from '../atoms';
import { ChangeEventHandler } from 'react';

interface PhoneNumberInputProps {
  defaultValue?: string;
}

const PhoneNumberInput = ({ defaultValue }: PhoneNumberInputProps) => {
  const setPhoneNumber = useSetRecoilState(phoneNumberState);

  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    const { value } = e.target;
    setPhoneNumber(value);
  };

  return (
    <div className="w-full">
      <Input
        type="tel"
        label="휴대폰 번호"
        placeholder="-를 제외한 휴대폰 번호를 입력해 주세요."
        button={
          <Button disabled type="button" variants="input" onClick={() => {}}>
            인증하기
          </Button>
        }
        defaultValue={defaultValue}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default PhoneNumberInput;
