import CloseBlackIcon from '@public/assets/icons/close/close-black.svg';
import CloseWhiteCircleIcon from '@public/assets/icons/close/close-white-circle.svg';
import Close24WithNoBg from '@public/assets/icons/close/close-none-bg-24.svg';
import Close16WithNoBg from '@public/assets/icons/close/close-none-bg-16.svg';
import Close16OrangeWithNoBg from '@public/assets/icons/close/close-none-bg-16-orange.svg';

interface Props {
  shape: 'black' | 'white-circle' | 'no-bg-24' | 'no-bg-16' | 'no-bg-16-orange';
}

const CloseIcon = ({ shape }: Props) => {
  switch (shape) {
    case 'black':
      return <CloseBlackIcon />;
    case 'white-circle':
      return <CloseWhiteCircleIcon />;
    case 'no-bg-24':
      return <Close24WithNoBg />;
    case 'no-bg-16':
      return <Close16WithNoBg />;
    case 'no-bg-16-orange':
      return <Close16OrangeWithNoBg />;
    default:
      return <CloseBlackIcon />;
  }
};

export default CloseIcon;
