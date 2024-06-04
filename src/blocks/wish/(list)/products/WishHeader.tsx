'use client';

import useWishFolderListQuery from '@/domains/wish/queries/useWishFolderListQuery';
import Header from '@/shared/components/Header';
import ProductAndStoreTab from '@/shared/components/ProductAndStoreTab';
import PATH from '@/shared/constants/path';
import { useParams, usePathname } from 'next/navigation';

const WishHeader = () => {
  const pathname = usePathname();
  const params = useParams<{ folderId: string }>();
  const { data: folderList } = useWishFolderListQuery();
  const detailPagePattern = new RegExp(`^${PATH.wishProductList}/\\d+$`);
  const isDetailPage = detailPagePattern.test(pathname);

  if (isDetailPage) {
    const currentFolder = folderList?.find(({ folderId }) => folderId === Number(params.folderId));
    const detailTitle = currentFolder ? currentFolder.title : '';
    return <Header back title={detailTitle} />;
  }

  return (
    <>
      <Header title="찜" />
      <ProductAndStoreTab defaultPath={PATH.wish} />
    </>
  );
};

export default WishHeader;
