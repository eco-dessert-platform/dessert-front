'use client';

import Button from '@/shared/components/Button';
import { useRecoilState } from 'recoil';
import useModal from '@/shared/hooks/useModal';
import CreateWishFolderModal from '@/domains/wish/components/alert-box/CreateWishFolderModal';
import { isWishFolderEditingState } from '@/domains/wish/atoms/wishFolder';

const WishFolderEditButtonSection = () => {
  const [isEditing, setIsEditing] = useRecoilState(isWishFolderEditingState);
  const { openModal } = useModal();

  const editFolder = () => {
    setIsEditing(true);
  };

  const complete = () => {
    setIsEditing(false);
  };

  const createFolder = () => {
    openModal(<CreateWishFolderModal />);
  };

  return (
    <div className="flex justify-end gap-[6px] pb-[10px]">
      <Button variants="secondary-white" onClick={createFolder}>
        추가
      </Button>
      {isEditing ? (
        <Button variants="secondary-black" onClick={complete}>
          완료
        </Button>
      ) : (
        <Button variants="secondary-white" onClick={editFolder}>
          편집
        </Button>
      )}
    </div>
  );
};

export default WishFolderEditButtonSection;
