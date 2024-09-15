import React, { ChangeEvent } from 'react';

import { useRecoilState } from 'recoil';

import Radio from '@/shared/components/Radio';

import { sexState } from '../../atoms/profile';

const SexInput = () => {
  const [sex, setSex] = useRecoilState(sexState);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setSex(value);
  };

  const isManSelected = sex === 'MAN';
  const isWomanSelected = sex === 'WOMAN';

  return (
    <div>
      <span className="inline-block mb-[6px] typo-title-14-semibold">
        성별 <span className="text-primaryOrangeRed"> *</span>
      </span>
      <span className="w-full inline-flex gap-4">
        <Radio isChecked={isManSelected} value="MAN" onChange={onChange}>
          <p className={isManSelected ? 'typo-title-14-medium' : 'typo-title-14-regular'}>남성</p>
        </Radio>
        <Radio isChecked={isWomanSelected} value="WOMAN" onChange={onChange}>
          <p className={isWomanSelected ? 'typo-title-14-medium' : 'typo-title-14-regular'}>여성</p>
        </Radio>
      </span>
    </div>
  );
};

export default SexInput;
