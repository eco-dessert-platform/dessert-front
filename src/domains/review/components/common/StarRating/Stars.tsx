'use client';

import { StarIcon } from '@/shared/components/icons';
import { RatingType, StarSizeType } from '@/domains/review/types/starRating';

interface StarsProps {
  rating: RatingType;
  size: StarSizeType;
}

const Stars = ({ rating, size }: StarsProps) => (
  <div className="flex">
    {Array(5)
      .fill(0)
      .map((_, idx) => {
        const order = idx + 1;
        const starSize = size === 'small' ? 'md' : 'xl';

        if (order <= rating) return <StarIcon key={order} size={starSize} color="yellow" />;
        if (order - 0.5 <= rating) return <StarIcon key={order} size={starSize} color="half" />;
        return <StarIcon key={order} size={starSize} color="gray" />;
      })}
  </div>
);
export default Stars;
