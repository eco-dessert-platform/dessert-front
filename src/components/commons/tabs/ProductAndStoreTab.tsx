'use client';

import { useRouter, usePathname, useSearchParams } from 'next/navigation';
import TabContainer from '@/components/commons/tabs/TabContainer';

interface ProductAndStoreTabProps {
  productCount?: number;
  storeCount?: number;
}

const TAB_NAMES = {
  product: '상품',
  store: '스토어'
};
const PRODUCT_IDX = 0;
const STORE_IDX = 1;

const ProductAndStoreTab = ({ productCount, storeCount }: ProductAndStoreTabProps) => {
  const names = [
    TAB_NAMES.product + (typeof productCount === 'number' ? `(${productCount})` : ''),
    TAB_NAMES.store + (typeof storeCount === 'number' ? `(${storeCount})` : '')
  ];

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const segments = pathname.split('/');
  const isProductsPage = segments.pop() === 'products';
  const defaultPath = segments.join('/');

  const handleTabChange = (activeTabIdx: number) => {
    const path = `${defaultPath}/${activeTabIdx === PRODUCT_IDX ? 'products' : 'stores'}`;
    const queryString = searchParams.toString();

    router.push(queryString ? path + '?' + queryString : path);
  };

  return (
    <TabContainer
      names={names}
      initActiveTabIdx={isProductsPage ? PRODUCT_IDX : STORE_IDX}
      onChange={handleTabChange}
    />
  );
};

export default ProductAndStoreTab;
