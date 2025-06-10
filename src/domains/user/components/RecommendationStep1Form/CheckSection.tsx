'use client';

import { RecommendationType } from '@/domains/user/types/recommendation';
import { useFormContext } from 'react-hook-form';
import CheckBoxNewver from '@/shared/components/CheckboxNewver';
import { selectInputVariants } from '@/shared/style/variants';
import { cn } from '@/shared/utils/cn';

const ITEMS = [
  {
    title: '다이어트',
    description: '건강 디저트를 먹으며, 체중조절이 필요해요.'
  },
  {
    title: '근성장',
    description: '고단백의 디저트를 건강하게 먹고 싶어요.'
  },
  {
    title: '체질•알러지',
    description: '소화불량, 당뇨, 알레르기 등이 있어요.'
  },
  {
    title: '비건•채식',
    description: '환경, 동물, 노동권 문제를 중요시해요.'
  }
] as const;

const CheckSection = () => {
  const { watch, register } = useFormContext<RecommendationType>();
  const preferences = watch('step1.preferenceType');

  return (
    <div className="flex flex-col gap-[8px]">
      {ITEMS.map((item) => {
        const checked = preferences.includes(item.title);
        const checkedCount = preferences.filter((value) => !!value).length;
        const disabled = !checked && checkedCount >= 2;

        return (
          <label
            key={item.title}
            className={cn(
              selectInputVariants({ outline: true, checked }),
              'flex items-center gap-[12px] p-[10px]',
              disabled && 'opacity-70',
              checked && 'typo-title-14-semibold'
            )}
            htmlFor={item.title}
          >
            <CheckBoxNewver
              id={item.title}
              value={item.title}
              checked={checked}
              disabled={disabled}
              {...register('step1.preferenceType', {
                required: true
              })}
            />
            <div className="flex flex-col">
              <div className="typo-title-14-semibold">{item.title}</div>
              <div className={checked ? 'typo-title-14-semibold' : 'typo-title-14-regular'}>
                {item.description}
              </div>
            </div>
          </label>
        );
      })}
    </div>
  );
};

export default CheckSection;
