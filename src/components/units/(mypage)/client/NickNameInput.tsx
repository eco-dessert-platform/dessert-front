'use client';

import Button from '@/components/commons/button/client/Button';
import Input from '@/components/commons/inputs/Input';
import { ChangeEvent, useId } from 'react';
import useNicknameDoubleCheckMutation from '../hooks/useNicknameDoubleCheckMutation';
import { useRecoilState } from 'recoil';
import { nicknameState } from '../atoms';

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
    if (!nickname) {
    }

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
        button={
          <Button type="button" variants="input" onClick={checkDouble}>
            중복확인
          </Button>
        }
      />
      {data?.message && <div className="h-4 text-xs mt-[4px] text-gray-600">{data.message}</div>}
    </div>
  );
};

export default NicknameInput;
