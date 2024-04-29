'use client';

import { useRecoilValue } from 'recoil';
import { personalizedRecommendationState } from '@/domains/user/atoms/profile';
import Button from '@/shared/components/Button';

const ButtonSection = () => {
  const checkedValue = useRecoilValue(personalizedRecommendationState);

  return (
    <div className="fixed w-full max-w-[600px] px-[16px] transform -translate-x-1/2 bottom-24 left-1/2">
      <Button
        type="submit"
        disabled={Object.values(checkedValue).every((item) => item === false)}
        className={`
          transition-all duration-300 ease-in-out
          disabled:bg-gray-300 disabled:text-white
      `}
      >
        완료
      </Button>
    </div>
  );
};

export default ButtonSection;
