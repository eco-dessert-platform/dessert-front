import ReviewBadge from '@/domains/review/components/ReviewBadge';
import reviewService from '@/domains/review/queries/service';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface Props {
  params: { productId: string };
}

const BadgeSection = async ({ params: { productId } }: Props) => {
  const { brix, taste, texture } = await reviewService.getReviewRating(Number(productId));

  const textureBadge = texture.dry > texture.soft ? 'dry' : 'soft';
  const brixBadge = brix.plain > brix.sweet ? 'plain' : 'sweet';
  const tasteBadge = taste.bad > taste.good ? 'bad' : 'good';

  return (
    <PaddingWrapper>
      <div className="flex gap-[10px]">
        <ReviewBadge className="w-full" shape={tasteBadge} />
        <ReviewBadge className="w-full" shape={brixBadge} />
        <ReviewBadge className="w-full" shape={textureBadge} />
      </div>
    </PaddingWrapper>
  );
};

export default BadgeSection;
