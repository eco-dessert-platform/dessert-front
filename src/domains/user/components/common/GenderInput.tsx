import React from 'react';

import Radio from '@/shared/components/Radio';

const GenderInput = () => (
    <div>
      <span className="inline-block mb-[6px] typo-title-14-semibold">
        성별 <span className="text-primaryOrangeRed"> *</span>
      </span>
      <span className="w-full inline-flex gap-4">
        <Radio isChecked>남성</Radio>
        <Radio isChecked>여성</Radio>
      </span>
    </div>
  );

export default GenderInput;
