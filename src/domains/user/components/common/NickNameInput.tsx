'use client';

import { useId } from 'react';
import { useFormContext } from 'react-hook-form';
import ButtonNewver from '@/shared/components/ButtonNewver';
import Input from '@/shared/components/Input';
import useNicknameDoubleCheckMutation from '../../queries/useNicknameDoubleCheckMutation';

const NicknameInput = () => {
  const inputId = useId();
  const { mutate, data, reset } = useNicknameDoubleCheckMutation();
  const { watch, setValue } = useFormContext();

  const nickname = watch('nickname');

  const nickDoubleCheck = () => {
    mutate(nickname || '', {
      onSuccess: (res) => {
        if (res.isValid) {
          setValue('nickname', nickname, { shouldDirty: true });
          setValue('isNickDoubleChecked', true);
        } else {
          setValue('isNickDoubleChecked', false);
        }
      },
      onError: (error) => {
        console.error('닉네임 중복 체크 실패:', error);
        setValue('isNickDoubleChecked', false);
      }
    });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue('nickname', e.target.value);
    setValue('isNickDoubleChecked', false);
    reset();
  };

  return (
    <div className="w-full">
      <Input
        id={inputId}
        placeholder="닉네임을 입력해 주세요."
        label="닉네임"
        autoComplete="off"
        required
        value={nickname}
        onChange={onInputChange}
        maxLength={20}
        className="typo-title-14-medium"
        button={
          <ButtonNewver
            type="button"
            color="gray"
            radius="square"
            className="typo-body-12-medium my-[14px] h-[30px] min-w-[64px] px-0"
            onClick={nickDoubleCheck}
          >
            중복확인
          </ButtonNewver>
        }
      />
      {data?.message && (
        <div className="mt-[4px] text-gray-600 typo-body-12-medium">{data.message}</div>
      )}
    </div>
  );
};

export default NicknameInput;
