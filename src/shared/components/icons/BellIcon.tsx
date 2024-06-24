'use client';

import BellOff from '@public/assets/icons/alarm/bell-off.svg';
import BellOn from '@public/assets/icons/alarm/bell-on.svg';

interface Props {
  shape: 'off' | 'on';
}

const BellIcon = ({ shape }: Props) => {
  switch (shape) {
    case 'off':
      return <BellOff />;
    case 'on':
      return <BellOn />;
    default:
      return <BellOff />;
  }
};

export default BellIcon;
