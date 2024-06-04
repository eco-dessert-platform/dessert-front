import WishFolder from '@/domains/wish/components/WishFolder';
import wishService from '@/domains/wish/queries/service';

const WishFolderGrid = async () => {
  const wishList = await wishService.getWishFolderList();

  return (
    <div className="grid gap-[16px] grid-cols-2">
      {wishList.map(({ folderId, title, count, productImages }) => (
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
