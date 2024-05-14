import { useState } from 'react';
import Stars from '@/domains/review/components/StarRating/Stars';
import { RatingType, StarSizeType } from '@/domains/review/types/starRating';

interface StarRatingProps {
  initRating?: RatingType;
  size?: StarSizeType;
  draggable?: boolean;
}

const StarRating = ({ initRating = 0, size = 'small', draggable = false }: StarRatingProps) => {
  const [rating, setRating] = useState<RatingType>(initRating);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRating(Number(e.target.value) as RatingType);
  };

  return (
    <div className="relative max-w-fit">
      <Stars rating={rating} size={size} />
      <input
        type="range"
        value={rating}
        onChange={handleChange}
        min="0"
        max="5"
        step="0.5"
        disabled={!draggable}
        className={`absolute left-0 top-0 w-full h-full opacity-0 ${draggable ? 'cursor-pointer' : ''}`}
      />
    </div>
  );
};

export default StarRating;
