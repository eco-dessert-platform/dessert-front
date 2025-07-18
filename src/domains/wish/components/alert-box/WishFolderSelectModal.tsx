'use client';

import { useAtom } from 'jotai';
import Modal from '@/shared/components/Modal';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { PlusIcon } from '@/shared/components/icons';
import useModal from '@/shared/hooks/useModal';
import dynamic from 'next/dynamic';
import FolderThumbnail from '../common/FolderThumbnail';
import useWishFolderListQuery from '../../queries/useWishFolderListQuery';
import useCreateWishFolderMutation from '../../queries/useCreateWishFolderMutation';
import { selectedWishFolderAtom } from '../../atoms/wishFolder';
import useMoveWishProduct from '../../queries/useMoveWishProduct';

const UpdateWishFolderModal = dynamic(() => import('./UpdateWishFolderModal'), { ssr: false });

interface Props {
  productId: number;
}

const WishFolderSelectModal = ({ productId }: Props) => {
  const { data } = useWishFolderListQuery();
  const [, setSelectedWishFolder] = useAtom(selectedWishFolderAtom);
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
        }}
      />
    );
  };

  return (
    <Modal title="찜 폴더" className="text-[14px] font-semibold text-gray-800">
      <div className="flex flex-col">
        <button
          type="button"
          className="border-t border-gray-100"
          onClick={openCreateWishFolderModal}
        >
          <PaddingWrapper className="flex items-center gap-[10px]">
            <div className="flex size-[26px] items-center justify-center rounded-[6px] border border-gray-200 bg-gray-100">
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
