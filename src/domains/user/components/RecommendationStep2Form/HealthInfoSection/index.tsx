import { useFormContext } from 'react-hook-form';
import { RecommendationStep2Type } from '@/domains/user/types/recommendation';
import { RECOMMENDATION } from '@/domains/user/constants/recommendation';
import CheckboxQuestion from './CheckboxQuestion';

const HealthInfoSection = () => {
  const { watch, register, setValue } = useFormContext<RecommendationStep2Type>();
  const [dietLimitation, healthConcerns, hateFoodList] = watch([
    'dietLimitation',
    'healthConcerns',
    'hateFoodList'
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
      setValue(fieldName, ['해당없음']);
    }
    if (clickedValue !== '해당없음' && fieldValue.some((v) => v === '해당없음')) {
      setValue(fieldName, [clickedValue] as RecommendationStep2Type[keyof RecommendationStep2Type]);
    }
  };

  return (
    <section className="mb-[8px]">
      <h3 className="w-full px-[16px] py-[10px] bg-gray-100 typo-title-14-semibold text-gray-700">
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
            ...register('dietLimitation', {
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
            ...register('healthConcerns', {
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
          options={RECOMMENDATION.step2.hateFoodList.map((option) => ({
            value: option,
            checked: hateFoodList.includes(option),
            ...register('hateFoodList', {
              required: true,
              onChange: (e) =>
                handleChange(e, { fieldName: 'hateFoodList', fieldValue: hateFoodList })
            })
          }))}
        />
      </div>
    </section>
  );
};

export default HealthInfoSection;