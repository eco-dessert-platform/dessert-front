import { BellIcon, TimerIcon } from '@/shared/components/icons';

export const ALARM = {
  bbangketing: {
    name: '빵켓팅',
    icon: (isAlarming: boolean) => <BellIcon shape={isAlarming ? 'on' : 'off'} />,
    animation: 'animate-bell-shake origin-[50%_20%]'
  },
  restock: {
    name: '재입고',
    icon: (isAlarming: boolean) => <TimerIcon shape={isAlarming ? 'on' : 'off'} />,
    animation: 'animate-timer-shake'
  }
};
