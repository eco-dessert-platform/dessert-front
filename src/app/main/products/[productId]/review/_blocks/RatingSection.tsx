import StarRating from '@/domains/review/components/common/StarRating';
import reviewService from '@/domains/review/queries/service';
import Tooltip from '@/shared/components/Tooltip';
import { QuestionMarkIcon } from '@/shared/components/icons';

interface Props {
  params: { productId: string };
}

const RatingSection = async ({ params: { productId } }: Props) => {
  const { rating, count } = await reviewService.getReviewRating(Number(productId));

  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-[2px]">
        <span className="typo-title-14-semibold text-gray-700">평점</span>
        <Tooltip
          content="작성된 리뷰 중에서 더 많이 받은 배지가 대표 배지로 나타나요!"
          placement="bottom-start"
          arrowPosition={{ left: 12 }}
          className="w-[150px]"
        >
          <QuestionMarkIcon />
        </Tooltip>
      </div>
      <div className="flex gap-[4px] items-center">
        <StarRating value={rating} starSize="small" />
        <div className="text-gray-700">
          <span className="typo-title-14-semibold mr-[1px]">{rating}</span>
          <span className="typo-title-14-regular">({count})</span>
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
