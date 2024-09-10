'use client';

import { ChangeEvent, useId, useState } from 'react';

import { useSetRecoilState } from 'recoil';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';

import { nicknameState } from '../../atoms/profile';
import useNicknameDoubleCheckMutation from '../../queries/useNicknameDoubleCheckMutation';

interface NicknameInputProps {
  defaultValue?: string;
}

const NicknameInput = ({ defaultValue }: NicknameInputProps) => {
  const inputId = useId();
  const { mutate, data } = useNicknameDoubleCheckMutation();
  const [nickname, setNickname] = useState(defaultValue);
  const setNick = useSetRecoilState(nicknameState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
  };

  const checkDouble = () => {
    mutate(nickname || '', {
      onSuccess: (res) => {
        if (res.isValid) {
          setNick(nickname || '');
        } else {
          setNick('');
          setNickname('');
        }
      },
      onError: (error) => {
        console.error('닉네임 중복 체크 실패:', error);
      }
    });
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
        value={nickname}
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
