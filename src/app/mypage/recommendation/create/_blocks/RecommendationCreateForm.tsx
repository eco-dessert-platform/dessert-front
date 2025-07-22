'use client';

import useAddRecommendationMutation from '@/domains/user/queries/useAddRecommendationMutation';
import { RecommendationType } from '@/domains/user/types/recommendation';
import { SubmitHandler, useFormContext } from 'react-hook-form';
import { FORM_ID } from '@/domains/user/constants/form';
import RecommendationStep1Form from '@/domains/user/components/RecommendationStep1Form';
import RecommendationStep2Form from '@/domains/user/components/RecommendationStep2Form';
import { RECOMMENDATION_PROVIDER_DEFAULT_VALUE } from '@/domains/user/constants/recommendation';

interface Props {
  progress: 1 | 2;
}

const RecommendationCreateForm = ({ progress }: Props) => {
  const { handleSubmit } = useFormContext<RecommendationType>();
  const { mutateStep1, mutateStep2 } = useAddRecommendationMutation();

  const onStep1Valid: SubmitHandler<RecommendationType> = ({ step1 }) => {
    mutateStep1(step1 || RECOMMENDATION_PROVIDER_DEFAULT_VALUE.step1);
  };

  const onStep2Valid: SubmitHandler<RecommendationType> = ({ step2 }) => {
    let newStep2 = step2;
    if (!Array.isArray(step2.isVegetarians))
      newStep2 = {
        ...step2,
        isVegetarians: [step2.isVegetarians]
      };
    mutateStep2(newStep2);
  };

  return (
    <>
      {progress === 1 && (
        <RecommendationStep1Form
          id={FORM_ID.recommendationCreateStep1}
          onSubmit={handleSubmit(onStep1Valid)}
        />
      )}
      {progress === 2 && (
        <RecommendationStep2Form
          id={FORM_ID.recommendationCreateStep2}
          onSubmit={handleSubmit(onStep2Valid)}
        />
      )}
    </>
  );
};

export default RecommendationCreateForm;
