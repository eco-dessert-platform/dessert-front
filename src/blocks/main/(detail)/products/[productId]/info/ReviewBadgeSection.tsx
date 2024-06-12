import DetailSectionWrapper from '@/domains/product/components/DetailSectionWrapper';
import productService from '@/domains/product/queries/service';
import ReviewBadge from '@/domains/review/components/ReviewBadge';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface Props {
  productId: string;
}

const upperToLower = (item: string) => {
  switch (item) {
    case 'GOOD':
      return 'good';
    case 'SWEET':
      return 'sweet';
    case 'SOFT':
      return 'soft';
    case 'BAD':
      return 'bad';
    case 'PLAIN':
      return 'plain';
    case 'DRY':
      return 'dry';
    default:
      return 'good';
  }
};

const ReviewBadgeSection = async ({ productId }: Props) => {
  const { badges } = await productService.getReviewBadge(productId);

  if (badges.length === 0) return null;

  return (
    <DetailSectionWrapper title="리뷰 대표 뱃지">
      <PaddingWrapper className="flex gap-3 pt-0">
        {badges.map((badge) => (
          <ReviewBadge shape={upperToLower(badge)} className="flex-1 max-h-[100px]" />
        ))}
      </PaddingWrapper>
    </DetailSectionWrapper>
  );
};

export default ReviewBadgeSection;
