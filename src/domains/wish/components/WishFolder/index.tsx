'use client';

import Link from 'next/link';
import { useRecoilValue } from 'recoil';
import { MouseEventHandler } from 'react';
import usePopup from '@/shared/hooks/usePopup';
import useModal from '@/shared/hooks/useModal';
import { CloseIcon } from '@/shared/components/icons';
import PATH from '@/shared/constants/path';
import DeleteWishFolderPopup from '../alert-box/DeleteWishFolderPopup';
import { isWishFolderEditingState } from '../../atoms/wishFolder';
import UpdateWishFolderModal from '../alert-box/UpdateWishFolderModal';
import FolderThumbnail from '../common/FolderThumbnail';

interface WishFolderProps {
  id: number;
  thumbnailList?: string[];
  name: string;
  count: number;
}

const WishFolder = ({ id, thumbnailList, name, count }: WishFolderProps) => {
  const isEditing = useRecoilValue(isWishFolderEditingState);
  const { openPopup } = usePopup();
  const { openModal } = useModal();

  const deleteFolder: MouseEventHandler<HTMLButtonElement> = (e) => {
    openPopup(<DeleteWishFolderPopup folderName={name} folderId={id} />);
    e.preventDefault();
  };

  const updateFolderName: MouseEventHandler<HTMLButtonElement> = () => {
    openModal(<UpdateWishFolderModal folderId={id} />);
  };

  return (
    <div className="flex flex-col gap-[6.5px] rounded-[6px] overflow-hidden">
      <Link
        href={`${PATH.wishProductList}/${id}`}
        className="relative flex justify-center items-center after:pb-[100%] w-full"
      >
        {isEditing && (
          <button
            aria-label="delete folder"
            type="button"
            className="p-[4px] rounded-full absolute top-[6px] right-[6px]"
            onClick={deleteFolder}
          >
            <CloseIcon />
          </button>
        )}

        <FolderThumbnail thumbnailList={thumbnailList} />
      </Link>
      <div className="flex justify-between items-center">
        {isEditing ? (
          <button
            aria-label="update folder"
            type="button"
            onClick={updateFolderName}
            className="typo-body-12-regular-underline"
          >
            {name}
          </button>
        ) : (
          <div className="typo-title-14-medium">{name}</div>
        )}

        <div className="text-gray-500 typo-body-12-regular">({count})</div>
      </div>
    </div>
  );
};

export default WishFolder;
