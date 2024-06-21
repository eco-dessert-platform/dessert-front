'use client';

import { cn } from '@/shared/utils/cn';
import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';
import useIsMounted from '@/shared/hooks/useIsMounted';

interface Props {
  type: AlarmType;
  isAlarming: boolean;
  onClick: () => void;
}

const AlarmButton = ({ type, isAlarming, onClick }: Props) => {
  const isMounted = useIsMounted();

  return (
    <button
      type="button"
      className={`flex justify-center items-center gap-x-[2px] p-[6px] w-full border-[1px] border-gray-200 rounded-[4px]
        typo-body-12-medium ${isAlarming ? 'text-gray-800' : 'bg-gray-900 text-white'}
        `}
      onClick={onClick}
    >
      {isAlarming && (
        <span className={cn(isMounted && ALARM[type].animation)}>{ALARM[type].icon}</span>
      )}
      {ALARM[type].name} 알림 {isAlarming ? '중' : '신청'}
    </button>
  );
};

export default AlarmButton;
