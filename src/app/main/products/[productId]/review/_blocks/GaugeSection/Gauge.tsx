'use client';

import { cn } from '@/shared/utils/cn';

interface Props {
  left: { text: string; value: number };
  right: { text: string; value: number };
}

const Gauge = ({ left, right }: Props) => {
  const total = left.value + right.value;
  const leftPercentage = total === 0 ? 0 : (left.value / total) * 100;
  const rightPercentage = total === 0 ? 0 : (right.value / total) * 100;

  const isZeroTotal = total === 0;
  const isLeftGreater = !isZeroTotal && leftPercentage > rightPercentage;

  let leftBarColor = 'bg-gray-300';
  let rightBarColor = 'bg-gray-300';
  let leftTextColor = 'text-gray-400';
  let rightTextColor = 'text-gray-400';

  if (!isZeroTotal) {
    if (isLeftGreater) {
      leftBarColor = 'bg-gray-800';
      rightBarColor = 'bg-gray-300';
      leftTextColor = 'text-gray-800';
      rightTextColor = 'text-gray-400';
    } else {
      leftBarColor = 'bg-gray-300';
      rightBarColor = 'bg-gray-800';
      leftTextColor = 'text-gray-400';
      rightTextColor = 'text-gray-800';
    }
  }

  return (
    <div className="flex flex-col gap-[4px]">
      <div className="flex h-[8px] items-center justify-center gap-0 rounded-full bg-gray-100">
        <div className="h-full w-1/2">
          <div
            style={{ width: `${leftPercentage}%` }}
            className={cn('ml-auto h-full rounded-l-full', leftBarColor)}
          />
        </div>
        <div className="h-full w-1/2">
          <div
            style={{ width: `${rightPercentage}%` }}
            className={cn('h-full rounded-r-full', rightBarColor)}
          />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className={cn('flex items-center gap-[2px]', leftTextColor)}>
          <span className="typo-body-12-semibold">{left.text}</span>
          <span className="typo-body-11-semibold">{left.value}</span>
        </div>
        <div className={cn('flex items-center gap-[2px]', rightTextColor)}>
          <span className="typo-body-11-semibold">{right.value}</span>
          <span className="typo-body-12-semibold">{right.text}</span>
        </div>
      </div>
    </div>
  );
};

export default Gauge;
