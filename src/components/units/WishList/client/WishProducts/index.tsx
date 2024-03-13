'use client';

import { isCategoryTabState } from '@/atoms/atom';
import CategoryTab from '@/components/commons/CategoryTab';
import Loading from '@/components/commons/Loading';
import Input from '@/components/commons/inputs/Input';
import UpModal from '@/components/commons/modal/UpModal';
import StoreCard from '@/components/units/(main)/Stores/client/StoreCard';
import WishButton from '@/components/units/WishList/client/WishButton';
import WishFolder from '@/components/units/WishList/client/WishFolder';
import { useAddWishListMutation } from '@/components/units/WishList/hooks/useAddWishListMutation';
import { useGetWishListQuery } from '@/components/units/WishList/hooks/useGetWishListQuery';
import { useWishStoreListQuery } from '@/components/units/WishListDetail/hooks/useWishStoreListQuery';
import { ChangeEvent, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { useRecoilState } from 'recoil';

const WishProducts = () => {
  const [isCategoryTab] = useRecoilState(isCategoryTabState);
  const [title, setTitle] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  const [isEdit, setIsEdit] = useState(false);

  const { data: wishList, refetch } = useGetWishListQuery();
  const { wishStoreList, isLoading, isError, fetchNextPage, isFetchingNextPage } =
    useWishStoreListQuery();

  const { ref, inView } = useInView();

  const { mutate } = useAddWishListMutation();

  const handleClickEdit = () => {
    setIsEdit(prev => !prev);
  };

  const handleModalToggle = () => {
    setIsVisible(prev => !prev);
    setTitle('');
  };

  const handleChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };
  const handleAddWishList = () => {
    if (title) {
      mutate(
        { title },
        {
          onSuccess: () => {
            refetch();
            handleModalToggle();
          },
          onError: (err: any) => {
            alert(err.response.data.message);
          }
        }
      );
    }
  };
  console.log(wishStoreList);
  useEffect(() => {
    if (!inView) return;
    fetchNextPage();
  }, [inView, fetchNextPage]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <div className="p-[16px]">Error</div>;
  }

  return (
    <>
      <CategoryTab categories={['상품', '스토어']} />
      {isCategoryTab ? (
        <>
          <div className="w-[92%] m-auto">
            <div className="flex items-center justify-end gap-2 pt-4 pb-2.5">
              <WishButton title="추가" onClick={handleModalToggle} />
              <WishButton title={isEdit ? '완료' : '편집'} isBlack onClick={handleClickEdit} />
            </div>

            <div className="flex flex-wrap gap-x-[5%] gap-y-4">
              {wishList?.map((wish, index) => (
                <WishFolder key={wish.folderId} index={index} wish={wish} isEdit={isEdit} />
              ))}
            </div>
          </div>
          <UpModal title="찜 폴더" isVisible={isVisible} toggleModal={handleModalToggle}>
            <div className="w-full">
              <div className="w-[92%] m-auto flex flex-col items-end gap-2">
                <Input
                  id="wish-add-input"
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
                onClick={handleAddWishList}
                className="w-[92%] m-auto flex justify-center items-center  py-3.5 bg-color-Gray900 text-base font-medium text-color-White rounded-[50px] mt-4"
              >
                확인
              </button>
            </div>
          </UpModal>
        </>
      ) : (
        <>
          <div className="w-full">
            {wishStoreList?.map((data, i) => <StoreCard data={data} key={i} isWished />)}
          </div>
          {isFetchingNextPage ? <Loading /> : <div ref={ref}></div>}
        </>
      )}
    </>
  );
};

export default WishProducts;
