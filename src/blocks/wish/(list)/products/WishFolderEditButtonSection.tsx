'use client';

import Button from '@/shared/components/Button';
import { useAtom } from 'jotai';
import useModal from '@/shared/hooks/useModal';
import { isWishFolderEditingAtom } from '@/domains/wish/atoms/wishFolder';
import UpdateWishFolderModal from '@/domains/wish/components/alert-box/UpdateWishFolderModal';
import useCreateWishFolderMutation from '@/domains/wish/queries/useCreateWishFolderMutation';
import useWishFolderListQuery from '@/domains/wish/queries/useWishFolderListQuery';
import { useMemo } from 'react';

const WishFolderEditButtonSection = () => {
  const { data: wishList, isLoading } = useWishFolderListQuery();
  const { mutate: createFolderMutate } = useCreateWishFolderMutation();
  const [isEditing, setIsEditing] = useAtom(isWishFolderEditingAtom);
  const { openModal, closeModal } = useModal();

  const isSingleFolder = useMemo(() => !wishList || wishList.length === 1, [wishList]);

  const editFolder = () => {
    setIsEditing(true);
  };

  const complete = () => {
    setIsEditing(false);
  };

  const createFolder = () => {
    openModal(
      <UpdateWishFolderModal
        onValidSubmit={({ title }) => {
          createFolderMutate(title);
          closeModal();
        }}
      />
    );
  };

  if (isLoading) {
    return <div>로딩 중...</div>; // 로딩 중 상태 처리
  }

  return (
    <div className="flex justify-end gap-[6px] pb-[10px]">
      <Button variants="secondary-white" onClick={createFolder}>
        추가
      </Button>

      {!isSingleFolder && isEditing && (
        <Button variants="secondary-black" onClick={complete}>
          완료
        </Button>
      )}

      {!isSingleFolder && !isEditing && (
        <Button variants="secondary-white" onClick={editFolder}>
          편집
        </Button>
      )}
    </div>
  );
};

export default WishFolderEditButtonSection;
