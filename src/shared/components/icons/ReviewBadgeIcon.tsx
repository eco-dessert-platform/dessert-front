import GoodIcon from '@public/assets/icons/reviewBadge/badge-good.svg';
import BadIcon from '@public/assets/icons/reviewBadge/badge-bad.svg';
import SweetIcon from '@public/assets/icons/reviewBadge/badge-sweet.svg';
import PlainIcon from '@public/assets/icons/reviewBadge/badge-plain.svg';
import SoftIcon from '@public/assets/icons/reviewBadge/badge-soft.svg';
import DryIcon from '@public/assets/icons/reviewBadge/badge-dry.svg';
import { BadgeShapeType } from '@/domains/review/types/badge';

interface Props {
  shape: BadgeShapeType;
}

const ReviewBadgeIcon = ({ shape }: Props) => {
  switch (shape) {
    case 'good':
      return <GoodIcon />;
    case 'bad':
      return <BadIcon />;
    case 'sweet':
      return <SweetIcon />;
    case 'plain':
      return <PlainIcon />;
    case 'soft':
      return <SoftIcon />;
    case 'dry':
      return <DryIcon />;
    default:
      return <GoodIcon />;
  }
};

export default ReviewBadgeIcon;
