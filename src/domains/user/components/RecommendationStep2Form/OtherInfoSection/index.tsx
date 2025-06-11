import { useFormContext } from 'react-hook-form';
import { RecommendationType } from '@/domains/user/types/recommendation';
import { RECOMMENDATION } from '@/domains/user/constants/recommendation';
import CheckboxQuestion from './CheckboxQuestion';

const OtherInfoSection = () => {
  const { watch, register } = useFormContext<RecommendationType>();
  const isVegetarians = watch('step2.isVegetarians');

  return (
    <section className="mb-[8px]">
      <h3 className="typo-title-14-semibold w-full bg-gray-100 px-[16px] py-[10px] text-gray-700">
        기타 정보
      </h3>
      <CheckboxQuestion
        title="베지테리언이신가요?"
        subTitle="베지테리언이신 경우 먹지않는 음식을 선택해주세요"
        options={RECOMMENDATION.step2.isVegetarians.map((option) => ({
          value: option,
          checked: isVegetarians.includes(option),
          ...register('step2.isVegetarians')
        }))}
      />
    </section>
  );
};

export default OtherInfoSection;
