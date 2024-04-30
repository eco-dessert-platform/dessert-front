import StarOff from '@public/assets/icons/star-gray.svg';
import StarOn from '@public/assets/icons/star-yellow.svg';

interface Props {
  shape: 'off' | 'on';
}

const StarIcon = ({ shape }: Props) => {
  switch (shape) {
    case 'off':
      return <StarOff />;
    case 'on':
      return <StarOn />;
    default:
      return <StarOn />;
  }
};

export default StarIcon;
