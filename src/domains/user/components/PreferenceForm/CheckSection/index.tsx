'use client';

import { useRecoilState } from 'recoil';
import { preferenceState } from '@/domains/user/atoms/preference';
import { PreferenceType } from '@/domains/user/types/preference';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import PreferenceItem from './PreferenceItem';

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
  const { openToast } = useToastNewVer();
  const [preference, setPreference] = useRecoilState(preferenceState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, value } = e.target;
    const checkedValue = value as PreferenceType;

    const numChecks = preference.length;
    const checkedThird = !preference.includes(checkedValue);
    if (numChecks === 2 && checkedThird) {
      openToast({ message: '최대 2개까지 선택 가능하니, 1개를 제외하고 선택하세요!' });
      return;
    }

    if (checked) {
      setPreference([...preference, checkedValue]);
      return;
    }
    setPreference(preference.filter((val) => val !== checkedValue));
  };

  return (
    <div className="flex flex-col gap-[8px]">
      {ITEMS.map((item) => (
        <PreferenceItem
          key={item.id}
          value={item.title}
          isChecked={preference.includes(item.title)}
          onChange={handleChange}
          title={item.title}
          description={item.description}
        />
      ))}
    </div>
  );
};

export default CheckSection;
