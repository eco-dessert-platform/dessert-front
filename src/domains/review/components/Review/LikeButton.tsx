import { ThumbsUpIcon } from '@/shared/components/icons';
import { cn } from '@/shared/utils/cn';
import useLikeReviewMutation from '../../queries/useLikeReviewMutation';
import useDislikeReviewMutation from '../../queries/useDislikeReviewMutation';

interface Props {
  id: number;
  isLiked?: boolean;
  like: number;
}

const LikeButton = ({ id, isLiked, like }: Props) => {
  const { mutate: likeMutate } = useLikeReviewMutation(id);
  const { mutate: dislikeMutate } = useDislikeReviewMutation(id);

  const mutate = isLiked ? dislikeMutate : likeMutate;

  return (
    <button
      type="button"
      className={cn(
        'typo-body-12-regular flex items-center gap-[4px] rounded-full  px-[8px] py-[4px]',
        isLiked ? 'text-primaryOrangeRed bg-secondaryPink' : 'text-gray-500 bg-redGray-30'
      )}
      onClick={() => mutate()}
    >
      <ThumbsUpIcon color={isLiked ? 'red' : 'gray'} />
      <span>도움돼요 {like}</span>
    </button>
  );
};

export default LikeButton;
