import Badge from '@/shared/components/Badge';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { ReviewType } from '../../types/review';
import StarRating from '../common/StarRating';
import Comment from './Comment';
import ImageSlider from './ImageSlider';
import KebabMenu from './KebabMenu';
import ReviewSkeleton from './ReviewSkeleton';
import LikeButton from './LikeButton';

export interface ReviewProps extends ReviewType {
  usedIn: 'review-list' | 'review-detail';
}

const Review = ({
  id,
  boardId,
  isBest,
  nickname,
  date,
  images,
  rating,
  comment,
  tags,
  like,
  isLiked,
  isMine,
  usedIn
}: ReviewProps) => (
  <PaddingWrapper className="flex flex-col gap-[4px]">
    <div className="flex items-center justify-between">
      <div className="flex w-full gap-[4px]">
        {isBest && <Badge type="best">BEST</Badge>}
        <span className="typo-title-14-medium">{nickname || '네이버 리뷰'}</span>
      </div>
      {isMine && <KebabMenu reviewId={id} boardId={boardId} usedIn={usedIn} />}
    </div>

    <div className="flex flex-col gap-[8px]">
      <div>
        <StarRating value={rating} />
      </div>
      {images && <ImageSlider images={images} />}
      {usedIn === 'review-list' && <Comment comment={comment} boardId={boardId} reviewId={id} />}
      {usedIn === 'review-detail' && <p className="typo-title-14-regular">{comment}</p>}
    </div>

    <div className="flex gap-[4px]">
      {tags.map((tag) => (
        <Badge key={tag} type="tag">
          {tag}
        </Badge>
      ))}
    </div>

    <div className="flex items-center justify-between">
      <span className="typo-body-12-regular text-gray-500">{date}</span>
      <LikeButton id={id} isLiked={isLiked} like={like} />
    </div>
  </PaddingWrapper>
);

Review.Skeleton = ReviewSkeleton;

export default Review;
