import { useId, InputHTMLAttributes } from 'react';
import Stars from '@/domains/review/components/StarRating/Stars';
import { RatingType, StarSizeType } from '@/domains/review/types/starRating';

interface StarRatingProps extends InputHTMLAttributes<HTMLInputElement> {
  rating: RatingType;
  onRatingChange?: (rating: RatingType) => void;
  starSize?: StarSizeType;
  editable?: boolean;
}

const StarRating = ({
  rating,
  onRatingChange,
  starSize = 'small',
  editable = false,
  ...props
}: StarRatingProps) => {
  const id = useId();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!onRatingChange) return;
    onRatingChange(Number(e.target.value) as RatingType);
  };

  return (
    <label htmlFor={id} aria-label="별점" className="block relative max-w-fit">
      <Stars rating={rating} size={starSize} />
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
        {...props}
      />
    </label>
  );
};

export default StarRating;
