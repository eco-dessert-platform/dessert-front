'use client';

import Dropdown from '@/shared/components/Dropdown';
import { KebabIcon } from '@/shared/components/icons';
import PATH from '@/shared/constants/path';
import { attachRedirectUrl } from '@/shared/utils/attachRedirectUrl';
import { useRouter } from 'next/navigation';
import usePopup from '@/shared/hooks/usePopup';
import { ReviewType } from '@/domains/review/types/review';
import useDeleteReviewMutation from '@/domains/review/queries/useDeleteReviewMutation';
import DeleteConfirmPopup from './DeleteConfirmPopup';

interface Props {
  reviewId: ReviewType['id'];
  boardId: ReviewType['boardId'];
  usedIn: 'review-list' | 'review-detail';
}

const KebabMenu = ({ reviewId, boardId, usedIn }: Props) => {
  const { push, back } = useRouter();
  const { mutate: deleteReview } = useDeleteReviewMutation(boardId);
  const { openPopup, closePopup } = usePopup();

  const goToReviewEditPage = () => {
    const redirectUrl = window.location.href;
    const updateUrl = attachRedirectUrl({
      url: PATH.reviewUpdate({ productId: boardId, reviewId, progress: 1 }),
      redirectUrl
    });
    push(updateUrl);
  };

  const onDeleteReview = () => {
    deleteReview(reviewId);
    closePopup();
    if (usedIn === 'review-detail') {
      back();
    }
  };

  const openDeleteReviewPopup = () => {
    openPopup(<DeleteConfirmPopup onCancel={closePopup} onDelete={onDeleteReview} />);
  };

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <KebabIcon />
      </Dropdown.Trigger>
      <Dropdown.Content position="left">
        <Dropdown.Item onClick={goToReviewEditPage}>수정</Dropdown.Item>
        <Dropdown.Item onClick={openDeleteReviewPopup}>삭제</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default KebabMenu;
