'use client';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { IReviewWriteForm } from '@/domains/review/types/review';
import { useFormContext } from 'react-hook-form';
import ButtonNewver from '@/shared/components/ButtonNewver';
import FixedBottom from '@/shared/components/FixedBottom';

const CompleteButtonSection = () => {
  const {
    formState: { isValid }
  } = useFormContext<IReviewWriteForm>();

  return (
    <FixedBottom>
      <PaddingWrapper className="bg-white">
        <ButtonNewver color="black" className="w-full" type="submit" disabled={!isValid}>
          완료
        </ButtonNewver>
      </PaddingWrapper>
    </FixedBottom>
  );
};

export default CompleteButtonSection;
