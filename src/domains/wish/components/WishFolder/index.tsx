'use client';

import Link from 'next/link';
import { MouseEventHandler, useMemo } from 'react';
import { useAtom } from 'jotai';
import usePopup from '@/shared/hooks/usePopup';
import useModal from '@/shared/hooks/useModal';
import { CloseIcon } from '@/shared/components/icons';
import PATH from '@/shared/constants/path';
import DeleteWishFolderPopup from '../alert-box/DeleteWishFolderPopup';
import { isWishFolderEditingAtom } from '../../atoms/wishFolder'; // Updated to use Jotai's atom
import UpdateWishFolderModal from '../alert-box/UpdateWishFolderModal';
import FolderThumbnail from '../common/FolderThumbnail';
import useUpdateWishFolderMutation from '../../queries/useUpdateWishFolderMutation';
import DefaultFolderAlertPopup from '../alert-box/DefaultFolderAlertPopup';
import { DEFAULT_FOLDER_NAME } from '../../constants';

interface WishFolderProps {
  id: number;
  thumbnailList?: string[];
  name: string;
  count: number;
}

const WishFolder = ({ id, thumbnailList, name, count }: WishFolderProps) => {
  const [isEditing] = useAtom(isWishFolderEditingAtom);
  const { openPopup } = usePopup();
  const { openModal, closeModal } = useModal();
  const { mutate: updateWishFolderTitle } = useUpdateWishFolderMutation();
  const isDefaultFolder = useMemo(() => DEFAULT_FOLDER_NAME === name, [name]);

  const deleteFolder: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    if (isDefaultFolder) {
      openPopup(<DefaultFolderAlertPopup />);
      return;
    }

    openPopup(<DeleteWishFolderPopup folderName={name} folderId={id} />);
  };

  const updateFolderName = () => {
    if (isDefaultFolder) {
      openPopup(<DefaultFolderAlertPopup />);
      return;
    }

    openModal(
      <UpdateWishFolderModal
        prevTitle={name}
        onValidSubmit={({ title }) => {
          updateWishFolderTitle({ title, folderId: id }, { onSuccess: closeModal });
        }}
      />
    );
  };

  return (
    <div className="flex flex-col gap-[6.5px] overflow-hidden rounded-[6px]">
      <Link
        href={`${PATH.wishProductList}/${isEditing ? '' : id}`}
        className="relative flex w-full items-center justify-center after:pb-[100%]"
        onClick={() => isEditing && updateFolderName()}
      >
        <FolderThumbnail thumbnailList={thumbnailList} />

        {!isDefaultFolder && isEditing && (
          <button
            aria-label="delete folder"
            type="button"
            className="absolute top-[6px] right-[6px] rounded-full p-[4px]"
            onClick={deleteFolder}
          >
            <CloseIcon shape="black" />
          </button>
        )}
      </Link>
      <div className="flex items-center justify-between">
        {!isDefaultFolder && isEditing ? (
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

        <div className="typo-body-12-regular text-gray-500">({count})</div>
      </div>
    </div>
  );
};

export default WishFolder;
