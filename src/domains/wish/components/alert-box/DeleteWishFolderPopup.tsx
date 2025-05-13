'use client';

import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Button from '@/shared/components/Button';
import Popup from '@/shared/components/Popup';
import usePopup from '@/shared/hooks/usePopup';
import useDeleteWishFolderMutation from '../../queries/useDeleteWishFolderMutation';

interface DeleteWishFolderPopupProps {
  folderId: number;
  folderName: string;
}

const DeleteWishFolderPopup = ({ folderName, folderId }: DeleteWishFolderPopupProps) => {
  const { mutate } = useDeleteWishFolderMutation();
  const { closePopup } = usePopup();

  const deleteWishFolder = () => {
    mutate(folderId);
    closePopup();
  };

  return (
    <Popup className="text-center">
      <PaddingWrapper>
        <u>{folderName}</u> 폴더 삭제
      </PaddingWrapper>
      <PaddingWrapper>
        삭제한 찜 폴더는 복구할 수 없고,
        <br />
        찜한 상품도 함께 삭제됩니다.
      </PaddingWrapper>

      <PaddingWrapper className="flex gap-[10px] pt-[10px]">
        <Button onClick={closePopup} variants="primary-white">
          취소
        </Button>
        <Button onClick={deleteWishFolder} variants="primary-black">
          삭제
        </Button>
      </PaddingWrapper>
    </Popup>
  );
};

export default DeleteWishFolderPopup;
