'use client';

import { isCategoryTabState } from '@/atoms/atom';
import CategoryTab from '@/components/commons/CategoryTab';
import UpModal from '@/components/commons/modal/UpModal';
import StoreCard from '@/components/units/Products/client/StoreCard';
import WishButton from '@/components/units/WishList/client/WishButton';
import WishFolder from '@/components/units/WishList/client/WishFolder';
import { useAddWishListMutation } from '@/components/units/WishList/hooks/useAddWishListMutation';
import { useGetWishLists } from '@/components/units/WishList/hooks/useGetWishList';
import { useWishStoreListQuery } from '@/components/units/WishListDetail/hooks/useWishStoreListQuery';
import { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';

const WishProducts = () => {
    const [isCategoryTab] = useRecoilState(isCategoryTabState);
    const [title, setTitle] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const { data, refetch } = useGetWishLists();
    const { data: wishStoreList } = useWishStoreListQuery();

    const { mutate } = useAddWishListMutation();

    const handleToggleEdit = () => {
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
                    }
                }
            );
        }
    };

    return (
        <>
            <CategoryTab categories={['상품', '스토어']} />
            {isCategoryTab ? (
                <>
                    <div className="w-[92%] m-auto">
                        <div className="flex items-center justify-end gap-2 pt-4 pb-2.5">
                            <WishButton title="추가" onClick={handleModalToggle} />
                            <WishButton
                                title={isEdit ? '완료' : '편집'}
                                isBlack={isEdit ? true : false}
                                onClick={handleToggleEdit}
                            />
                        </div>
                        <div className="flex flex-wrap gap-x-[5%] gap-y-4">
                            {data?.map(wish => <WishFolder key={wish.folderId} wish={wish} />)}
                        </div>
                    </div>
                    <UpModal title="찜 폴더" isVisible={isVisible} toggleModal={handleModalToggle}>
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
                                    <span className="text-xs font-medium text-color-Gray900 ">
                                        {title.length}
                                    </span>
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
                        {wishStoreList?.map((data, i) => <StoreCard data={data} key={i} />)}
                    </div>
                </>
            )}
        </>
    );
};

export default WishProducts;
