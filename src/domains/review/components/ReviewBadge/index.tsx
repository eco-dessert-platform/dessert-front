import { BadgeShapeType } from '@/domains/review/types/badge';
import { ReviewBadgeIcon } from '@/shared/components/icons';
import { BADGE } from '@/domains/review/constants/badge';
import { cn } from '@/shared/utils/cn';

interface ReviewBadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  shape: BadgeShapeType;
  isActive?: boolean;
  className?: string;
}

const ReviewBadge = ({ shape, isActive = false, className, ...props }: ReviewBadgeProps) => (
  <div
    className={cn(
      `flex h-[100px] flex-col items-center justify-center gap-[4px] rounded-[10px] border-2 ${isActive ? 'border-primary-orange-red bg-secondary-pink' : 'border-gray-100 bg-white'} `,
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
