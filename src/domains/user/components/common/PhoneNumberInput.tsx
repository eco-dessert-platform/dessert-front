'use client';

import { ChangeEventHandler, FormEventHandler } from 'react';
import Input from '@/shared/components/Input';
import Button from '@/shared/components/Button';
import { useSetRecoilState } from 'recoil';
import { phoneNumberState } from '../../atoms/profile';

interface PhoneNumberInputProps {
  defaultValue?: string;
}

const PhoneNumberInput = ({ defaultValue }: PhoneNumberInputProps) => {
  const setPhoneNumber = useSetRecoilState(phoneNumberState);

  const toPhoneNumberFormat = (phoneNumber: string) =>
    phoneNumber
      .replace(/[^0-9]/g, '')
      .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1-$2-$3')
      .replace(/(-{1,2})$/g, '');

  const fromPhoneNumberFormat = (phoneNumber: string) => phoneNumber.replaceAll('-', '');

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { value } = e.target;
    setPhoneNumber(fromPhoneNumberFormat(value));
  };

  const onInput: FormEventHandler<HTMLInputElement> = (e) => {
    e.currentTarget.value = toPhoneNumberFormat(e.currentTarget.value);
  };

  return (
    <div className="w-full">
      <Input
        type="tel"
        label="휴대폰번호"
        placeholder="010-1234-5678"
        button={
          <Button
            disabled
            type="button"
            variants="input"
            className="typo-body-12-medium"
            onClick={() => {}}
          >
            인증하기
          </Button>
        }
        maxLength={13}
        defaultValue={defaultValue && toPhoneNumberFormat(defaultValue)}
        onChange={onChange}
        required
        onInput={onInput}
      />
    </div>
  );
};

export default PhoneNumberInput;
