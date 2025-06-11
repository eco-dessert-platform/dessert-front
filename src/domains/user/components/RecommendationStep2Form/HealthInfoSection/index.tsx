import { useFormContext } from 'react-hook-form';
import { RecommendationType, RecommendationStep2Type } from '@/domains/user/types/recommendation';
import { RECOMMENDATION } from '@/domains/user/constants/recommendation';
import CheckboxQuestion from './CheckboxQuestion';

const HealthInfoSection = () => {
  const { watch, register, setValue } = useFormContext<RecommendationType>();
  const [dietLimitation, healthConcerns, unmatchedIngredientList] = watch([
    'step2.dietLimitation',
    'step2.healthConcerns',
    'step2.unmatchedIngredientList'
  ]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    {
      fieldName,
      fieldValue
    }: {
      fieldName: keyof RecommendationStep2Type;
      fieldValue: RecommendationStep2Type[keyof RecommendationStep2Type];
    }
  ) => {
    const { value: clickedValue, checked } = e.target;
    if (clickedValue === '해당없음' && checked) {
      setValue(`step2.${fieldName}`, ['해당없음']);
    }
    if (clickedValue !== '해당없음' && fieldValue.some((v) => v === '해당없음')) {
      setValue(`step2.${fieldName}`, [
        clickedValue
      ] as RecommendationStep2Type[keyof RecommendationStep2Type]);
    }
  };

  return (
    <section className="mb-[8px]">
      <h3 className="typo-title-14-semibold w-full bg-gray-100 px-[16px] py-[10px] text-gray-700">
        건강 정보
      </h3>
      <div className="divide-y divide-gray-100">
        <CheckboxQuestion
          title="식이제한을 가지고 계신가요?"
          subTitle="정확한 추천을 위해 모두 선택해주세요."
          required
          options={RECOMMENDATION.step2.dietLimitation.map((option) => ({
            value: option,
            checked: dietLimitation.includes(option),
            ...register('step2.dietLimitation', {
              required: true,
              onChange: (e) =>
                handleChange(e, { fieldName: 'dietLimitation', fieldValue: dietLimitation })
            })
          }))}
        />
        <CheckboxQuestion
          title="건강 고민이 있으신가요?"
          subTitle="가지고 있는 건강 고민을 모두 선택해주세요."
          required
          options={RECOMMENDATION.step2.healthConcerns.map((option) => ({
            value: option,
            checked: healthConcerns.includes(option),
            ...register('step2.healthConcerns', {
              required: true,
              onChange: (e) =>
                handleChange(e, { fieldName: 'healthConcerns', fieldValue: healthConcerns })
            })
          }))}
        />
        <CheckboxQuestion
          title="기피하는 음식 재료가 있으신가요?"
          subTitle="정확한 추천을 위해 모두 선택해주세요."
          required
          options={RECOMMENDATION.step2.unmatchedIngredientList.map((option) => ({
            value: option,
            checked: unmatchedIngredientList.includes(option),
            ...register('step2.unmatchedIngredientList', {
              required: true,
              onChange: (e) =>
                handleChange(e, {
                  fieldName: 'unmatchedIngredientList',
                  fieldValue: unmatchedIngredientList
                })
            })
          }))}
        />
      </div>
    </section>
  );
};

export default HealthInfoSection;
