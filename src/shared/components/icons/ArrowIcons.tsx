import BackArrowIcon from '@public/assets/icons/arrow/back-arrow.svg';
import BottomArrowICon from '@public/assets/icons/arrow/bottom-arrow.svg';
import DownArrowIcon from '@public/assets/icons/arrow/down-arrow.svg';
import Forward12 from '@public/assets/icons/arrow/forward-arrow-12.svg';
import ForwardkArrowIcon from '@public/assets/icons/arrow/forward-arrow.svg';
import MediumForwardArrowIcon from '@public/assets/icons/arrow/forward-medium-arrow.svg';
import PrimaryMediumForwardArrowIcon from '@public/assets/icons/arrow/forward-medium-primary-arrow.svg';
import LargeDownArrowIcon from '@public/assets/icons/arrow/large-down-arrow.svg';
import TopArrowIcon from '@public/assets/icons/arrow/top-arrow.svg';

interface Props {
  shape:
    | 'bottom'
    | 'medium-forward'
    | 'forward'
    | 'back'
    | 'down'
    | 'large-down'
    | 'forward-12'
    | 'primary-medium-forward'
    | 'top';
}

const ArrowIcons = ({ shape }: Props) => {
  switch (shape) {
    case 'bottom':
      return <BottomArrowICon />;
    case 'medium-forward':
      return <MediumForwardArrowIcon />;
    case 'forward':
      return <ForwardkArrowIcon />;
    case 'primary-medium-forward':
      return <PrimaryMediumForwardArrowIcon />;
    case 'back':
      return <BackArrowIcon />;
    case 'down':
      return <DownArrowIcon />;
    case 'large-down':
      return <LargeDownArrowIcon />;
    case 'forward-12':
      return <Forward12 />;
    case 'top':
      return <TopArrowIcon />;
    default:
      return <BottomArrowICon />;
  }
};

export default ArrowIcons;
