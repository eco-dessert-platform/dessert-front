import { MouseEventHandler } from 'react';
import { twMerge } from 'tailwind-merge';
import Badge from '@/shared/components/Badge';
import { KebabIcon, ThumbsUpIcon } from '@/shared/components/icons';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Dropdown from '@/shared/components/Dropdown';
import StarRating from '../common/StarRating';
import Comment from './Comment';
import ImageSlider from './ImageSlider';
import { ReviewType } from '../../types/review';

interface Props extends ReviewType {
  onModifyClick?: MouseEventHandler<HTMLButtonElement>;
  onDeleteClick?: MouseEventHandler<HTMLButtonElement>;
}

const Review = ({
  id,
  isBest,
  nickname,
  date,
  images,
  rating,
  comment,
  tags,
  like,
  isLiked,
  onDeleteClick,
  onModifyClick
}: Props) => (
  <PaddingWrapper className="flex flex-col gap-[4px]">
    <div className="flex items-center justify-between">
      <div className="flex gap-[4px]">
        {isBest && <Badge type="best">BEST</Badge>}
        <span className="typo-title-14-medium">{nickname}</span>
      </div>

      <Dropdown>
        <Dropdown.Trigger>
          <KebabIcon />
        </Dropdown.Trigger>
        <Dropdown.Content position="left">
          <Dropdown.Item onClick={onModifyClick}>수정</Dropdown.Item>
          <Dropdown.Item onClick={onDeleteClick}>삭제</Dropdown.Item>
        </Dropdown.Content>
      </Dropdown>
    </div>

    <div className="flex flex-col gap-[8px]">
      <div>
        <StarRating value={rating} />
      </div>
      {images && <ImageSlider images={images} />}
      <Comment id={id} comment={comment} />
    </div>

    <div className="flex gap-[4px]">
      {tags.map((tag) => (
        <Badge key={tag} type="tag">
          {tag}
        </Badge>
      ))}
    </div>

    <div className="flex justify-between items-center">
      <span className="typo-body-12-regular text-gray-500">{date}</span>
      <button
        type="button"
        className={twMerge(
          'typo-body-12-regular flex items-center gap-[4px] rounded-full  px-[8px] py-[4px]',
          isLiked ? 'text-primaryOrangeRed bg-secondaryPink' : 'text-gray-500 bg-redGray-30'
        )}
      >
        <ThumbsUpIcon color={isLiked ? 'red' : 'gray'} />
        <span>도움돼요 {like}</span>
      </button>
    </div>
  </PaddingWrapper>
);

export default Review;
