import AllIcon from '@public/assets/icons/categories/all-icon.svg';
import BreadIcon from '@public/assets/icons/categories/bread-icon.svg';
import CakeIcon from '@public/assets/icons/categories/cake-icon.svg';
import CookieIcon from '@public/assets/icons/categories/cookie-icon.svg';
import EtcIcon from '@public/assets/icons/categories/etc-icon.svg';
import JamIcon from '@public/assets/icons/categories/jam-icon.svg';
import TartIcon from '@public/assets/icons/categories/tart-icon.svg';
import YogurtIcon from '@public/assets/icons/categories/yogurt.svg';

interface Props {
  shape: 'all' | 'yogurt' | 'bread' | 'cake' | 'cookie' | 'etc' | 'jam' | 'tart';
}

const ProductCategoryIcons = ({ shape }: Props) => {
  switch (shape) {
    case 'all':
      return <AllIcon />;
    case 'yogurt':
      return <YogurtIcon />;
    case 'bread':
      return <BreadIcon />;
    case 'cake':
      return <CakeIcon />;
    case 'cookie':
      return <CookieIcon />;
    case 'etc':
      return <EtcIcon />;
    case 'jam':
      return <JamIcon />;
    case 'tart':
      return <TartIcon />;
    default:
      return <YogurtIcon />;
  }
};

export default ProductCategoryIcons;
