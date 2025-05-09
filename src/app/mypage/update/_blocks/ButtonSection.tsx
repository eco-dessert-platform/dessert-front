'use client';

import { FORM_ID } from '@/domains/user/constants/form';
import ButtonNewver from '@/shared/components/ButtonNewver';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import React, { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';

const ButtonSection = () => {
  const {
    formState: { isDirty },
    watch,
    setValue
  } = useFormContext();

  useEffect(() => {
    setValue('isNickDoubleChecked', true);
  }, []);

  const isNickDoubleChecked = watch('isNickDoubleChecked');
  const isDisabled = !isNickDoubleChecked || !isDirty;

  return (
    <PaddingWrapper>
      <ButtonNewver
        form={FORM_ID.profileUpdate}
        type="submit"
        size="lg"
        className="w-full"
        color="black"
        disabled={isDisabled}
      >
        수정하기
      </ButtonNewver>
    </PaddingWrapper>
  );
};

export default ButtonSection;
