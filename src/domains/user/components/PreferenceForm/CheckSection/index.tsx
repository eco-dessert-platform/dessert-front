'use client';

import { PreferenceFormType } from '@/domains/user/types/preference';
import { useFormContext } from 'react-hook-form';
import CheckBoxNewver from '@/shared/components/CheckboxNewver';

const ITEMS = [
  {
    id: 1,
    title: '다이어트',
    description: '건강 디저트를 먹으며, 체중조절이 필요해요.'
  },
  {
    id: 2,
    title: '근성장',
    description: '고단백의 디저트를 건강하게 먹고 싶어요.'
  },
  {
    id: 3,
    title: '체질•알러지',
    description: '소화불량, 당뇨, 알레르기 등이 있어요.'
  },
  {
    id: 4,
    title: '비건•채식',
    description: '환경, 동물, 노동권 문제를 중요시해요.'
  }
] as const;

const CheckSection = () => {
  const { watch, register } = useFormContext<PreferenceFormType>();
  const preferences = watch('preferenceType');

  return (
    <div className="flex flex-col gap-[8px]">
      {ITEMS.map((item) => {
        const checked = preferences.includes(item.title);
        const checkedCount = preferences.filter((value) => !!value).length;
        const disabled = !checked && checkedCount >= 2;

        return (
          <CheckBoxNewver
            key={item.id}
            value={item.title}
            title={item.title}
            label={item.description}
            checked={checked}
            {...register('preferenceType')}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};

export default CheckSection;
