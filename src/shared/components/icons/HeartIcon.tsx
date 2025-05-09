'use client';

import HeartNavOff from '@public/assets/icons/heart-nav-off.svg';
import HeartNavOn from '@public/assets/icons/heart-nav-on.svg';
import HeartOff from '@public/assets/icons/heart-off.svg';
import HeartOn from '@public/assets/icons/heart-on.svg';
import HeartShadowOff from '@public/assets/icons/heart-shadow-off.svg';
import HeartShadowOn from '@public/assets/icons/heart-shadow-on.svg';

interface Props {
  shape: 'default-off' | 'default-on' | 'nav-on' | 'nav-off' | 'shadow-on' | 'shadow-off';
}

const HeartIcon = ({ shape }: Props) => {
  switch (shape) {
    case 'default-off':
      return <HeartOff />;
    case 'default-on':
      return <HeartOn />;
    case 'nav-on':
      return <HeartNavOn />;
    case 'nav-off':
      return <HeartNavOff />;
    case 'shadow-on':
      return <HeartShadowOn />;
    case 'shadow-off':
      return <HeartShadowOff />;
    default:
      return <HeartOn />;
  }
};

export default HeartIcon;
