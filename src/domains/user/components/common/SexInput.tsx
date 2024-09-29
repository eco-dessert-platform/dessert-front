import React from 'react';

import { useFormContext } from 'react-hook-form';

import Radio from '@/shared/components/Radio';

const SexInput = () => {
  const { register, watch } = useFormContext();

  const sex = watch('sex');

  const isManSelected = sex === 'MAN';
  const isWomanSelected = sex === 'WOMAN';

  return (
    <div>
      <span className="inline-block mb-[6px] typo-title-14-semibold">
        성별 <span className="text-primaryOrangeRed"> *</span>
      </span>
      <span className="w-full inline-flex gap-4">
        <Radio isChecked={isManSelected} value="MAN" {...register('sex')}>
          <p className={isManSelected ? 'typo-title-14-medium' : 'typo-title-14-regular'}>남성</p>
        </Radio>
        <Radio isChecked={isWomanSelected} value="WOMAN" {...register('sex')}>
          <p className={isWomanSelected ? 'typo-title-14-medium' : 'typo-title-14-regular'}>여성</p>
        </Radio>
      </span>
    </div>
  );
};

export default SexInput;
