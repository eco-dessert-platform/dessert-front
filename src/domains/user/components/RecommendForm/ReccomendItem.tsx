'use client';

import CheckBox from '@/shared/components/Checkbox';

interface Props {
  name: string;
  title: string;
  description: string;
  isChecked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RecommmendItem = ({ name, title, description, isChecked, onChange }: Props) => (
  // eslint-disable-next-line
  <div
    tabIndex={0}
    role="button"
    onClick={() =>
      onChange({ target: { checked: !isChecked, name } } as React.ChangeEvent<HTMLInputElement>)
    }
    className={`${isChecked ? 'bg-secondaryPink' : 'bg-redGray-30'}
                ${isChecked ? 'outline-primaryOrangeRed outline-1 outline-double' : ''}
                flex items-center gap-[12px] p-[10px] rounded-[8px]`}
  >
    <CheckBox name={name} isChecked={isChecked} onChange={onChange} />

    <div className="flex flex-col gap-2">
      <p
        className={`${isChecked ? 'text-primaryOrangeRed' : 'text-gray-900'} text-[14px] font-medium`}
      >
        {title}
      </p>
      <p className={`${isChecked ? 'text-primaryOrangeRed' : 'text-gray-700'} text-[14px]`}>
        {description}
      </p>
    </div>
  </div>
);

export default RecommmendItem;
