'use client';

import WishFolder from '@/domains/wish/components/WishFolder';
import useWishFolderListQuery from '@/domains/wish/queries/useWishFolderListQuery';

const WishFolderGrid = () => {
  const { data: wishList, isLoading } = useWishFolderListQuery();

  if (isLoading) {
    return <div>로딩 중...</div>; // 로딩 중 상태 처리
  }

  return (
    <div className="grid grid-cols-2 gap-[16px]">
      {wishList?.map(({ folderId, title, count, productImages }) => (
        <WishFolder
          key={folderId}
          id={folderId}
          name={title}
          thumbnailList={productImages}
          count={count}
        />
      ))}
    </div>
  );
};

export default WishFolderGrid;
