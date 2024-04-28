'use client';

import Modal from '@/shared/components/Modal';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { PlusIcon } from '@/shared/components/icons';
import FolderThumbnail from '../common/FolderThumbnail';
import useWishFolderListQuery from '../../queries/useWishFolderListQuery';

const WishFolderSelectModal = () => {
  const { data } = useWishFolderListQuery();

  if (!data || data.length === 0) return <>임시</>;

  return (
    <Modal title="찜 폴더" className="font-semibold text-[14px] text-gray-800">
      <div className="flex flex-col ">
        <button type="button" className="border-t border-gray-100">
          <PaddingWrapper className="flex items-center gap-[10px]">
            <div className="flex justify-center items-center size-[26px] bg-gray-100 rounded-[6px] border border-gray-200">
              <PlusIcon />
            </div>
            새 폴더 만들기
          </PaddingWrapper>
        </button>

        {data.map(({ count, folderId, title, productImages }) => (
          <button type="button" key={folderId} className="border-t border-gray-100">
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
