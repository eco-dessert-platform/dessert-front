import ReviewBadge from '@/domains/review/components/ReviewBadge';
import reviewService from '@/domains/review/queries/service';
import { BadgeShapeType } from '@/domains/review/types/badge';

interface Props {
  params: { productId: string };
}

const BadgeSection = async ({ params: { productId } }: Props) => {
  const { brix, taste, texture } = await reviewService.getReviewRating(Number(productId));

  const getBadgeShape = (
    category: { [key: string]: number },
    key1: BadgeShapeType,
    key2: BadgeShapeType
  ): BadgeShapeType => category[key1] > category[key2] ? key1 : key2;

  const textureBadge = getBadgeShape(texture, 'dry', 'soft');
  const brixBadge = getBadgeShape(brix, 'plain', 'sweet');
  const tasteBadge = getBadgeShape(taste, 'bad', 'good');

  const shouldRenderBadge = (category: { [key: string]: number }) => Object.values(category).some((value) => value !== 0);

  return (
    <div className="flex gap-[10px] w-full">
      {shouldRenderBadge(texture) && <ReviewBadge className="w-1/3" shape={textureBadge} />}
      {shouldRenderBadge(brix) && <ReviewBadge className="w-1/3" shape={brixBadge} />}
      {shouldRenderBadge(taste) && <ReviewBadge className="w-1/3" shape={tasteBadge} />}
    </div>
  );
};

export default BadgeSection;
