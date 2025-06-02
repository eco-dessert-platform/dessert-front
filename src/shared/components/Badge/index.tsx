import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props {
  type?: 'default' | 'bundle' | 'ranking' | 'best' | 'tag' | 'bbangcketing';
  children?: ReactNode;
}

const CLASS = {
  default: 'border-gray-200 text-gray-700 bg-transparent',
  tag: 'border-gray-200 text-gray-600 bg-white',
  bundle:
    'text-white border-secondary-orange-red bg-secondary-orange-red w-[50px] h-[20px] p-0 typo-body-11-semibold',
  best: 'text-white border-primary-orange-red bg-primary-orange-red',
  ranking: 'text-gray-900 border-gray-100 bg-white size-[20px] p-0 typo-body-11-semibold',
  bbangcketing:
    'text-gray-700 border-gray-200 bg-white h-[20px] pl-[4px] gap-x-[2px] typo-body-11-semibold'
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
