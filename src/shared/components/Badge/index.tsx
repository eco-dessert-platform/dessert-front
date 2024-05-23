import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  type?: 'default' | 'bundle' | 'ranking' | 'best' | 'tag';
  children?: ReactNode;
}

const CLASS = {
  default: 'border-gray-200 text-gray-700 bg-transparent ',
  tag: 'border-gray-200 text-gray-600 bg-white ',
  bundle: 'text-white border-secondaryOrangeRed bg-secondaryOrangeRed ',
  best: 'text-white border-primaryOrangeRed bg-primaryOrangeRed ',
  ranking: 'text-gray-900 border-gray-100 bg-white size-[20px] p-0'
};

const Badge = ({ type = 'default', children }: Props) => (
  <div
    className={twMerge(
      'typo-body-11-regular border flex-center w-fit px-[6px] py-[2px] rounded-[4px]',
      CLASS[type]
    )}
  >
    {children}
  </div>
);

export default Badge;
