'use client';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { IReviewWriteForm } from '@/domains/review/types/review';
import { useFormContext } from 'react-hook-form';
import ButtonNewver from '@/shared/components/ButtonNewver';

const CompleteButtonSection = () => {
  const {
    formState: { isValid }
  } = useFormContext<IReviewWriteForm>();

  return (
    <div className="fixed z-bottomButton left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[600px] bg-white">
      <PaddingWrapper>
        <ButtonNewver color="black" className="w-full" type="submit" disabled={!isValid}>
          완료
        </ButtonNewver>
      </PaddingWrapper>
    </div>
  );
};

export default CompleteButtonSection;
