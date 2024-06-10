import CloseBlackIcon from '@public/assets/icons/close/close-black.svg';
import CloseWhiteCircleIcon from '@public/assets/icons/close/close-white-circle.svg';

interface Props {
  shape: 'black' | 'white-circle';
}

const CloseIcon = ({ shape }: Props) => {
  switch (shape) {
    case 'black':
      return <CloseBlackIcon />;
    case 'white-circle':
      return <CloseWhiteCircleIcon />;
    default:
      return <CloseBlackIcon />;
  }
};

export default CloseIcon;
