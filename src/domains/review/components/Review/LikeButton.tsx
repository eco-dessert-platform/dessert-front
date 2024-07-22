import { ThumbsUpIcon } from '@/shared/components/icons';
import { cn } from '@/shared/utils/cn';
import { MouseEventHandler } from 'react';

interface Props {
  isLiked?: boolean;
  like: number;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

// eslint-disable-next-line arrow-body-style
const LikeButton = ({ isLiked, like, onClick }: Props) => {
  return (
    <button
      type="button"
      className={cn(
        'typo-body-12-regular flex items-center gap-[4px] rounded-full  px-[8px] py-[4px]',
        isLiked ? 'text-primaryOrangeRed bg-secondaryPink' : 'text-gray-500 bg-redGray-30'
      )}
      onClick={onClick}
    >
      <ThumbsUpIcon color={isLiked ? 'red' : 'gray'} />
      <span>도움돼요 {like}</span>
    </button>
  );
};

export default LikeButton;
