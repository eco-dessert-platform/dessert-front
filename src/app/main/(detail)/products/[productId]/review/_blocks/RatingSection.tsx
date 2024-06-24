import StarRating from '@/domains/review/components/common/StarRating';
import reviewService from '@/domains/review/queries/service';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Tooltip from '@/shared/components/Tooltip';
import { QuestionMarkIcon } from '@/shared/components/icons';

interface Props {
  params: { productId: string };
}

const RatingSection = async ({ params: { productId } }: Props) => {
  const { rating, count } = await reviewService.getReviewRating(Number(productId));

  return (
    <PaddingWrapper>
      <div className="flex justify-between">
        <div className="flex items-center gap-[2px]">
          <span>평점</span>
          <div className="group relative">
            <QuestionMarkIcon />
            <Tooltip className="absolute top-[calc(100%+8px)] group-hover:visible">tooltip</Tooltip>
          </div>
        </div>
        <div className="flex gap-[4px] items-center">
          <StarRating value={rating} starSize="small" />
          <div className="text-gray-700">
            <span className="typo-title-14-semibold">{rating}</span>
            <span className="typo-title-14-regular">({count})</span>
          </div>
        </div>
      </div>
    </PaddingWrapper>
  );
};

export default RatingSection;
