'use client';

import { useId, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ButtonNewver from '@/shared/components/ButtonNewver';
import Input from '@/shared/components/Input';
import useNicknameDoubleCheckMutation from '../../queries/useNicknameDoubleCheckMutation';

const MAX_LENGTH = 20;

const NicknameInput = () => {
  const inputId = useId();
  const { mutate, data } = useNicknameDoubleCheckMutation();
  const { watch, setValue } = useFormContext();

  const [isNickNameTouched, setIsNickNameTouched] = useState(false);
  const [isNickNameMessageVisible, setIsNickNameMessageVisible] = useState(false);

  const nickname = watch('nickname');
  const nicknameLength = nickname.length;
  const nicknameClass = nicknameLength === 0 ? 'text-gray-400' : 'text-gray-600';

  const checkResult = (isValid: boolean) => {
    setIsNickNameTouched(false);
    setIsNickNameMessageVisible(true);
    setValue('isNickDoubleChecked', isValid, isValid ? { shouldDirty: true } : undefined);
  };

  const nickDoubleCheck = () => {
    if (!isNickNameTouched) return;

    mutate(nickname, {
      onSuccess: (res) => {
        checkResult(res.isValid);
      },
      onError: (error) => {
        console.error('닉네임 중복 체크 실패:', error);
        checkResult(false);
      }
    });
  };

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsNickNameTouched(true);
    setIsNickNameMessageVisible(false);
    setValue('nickname', e.target.value);
    setValue('isNickDoubleChecked', false);
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
        maxLength={MAX_LENGTH}
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
      {data?.message && isNickNameMessageVisible && (
        <div className="typo-body-12-medium float-start mt-[4px] text-gray-600">{data.message}</div>
      )}
      <p className="typo-body-12-medium float-end mt-[4px] text-gray-600">
        <span className={nicknameClass}>{nicknameLength}</span>/ {MAX_LENGTH}
      </p>
    </div>
  );
};

export default NicknameInput;
