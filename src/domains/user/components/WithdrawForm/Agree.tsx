'use client';

import { useFormContext } from 'react-hook-form';
import { WithdrawFormType } from '@/domains/user/types/profile';
import CheckBoxNewver from '@/shared/components/CheckboxNewver';
import { cn } from '@/shared/utils/cn';

const Agree = () => {
  const { watch, register } = useFormContext<WithdrawFormType>();
  const isAgreeChecked = watch('isAgreeChecked');

  return (
    <label htmlFor="agree" className="flex gap-[4px] items-center cursor-pointer">
      <CheckBoxNewver
        id="agree"
        checked={isAgreeChecked}
        {...register('isAgreeChecked', { required: true })}
      />
      <p
        className={cn(
          'typo-body-12-medium',
          isAgreeChecked ? 'text-primaryOrangeRed' : 'text-gray-900'
        )}
      >
        회원탈퇴 유의사항을 확인했으며 이에 동의합니다.
      </p>
    </label>
  );
};

export default Agree;
