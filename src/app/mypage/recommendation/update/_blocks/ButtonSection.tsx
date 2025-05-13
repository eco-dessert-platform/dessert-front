'use client';

import { useParams } from 'next/navigation';
import { useFormContext } from 'react-hook-form';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { FORM_ID } from '@/domains/user/constants/form';
import { RecommendationType } from '@/domains/user/types/recommendation';

const ButtonSection = () => {
  const { progress } = useParams<{ progress: '1' | '2' }>();
  const { watch } = useFormContext<RecommendationType>();
  const { step1, step2 } = watch();
  const isStep1Disabled = step1.preferenceType.length === 0;
  const isStep2Disabled =
    !(step2.dietLimitation.length > 0) ||
    !(step2.healthConcerns.length > 0) ||
    !(step2.unmatchedIngredientList.length > 0);

  const config = {
    '1': {
      children: '다음',
      form: FORM_ID.recommendationUpdateStep1,
      disabled: isStep1Disabled
    },
    '2': {
      children: '수정 완료',
      form: FORM_ID.recommendationUpdateStep2,
      disabled: isStep2Disabled
    }
  };

  return (
    <PaddingWrapper>
      <ButtonNewver
        type="submit"
        size="lg"
        color="black"
        className="w-full"
        {...config[progress]}
      />
    </PaddingWrapper>
  );
};

export default ButtonSection;
