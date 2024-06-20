import { BellIcon, TimerIcon } from '@/shared/components/icons';

export const ALARM = {
  bbangketing: {
    name: '빵켓팅',
    icon: <BellIcon shape="on" />,
    animation: 'animate-bell-shake origin-[50%_20%]'
  },
  restock: {
    name: '재입고',
    icon: <TimerIcon shape="on" />,
    animation: 'animate-timer-shake'
  }
};
