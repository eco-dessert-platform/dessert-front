import CloseBlackIcon from '@public/assets/icons/close/close-black.svg';
import CloseWithNoBg from '@public/assets/icons/close/close-none-bg.svg';
import CloseWhiteCircleIcon from '@public/assets/icons/close/close-white-circle.svg';

interface Props {
  shape: 'black' | 'white-circle' | 'no-bg';
}

const CloseIcon = ({ shape }: Props) => {
  switch (shape) {
    case 'black':
      return <CloseBlackIcon />;
    case 'white-circle':
      return <CloseWhiteCircleIcon />;
    case 'no-bg':
      return <CloseWithNoBg />;
    default:
      return <CloseBlackIcon />;
  }
};

export default CloseIcon;
