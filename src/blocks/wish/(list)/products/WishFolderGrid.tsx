'use client';

import WishFolder from '@/domains/wish/components/WishFolder';
import useWishFolderListQuery from '@/domains/wish/queries/useWishFolderListQuery';

const WishFolderGrid = () => {
  const { data: wishList } = useWishFolderListQuery();

  return (
    <div className="grid gap-[16px] grid-cols-2">
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
