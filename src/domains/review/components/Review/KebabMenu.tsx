'use client';

import Dropdown from '@/shared/components/Dropdown';
import { KebabIcon } from '@/shared/components/icons';
import PATH from '@/shared/constants/path';
import { useRouter } from 'next/navigation';
import { ReviewType } from '../../types/review';

interface Props {
  reviewId: ReviewType['id'];
  boardId: ReviewType['boardId'];
}

const KebabMenu = ({ reviewId, boardId }: Props) => {
  const { push } = useRouter();

  const onModifyClick = () => {
    push(PATH.reviewUpdate({ productId: boardId, reviewId, progress: 1 }));
  };

  const onDeleteClick = () => {};

  return (
    <Dropdown>
      <Dropdown.Trigger>
        <KebabIcon />
      </Dropdown.Trigger>
      <Dropdown.Content position="left">
        <Dropdown.Item onClick={onModifyClick}>수정</Dropdown.Item>
        <Dropdown.Item onClick={onDeleteClick}>삭제</Dropdown.Item>
      </Dropdown.Content>
    </Dropdown>
  );
};

export default KebabMenu;
