'use client';

import { cn } from '@/shared/utils/cn';

interface Props {
  left: { text: string; value: number };
  right: { text: string; value: number };
}

const Gauge = ({ left, right }: Props) => {
  const total = left.value + right.value;
  const leftPercentage = (left.value / total) * 100;
  const rightPercentage = (right.value / total) * 100;

  const isLeftGreater = leftPercentage > rightPercentage;

  return (
    <div className="flex flex-col gap-[4px]">
      <div className="bg-gray-100 rounded-full h-[8px] flex gap-0 items-center justify-center">
        <div className="w-1/2 h-full">
          <div
            style={{ width: `${leftPercentage}%` }}
            className={cn(
              'ml-auto h-full rounded-l-full',
              isLeftGreater ? 'bg-gray-800' : 'bg-gray-300'
            )}
          />
        </div>
        <div className="w-1/2 h-full">
          <div
            style={{ width: `${rightPercentage}%` }}
            className={cn('h-full rounded-r-full', isLeftGreater ? 'bg-gray-300' : 'bg-gray-800')}
          />
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div
          className={cn(
            'flex gap-[2px] items-center',
            isLeftGreater ? 'text-gray-800' : 'text-gray-400'
          )}
        >
          <span className="typo-body-12-semibold">{left.text}</span>
          <span className="typo-body-11-semibold">{left.value}</span>
        </div>
        <div
          className={cn(
            'flex gap-[2px] items-center',
            isLeftGreater ? 'text-gray-400' : 'text-gray-800'
          )}
        >
          <span className="typo-body-11-semibold">{right.value}</span>
          <span className="typo-body-12-semibold">{right.text}</span>
        </div>
      </div>
    </div>
  );
};

export default Gauge;
