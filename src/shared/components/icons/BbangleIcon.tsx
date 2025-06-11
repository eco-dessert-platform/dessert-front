import BbangleSmileIcon from '@public/assets/icons/bbangle-smile.svg';
import BbangleCryIcon from '@public/assets/icons/bbangle-cry.svg';
import BbanglVerticalNameIcon from '@public/assets/icons/bbangle-vertical-name.svg';
import BbangleHorizontalNameIcon from '@public/assets/icons/bbangle-horizontal-name.svg';
import BbangleSmaileSmallIcon from '@public/assets/icons/bbangle-smile-small.svg';

interface Props {
  shape: 'vertical-name' | 'horizontal-name' | 'smile' | 'smile-small' | 'cry';
  className?: string;
}

const BbangleIcon = ({ shape, className }: Props) => {
  switch (shape) {
    case 'vertical-name':
      return <BbanglVerticalNameIcon className={className} />;
    case 'horizontal-name':
      return <BbangleHorizontalNameIcon className={className} />;
    case 'smile':
      return <BbangleSmileIcon className={className} />;
    case 'cry':
      return <BbangleCryIcon className={className} />;
    case 'smile-small':
      return <BbangleSmaileSmallIcon className={className} />;
    default:
      return <BbangleSmileIcon className={className} />;
  }
};

export default BbangleIcon;
