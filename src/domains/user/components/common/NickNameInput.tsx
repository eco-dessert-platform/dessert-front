'use client';

import { useRecoilState } from 'recoil';
import { ChangeEvent, useId } from 'react';
import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';
import useNicknameDoubleCheckMutation from '../../queries/useNicknameDoubleCheckMutation';
import { nicknameState } from '../../atoms/profile';

interface NicknameInputProps {
  defaultValue?: string;
}

const NicknameInput = ({ defaultValue }: NicknameInputProps) => {
  const inputId = useId();
  const { mutate, data } = useNicknameDoubleCheckMutation();
  const [nickname, setNickname] = useRecoilState(nicknameState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
  };

  const checkDouble = () => {
    mutate(nickname);
  };

  return (
    <div className="w-full">
      <Input
        id={inputId}
        placeholder="닉네임을 입력해 주세요."
        label="닉네임"
        onChange={onChange}
        autoComplete="off"
        required
        maxLength={20}
        defaultValue={defaultValue}
        className="typo-title-14-medium"
        button={
          <Button
            type="button"
            variants="input"
            className="typo-body-12-medium"
            onClick={checkDouble}
          >
            중복확인
          </Button>
        }
      />
      {data?.message && (
        <div className="mt-[4px] text-gray-600 typo-body-12-medium">{data.message}</div>
      )}
    </div>
  );
};

export default NicknameInput;
