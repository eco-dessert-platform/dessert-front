import DetailSectionWrapper from '@/domains/product/components/DetailSectionWrapper';
import reviewService from '@/domains/review/queries/service';
import HasNoReview from './HasNoReview';
import HasReview from './HasReview';

interface Props {
  productId: number;
}

const ReviewBadgeSection = async ({ productId }: Props) => {
  const { count } = await reviewService.getReviewRating(Number(productId));

  return (
    <DetailSectionWrapper title="리뷰 대표 뱃지">
      {count !== 0 ? <HasNoReview /> : <HasReview productId={productId} />}
    </DetailSectionWrapper>
  );
};

export default ReviewBadgeSection;
