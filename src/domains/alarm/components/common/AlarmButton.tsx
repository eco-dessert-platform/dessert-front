'use client';

import { cn } from '@/shared/utils/cn';
import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';
import useIsMounted from '@/shared/hooks/useIsMounted';

interface Props {
  type: AlarmType;
  isAlarming: boolean;
  onClick: () => void;
  disabled?: boolean;
  className?: string;
}

const AlarmButton = ({ type, isAlarming, onClick, disabled = false, className }: Props) => {
  const isMounted = useIsMounted();

  return (
    <button
      type="button"
      className={cn(
        'typo-body-12-medium flex w-full items-center justify-center gap-x-[2px] rounded-[4px] border border-gray-200 p-[6px]',
        'disabled:bg-gray-300 disabled:text-white',
        isAlarming ? 'bg-gray-50 text-gray-800' : 'bg-gray-900 text-white',
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {isAlarming && (
        <span className={cn(isMounted && ALARM[type].animation)}>{ALARM[type].icon}</span>
      )}
      {ALARM[type].name} 알림 {isAlarming ? '중' : '신청'}
    </button>
  );
};

export default AlarmButton;
