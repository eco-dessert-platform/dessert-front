import { useId } from 'react';
import { RatingType, StarSizeType } from '@/domains/review/types/starRating';
import Stars from './Stars';

interface StarRatingProps {
  rating: RatingType;
  onRatingChange?: (rating: RatingType) => void;
  size?: StarSizeType;
  editable?: boolean;
}

const StarRating = ({
  rating,
  onRatingChange,
  size = 'small',
  editable = false
}: StarRatingProps) => {
  const id = useId();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onRatingChange) return;
    onRatingChange(Number(e.target.value) as RatingType);
  };

  return (
    <label htmlFor={id} aria-label="별점" className="block relative max-w-fit">
      <Stars rating={rating} size={size} />
      <input
        type="range"
        value={rating}
        onChange={handleChange}
        id={id}
        min="0"
        max="5"
        step="0.5"
        disabled={!editable}
        className={`absolute left-0 top-0 w-full h-full opacity-0 ${editable ? 'cursor-pointer' : ''}`}
      />
    </label>
  );
};

export default StarRating;
