'use client';

import BellOff from '@public/assets/icons/alarm/bell-off.svg';
import BellOn12 from '@public/assets/icons/alarm/bell-on-12.svg';
import BellOn18 from '@public/assets/icons/alarm/bell-on-18.svg';

interface Props {
  shape: 'off' | 'on-12' | 'on-18';
}

const BellIcon = ({ shape }: Props) => {
  switch (shape) {
    case 'off':
      return <BellOff />;
    case 'on-12':
      return <BellOn12 />;
    case 'on-18':
      return <BellOn18 />;
    default:
      return <BellOff />;
  }
};

export default BellIcon;
