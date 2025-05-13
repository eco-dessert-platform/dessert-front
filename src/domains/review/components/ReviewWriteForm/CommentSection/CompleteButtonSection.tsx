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
    <PaddingWrapper>
      <ButtonNewver color="black" className="w-full" type="submit" disabled={!isValid}>
        완료
      </ButtonNewver>
    </PaddingWrapper>
  );
};

export default CompleteButtonSection;
