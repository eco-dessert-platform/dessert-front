'use client';

import BellOff from '@public/assets/icons/bell/bell-off.svg';
import BellOn from '@public/assets/icons/bell/bell-on.svg';

interface Props {
  shape: 'off' | 'on';
}

const BellIcons = ({ shape }: Props) => {
  switch (shape) {
    case 'off':
      return <BellOff />;
    case 'on':
      return <BellOn />;
    default:
      return <BellOff />;
  }
};

export default BellIcons;
