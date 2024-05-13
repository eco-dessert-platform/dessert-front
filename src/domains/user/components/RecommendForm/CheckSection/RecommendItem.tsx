'use client';

import CheckBox from '@/shared/components/Checkbox';

interface Props {
  name: string;
  title: string;
  description: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RecommendItem = ({ name, title, description, isChecked, onChange }: Props) => (
  <CheckBox
    name={name}
    isChecked={isChecked}
    onChange={onChange}
    className={`${isChecked ? 'bg-secondaryPink outline-primaryOrangeRed outline-1 outline-double' : 'bg-redGray-30'} flex items-center gap-[12px] p-[10px] rounded-[8px]`}
  >
    <div className="flex flex-col">
      <p
        className={`${isChecked ? 'text-primaryOrangeRed typo-title-14-semibold' : 'text-gray-900 typo-title-14-medium'}`}
      >
        {title}
      </p>
      <p
        className={`${isChecked ? 'text-primaryOrangeRed typo-title-14-semibold' : 'text-gray-700 typo-title-14-regular'}`}
      >
        {description}
      </p>
    </div>
  </CheckBox>
);

export default RecommendItem;
