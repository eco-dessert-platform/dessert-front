import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Skeleton from '@/shared/components/Skeleton';
import StarRating from '../common/StarRating';

const ReviewSkeleton = () => (
  <PaddingWrapper className="flex flex-col gap-[4px]">
    <Skeleton className="w-20" />

    <div className="flex flex-col gap-[8px]">
      <StarRating />
      <div className="flex gap-[4px]">
        <Skeleton className="size-[64px] aspect-square rounded-[6px]" />
        <Skeleton className="size-[64px] aspect-square rounded-[6px]" />
        <Skeleton className="size-[64px] aspect-square rounded-[6px]" />
        <Skeleton className="size-[64px] aspect-square rounded-[6px]" />
      </div>
      <div className="flex flex-col gap-1">
        <Skeleton className="w-full" />
        <Skeleton className="w-full" />
        <Skeleton className="w-3/4" />
      </div>
    </div>

    <div className="flex gap-[4px]">
      <Skeleton className="w-[35px] rounded-[4px]" />
      <Skeleton className="w-[35px] rounded-[4px]" />
    </div>
    <span className="typo-body-12-regular text-gray-500">0000. 00. 00</span>
  </PaddingWrapper>
);

export default ReviewSkeleton;
