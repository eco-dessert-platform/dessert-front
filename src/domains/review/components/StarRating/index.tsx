import { useState } from 'react';
import Stars from '@/domains/review/components/StarRating/Stars';
import { RatingType, StarSizeType } from '@/domains/review/types/starRating';

interface StarRatingProps {
  initRating?: RatingType;
  size?: StarSizeType;
  dragged?: boolean;
}

const StarRating = ({ initRating = 0, size = 'small', dragged = false }: StarRatingProps) => {
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
        disabled={!dragged}
        className={`absolute left-0 top-0 w-full h-full opacity-0 ${dragged ? 'cursor-pointer' : ''}`}
      />
    </div>
  );
};

export default StarRating;
