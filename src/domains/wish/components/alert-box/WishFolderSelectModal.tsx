'use client';

/* 기획상 순환이 발생 */
/* eslint-disable import/no-cycle */

import { useSetRecoilState } from 'recoil';
import Modal from '@/shared/components/Modal';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { PlusIcon } from '@/shared/components/icons';
import useModal from '@/shared/hooks/useModal';
import FolderThumbnail from '../common/FolderThumbnail';
import useWishFolderListQuery from '../../queries/useWishFolderListQuery';
import { selectedWishFolderState } from '../../atoms/wishFolder';
import useMoveWishProduct from '../../queries/useMoveWishProduct';
import UpdateWishFolderModal from './UpdateWishFolderModal';
import useCreateWishFolderMutation from '../../queries/useCreateWishFolderMutation';

interface Props {
  productId: number;
}

const WishFolderSelectModal = ({ productId }: Props) => {
  const { data } = useWishFolderListQuery();
  const setSelectedWishFolder = useSetRecoilState(selectedWishFolderState);
  const { mutate } = useMoveWishProduct();
  const { openModal, closeModal } = useModal();
  const { mutate: createWishFolder } = useCreateWishFolderMutation();

  const moveTo = async ({ folderId, folderName }: { folderId: number; folderName: string }) => {
    setSelectedWishFolder(folderId);
    mutate({ productId, folderId, folderName });
  };

  const openCreateWishFolderModal = () => {
    openModal(
      <UpdateWishFolderModal
        onValidSubmit={({ title }) => {
          createWishFolder(title);
          closeModal();
          openModal(<WishFolderSelectModal productId={productId} />);
        }}
      />
    );
  };

  return (
    <Modal title="찜 폴더" className="font-semibold text-[14px] text-gray-800">
      <div className="flex flex-col ">
        <button
          type="button"
          className="border-t border-gray-100"
          onClick={openCreateWishFolderModal}
        >
          <PaddingWrapper className="flex items-center gap-[10px]">
            <div className="flex justify-center items-center size-[26px] bg-gray-100 rounded-[6px] border border-gray-200">
              <PlusIcon />
            </div>
            새 폴더 만들기
          </PaddingWrapper>
        </button>

        {data?.map(({ count, folderId, title, productImages }) => (
          <button
            type="button"
            key={folderId}
            className="border-t border-gray-100"
            onClick={() => moveTo({ folderId, folderName: title })}
          >
            <PaddingWrapper className="flex items-center gap-[10px]">
              <FolderThumbnail size="sm" thumbnailList={productImages} />
              <div className="flex items-center">
                {title}
                <span className="text-[12px] font-normal text-gray-500">({count})</span>
              </div>
            </PaddingWrapper>
          </button>
        ))}
      </div>
    </Modal>
  );
};

export default WishFolderSelectModal;
