'use client';

import { useRecoilState } from 'recoil';
import { recommendState } from '@/domains/user/atoms/profile';

import RecommmendItem from './ReccomendItem';

const ITEMS = [
  {
    id: 1,
    title: '다이어트',
    description: '건강 디저트를 먹으며, 체중조절이 필요해요.',
    name: 'isDiet'
  },
  {
    id: 2,
    title: '근성장',
    description: '고단백의 디저트를 건강하게 먹고 싶어요.',
    name: 'isMuscle'
  },
  {
    id: 3,
    title: '체질•알러지',
    description: '소화불량, 당뇨, 알레르기 등이 있어요.',
    name: 'isHealth'
  },
  {
    id: 4,
    title: '비건•체식',
    description: '환경, 동물, 노동권 문제를 중요시해요.',
    name: 'isVegan'
  }
] as const;

const CheckSection = () => {
  const [isChecked, setIsChecked] = useRecoilState(recommendState);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked, name } = e.target;

    setIsChecked((prev) => ({
      ...prev,
      [name]: checked
    }));
  };

  return (
    <div className="flex flex-col gap-[8px]">
      {ITEMS.map((item) => (
        <RecommmendItem
          key={item.id}
          name={item.name}
          title={item.title}
          description={item.description}
          onChange={handleChange}
          isChecked={isChecked[item.name]}
        />
      ))}
    </div>
  );
};

export default CheckSection;
