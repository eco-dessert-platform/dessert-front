import getWishList from '@/domains/wish/queries/getWishFolderList';
import WishFolder from '@/domains/wish/components/WishFolder';
import SadBbangleBox from '@/shared/components/SadBbangleBox';

const WishFolderGrid = async () => {
  const wishList = await getWishList();

  if (!wishList || wishList.length === 0) {
    return <SadBbangleBox>찜한 상품이 없어요!</SadBbangleBox>;
  }

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
