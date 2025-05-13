import Star16Yellow from '@public/assets/icons/star/star-16-yellow.svg';
import Star20Yellow from '@public/assets/icons/star/star-20-yellow.svg';
import Star20Gray from '@public/assets/icons/star/star-20-gray.svg';
import Star20Half from '@public/assets/icons/star/star-20-half.svg';
import Star24Yellow from '@public/assets/icons/star/star-24-yellow.svg';
import Star24Gray from '@public/assets/icons/star/star-24-gray.svg';
import Star48Yellow from '@public/assets/icons/star/star-48-yellow.svg';
import Star48Gray from '@public/assets/icons/star/star-48-gray.svg';
import Star48Half from '@public/assets/icons/star/star-48-half.svg';

interface Props {
  color: 'yellow' | 'half' | 'gray';
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const StarIcon = ({ color, size }: Props) => {
  switch (color) {
    case 'yellow':
      switch (size) {
        case 'sm':
          return <Star16Yellow />;
        case 'md':
          return <Star20Yellow />;
        case 'lg':
          return <Star24Yellow />;
        case 'xl':
          return <Star48Yellow />;
        default:
          return <Star16Yellow />;
      }
    case 'gray':
      switch (size) {
        case 'md':
          return <Star20Gray />;
        case 'lg':
          return <Star24Gray />;
        case 'xl':
          return <Star48Gray />;
        default:
          return <Star20Gray />;
      }
    case 'half':
      switch (size) {
        case 'xl':
          return <Star48Half />;
        case 'md':
          return <Star20Half />;
        default:
          return <Star48Half />;
      }
    default:
      return <Star16Yellow />;
  }
};

export default StarIcon;
