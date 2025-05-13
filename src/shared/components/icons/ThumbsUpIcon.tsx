import ThumbsUpIconGray from '@public/assets/icons/thumbs-up-gray.svg';
import ThumbsUpIconRed from '@public/assets/icons/thumbs-up-red.svg';

interface Props {
  color: 'red' | 'gray';
}

const ThumbsUpIcon = ({ color }: Props) => {
  switch (color) {
    case 'red':
      return <ThumbsUpIconRed />;
    case 'gray':
      return <ThumbsUpIconGray />;
    default:
      return <ThumbsUpIconGray />;
  }
};

export default ThumbsUpIcon;
