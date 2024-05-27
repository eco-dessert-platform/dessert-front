'use client';

import { useRecoilValue } from 'recoil';
import { preferenceState } from '@/domains/user/atoms/profile';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Button from '@/shared/components/Button';

const ButtonSection = () => {
  const checkedValue = useRecoilValue(preferenceState);

  return (
    <div className="fixed z-[5000] w-full max-w-[600px] -translate-x-1/2 bottom-0 left-1/2 bg-white">
      <PaddingWrapper>
        <Button
          type="submit"
          disabled={checkedValue.length === 0}
          className="transition-all duration-300 ease-in-out disabled:bg-gray-300 disabled:text-white"
        >
          완료
        </Button>
      </PaddingWrapper>
    </div>
  );
};

export default ButtonSection;
