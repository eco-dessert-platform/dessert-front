import UpModal from '@/components/commons/modal/UpModal';
import { useAddWishListMutation } from '@/components/units/WishList/hooks/useAddWishListMutation';
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react';
import { useAddWishMutation } from '../hooks/useAddWishMutation';
import PlusIcon from '../assets/plus-icon.svg';
import ToastPop from '@/components/commons/ToastPop';
import useToast from '@/commons/hooks/useToast';
import Link from 'next/link';
import { useGetWishListQuery } from '@/components/units/WishList/hooks/useGetWishListQuery';

interface ChooseWishListModalProps {
  isModal: boolean;
  setIsModal: Dispatch<SetStateAction<boolean>>;
  productId: number | undefined;
}

export const ChooseWishListModal = ({
  isModal,
  setIsModal,
  productId
}: ChooseWishListModalProps) => {
  const [isAddView, setIsAddView] = useState(false);
  const [title, setTitle] = useState('');
  const { data, refetch } = useGetWishListQuery();
  const { mutate: addWishListMutate } = useAddWishListMutation();
  const { mutate: addWishMutate } = useAddWishMutation();
  const { openToast } = useToast();

  const handleToggleAddView = () => {
    setIsAddView(prev => !prev);
    setTitle('');
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleModalToggle = () => {
    setIsModal(prev => !prev);
    setIsAddView(false);
    setTitle('');
  };

  const handleAddWish = (id: number) => () => {
    addWishMutate(
      { borderId: productId, data: { folderId: id } },
      {
        onSuccess: () => {
          setIsModal(false);
          openToast(
            <ToastPop>
              <div className="flex justify-between">
                <span>💖 찜한 상품이 추가 되었습니다.</span>
                <Link href="/wishlist">편집</Link>
              </div>
            </ToastPop>
          );
        }
      }
    );
  };

  const handleAddWishList = () => {
    if (title) {
      addWishListMutate(
        { title },
        {
          onSuccess: () => {
            refetch();
            setIsAddView(false);
          },
          onError: err => {
            alert(err.response.data.message);
          }
        }
      );
    }
  };

  return (
    <UpModal isVisible={isModal} title="찜 추가" toggleModal={handleModalToggle}>
      {isAddView ? (
        <div className="w-full">
          <div className="w-[92%] m-auto flex flex-col items-end gap-2">
            <input
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
            onClick={handleAddWishList}
            className="w-[92%] m-auto flex justify-center items-center  py-3.5 bg-color-Gray900 text-base font-medium text-color-White rounded-[50px] mt-4"
          >
            확인
          </button>
        </div>
      ) : (
        <div>
          <div style={{ maxHeight: '400px' }} className="overflow-y-auto">
            <button
              className="w-full p-[14px] flex gap-2 border-t border-solid border-t-gray-100 items-center"
              onClick={handleToggleAddView}
            >
              <div className="w-[26px] h-[26px] flex justify-center items-center bg-color-Gray100 border border-solid border-color-Gray200 rounded-md">
                <PlusIcon />
              </div>
              <p className="text-sm font-semibold">새 폴더 만들기</p>
            </button>
            {data?.map(wish => (
              <button
                key={wish.folderId}
                className="w-full p-[14px] flex gap-2 border-t border-solid border-t-gray-100 items-center"
                onClick={handleAddWish(wish.folderId)}
              >
                <div className="w-[26px] h-[26px]  border border-solid border-color-Gray200 rounded-md flex flex-wrap gap-[2%]">
                  {wish.productImages.length > 0 ? (
                    wish.productImages.map(
                      (img, index) =>
                        index < 4 && (
                          <div
                            key={index}
                            style={{
                              backgroundImage: `url(${img})`
                            }}
                            className="w-[49%] h-[49%] bg-center bg-cover"
                          ></div>
                        )
                    )
                  ) : (
                    <div
                      style={{
                        backgroundImage: 'url(/assets/wishLogo.svg)'
                      }}
                      className="w-[100%] h-[100%] bg-cover bg-center"
                    ></div>
                  )}
                </div>
                <p className="text-sm font-semibold">{wish.title}</p>
              </button>
            ))}
          </div>
          <button
            onClick={handleModalToggle}
            className="w-[92%] m-auto flex justify-center items-center  py-3.5 bg-color-Gray900 text-base font-medium text-color-White rounded-[50px] mt-4"
          >
            닫기
          </button>
        </div>
      )}
    </UpModal>
  );
};
