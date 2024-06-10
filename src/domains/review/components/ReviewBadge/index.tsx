import { BadgeShapeType } from '@/domains/review/types/badge';
import { ReviewBadgeIcon } from '@/shared/components/icons';
import { BADGE } from '@/domains/review/constants/badge';
import { twMerge } from 'tailwind-merge';

interface ReviewBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  shape: BadgeShapeType;
  isActive?: boolean;
  className?: string;
}

const ReviewBadge = ({ shape, isActive = false, className, ...props }: ReviewBadgeProps) => (
  <div
    className={twMerge(
      `flex flex-col justify-center items-center gap-[4px] h-[100px] border-[2px] rounded-[10px]
    ${isActive ? 'border-primaryOrangeRed bg-secondaryPink' : 'border-gray-100 bg-white'}
  `,
      className
    )}
    {...props}
  >
    <ReviewBadgeIcon shape={shape} />
    <p
      className={`${isActive ? 'typo-title-14-semibold text-gray-900' : 'typo-title-14-medium text-gray-600'}`}
    >
      {BADGE[shape].text}
    </p>
  </div>
);

export default ReviewBadge;
