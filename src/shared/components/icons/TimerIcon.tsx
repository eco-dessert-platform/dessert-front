'use client';

import TimerOff from '@public/assets/icons/alarm/timer-off.svg';
import TimerOn from '@public/assets/icons/alarm/timer-on.svg';

interface Props {
  shape: 'off' | 'on';
}

const TimerIcon = ({ shape }: Props) => {
  switch (shape) {
    case 'off':
      return <TimerOff />;
    case 'on':
      return <TimerOn />;
    default:
      return <TimerOff />;
  }
};

export default TimerIcon;
