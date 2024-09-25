'use client';

import { useId } from 'react';

import { useFormContext } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';

import Button from '@/shared/components/Button';
import Input from '@/shared/components/Input';

import { nicknameState } from '../../atoms/profile';
import useNicknameDoubleCheckMutation from '../../queries/useNicknameDoubleCheckMutation';

const NicknameInput = () => {
  const inputId = useId();
  const { mutate, data } = useNicknameDoubleCheckMutation();

  const setNick = useSetRecoilState(nicknameState);
  const {
    register,
    watch,
    setValue,
    formState: { defaultValues }
  } = useFormContext();

  const nickname = watch('nickname', defaultValues?.nickname);

  const nickDoubleCheck = () => {
    mutate(nickname || '', {
      onSuccess: (res) => {
        if (res.isValid) {
          setNick(nickname || '');
        } else {
          setNick('');
          setValue('nickname', '');
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
        {...register('nickname', {
          onChange: (e) => {
            const { value } = e.target;
            setNick(value);
          }
        })}
        placeholder="닉네임을 입력해 주세요."
        label="닉네임"
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
            onClick={nickDoubleCheck}
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
