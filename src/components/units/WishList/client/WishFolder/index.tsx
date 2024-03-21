import WishLogo from '@/components/units/WishList/assets/wishLogo.svg';
import BtnRemove from '@/components/units/WishList/assets/btnRemove.svg';
import { WishListFolder } from '@/components/units/WishList/types';
import Link from 'next/link';
import { ChangeEvent, MouseEvent, useState } from 'react';
import UpModal from '@/components/commons/modal/UpModal';
import { useUpdateWishListMutation } from '@/components/units/WishList/hooks/useUpdateWishListMutation';
import { useGetWishListFolder } from '@/components/units/WishList/hooks/useGetWishListFolder';
import { useDeleteWishListMutation } from '@/components/units/WishList/hooks/useDeleteWishListMutation';
import useToast from '@/commons/hooks/useToast';
import ToastPop from '@/components/commons/ToastPop';
import Input from '@/components/commons/inputs/Input';

interface WishFolderProps {
  wish: WishListFolder;
  isEdit: boolean;
  index: number;
}

const WishFolder = ({ wish, isEdit, index }: WishFolderProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [title, setTitle] = useState('');
  const [folderId, setFolderId] = useState(0);
  const { openToast } = useToast();

  const { mutate: updateWishMutate } = useUpdateWishListMutation();
  const { mutate: deleteWishMutate } = useDeleteWishListMutation();
  const { refetch } = useGetWishListFolder();

  const handleToggleEditModal = (folderId?: number) => (e: MouseEvent<HTMLElement>) => {
    if (!isEdit || index === 0) {
      return;
    }

    e.preventDefault();
    setIsVisible(prev => !prev);

    if (folderId) {
      setFolderId(folderId);
    }
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleUpdateWishList = (e: MouseEvent<HTMLElement>) => {
    if (!title) {
      openToast(
        <ToastPop>
          <div>변경하실 폴더 명을 입력해주세요.</div>
        </ToastPop>
      );
      return;
    }

    updateWishMutate(
      {
        folderId,
        data: {
          title
        }
      },
      {
        onSuccess: () => {
          refetch();
          handleToggleEditModal()(e);
          openToast(
            <ToastPop>
              <div>폴더 명이 변경 되었습니다.</div>
            </ToastPop>
          );
        }
      }
    );
  };
  const handleDeleteWishList = (folderId: number) => (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteWishMutate(
      {
        folderId
      },
      {
        onSuccess: () => {
          refetch();
          openToast(
            <ToastPop>
              <div>찜 폴더가 삭제 되었습니다.</div>
            </ToastPop>
          );
        }
      }
    );
  };

  return (
    <>
      <Link href={`/wishlist/${wish.folderId}`} className="w-[47.5%]">
        <div className="w-full">
          <div className="w-full aspect-[1/1] flex flex-wrap gap-0.5 border border-color-Gray100 border-solid rounded-[10px] relative">
            {wish.productImages.length > 0 ? (
              wish.productImages.map(
                (img, index) =>
                  index < 4 && (
                    <div
                      key={index}
                      style={{
                        backgroundImage: `url(${img})`
                      }}
                      className="w-[49%] h-[49%] bg-center bg-cover "
                    ></div>
                  )
              )
            ) : (
              <div className="m-auto">
                <WishLogo />
              </div>
            )}
            {isEdit && index !== 0 && (
              <button
                className="absolute top-3 right-3"
                onClick={handleDeleteWishList(wish.folderId)}
              >
                <BtnRemove />
              </button>
            )}
          </div>
          <div
            className="flex items-center justify-between mt-1.5"
            onClick={handleToggleEditModal(wish.folderId)}
          >
            <h3
              className={`text-sm font-semibold text-color-Gray900 ${isEdit && index !== 0 && 'underline'}`}
            >
              {wish.title}
            </h3>
            <span className="text-xs font-normal text-color-Gray500">({wish.count})</span>
          </div>
        </div>
      </Link>
      {isVisible && (
        <UpModal title="찜 폴더" isVisible={isVisible} toggleModal={handleToggleEditModal()}>
          <div className="w-full">
            <div className="w-[92%] m-auto flex flex-col items-end gap-2">
              <Input
                id="wish-update-input"
                label=""
                type="text"
                style={{ outline: 'none' }}
                className="w-full p-3 border border-solid border-color-Gray100 rounded-[10px] text-base font-normal"
                placeholder="폴더명을 입력해주세요."
                onChange={handleChangeTitle}
                maxLength={12}
                value={title}
              />
              <div className="w-[324px] text-right">
                <span className="text-xs font-medium text-color-Gray900 ">{title.length}</span>
                <span className="text-xs font-medium text-color-G400">/12</span>
              </div>
            </div>

            <button
              onClick={handleUpdateWishList}
              className="w-[92%] m-auto flex justify-center items-center  py-3.5 bg-color-Gray900 text-base font-medium text-color-White rounded-[50px] mt-4"
            >
              수정
            </button>
          </div>
        </UpModal>
      )}
    </>
  );
};

export default WishFolder;
