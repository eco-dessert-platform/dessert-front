'use client';

import { useRecoilValue } from 'recoil';
import { preferenceState } from '@/domains/user/atoms/preference';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import FixedBottom from '@/shared/components/FixedBottom';

const ButtonSection = () => {
  const checkedValue = useRecoilValue(preferenceState);

  return (
    <FixedBottom>
      <PaddingWrapper className="bg-white">
        <ButtonNewver
          type="submit"
          disabled={checkedValue.length === 0}
          color="black"
          className="w-full transition-all duration-300 ease-in-out disabled:bg-gray-300 disabled:text-white"
        >
          완료
        </ButtonNewver>
      </PaddingWrapper>
    </FixedBottom>
  );
};

export default ButtonSection;
