'use client';

import { useAtom } from 'jotai';
import { isLoggedinAtom } from '@/shared/atoms/login';
import { ThumbsUpIcon } from '@/shared/components/icons';
import { cn } from '@/shared/utils/cn';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import Link from 'next/link';
import PATH from '@/shared/constants/path';
import useDislikeReviewMutation from '../../queries/useDislikeReviewMutation';
import useLikeReviewMutation from '../../queries/useLikeReviewMutation';

interface Props {
  id: number;
  isLiked?: boolean;
  like: number;
}

const LikeButton = ({ id, isLiked, like }: Props) => {
  const [isLoggedIn] = useAtom(isLoggedinAtom);
  const { mutate: addLike } = useLikeReviewMutation(id);
  const { mutate: removeLike } = useDislikeReviewMutation(id);

  const { openToast } = useToastNewVer();

  const handleLikeToggle = isLiked ? removeLike : addLike;

  const handleButtonClick = () => {
    if (!isLoggedIn) {
      openToast({
        message: ERROR_MESSAGE.requiredLogin,
        action: (
          <Link className="hover:underline" href={PATH.login}>
            로그인
          </Link>
        )
      });
      return;
    }
    handleLikeToggle();
  };

  return (
    <button
      type="button"
      className={cn(
        'typo-body-12-regular flex items-center gap-[4px] rounded-full px-[8px] py-[4px]',
        isLiked ? 'text-primary-orange-red bg-secondary-pink' : 'bg-red-gray-30 text-gray-500'
      )}
      onClick={handleButtonClick}
    >
      <ThumbsUpIcon color={isLiked ? 'red' : 'gray'} />
      <span>도움돼요 {like}</span>
    </button>
  );
};

export default LikeButton;
