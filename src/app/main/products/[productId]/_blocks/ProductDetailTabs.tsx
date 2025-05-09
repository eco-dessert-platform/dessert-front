'use client';

import TabButton from '@/shared/components/TabButton';
import PATH from '@/shared/constants/path';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

const ProductDetailTabs = () => {
  const pathname = usePathname();
  const params = useParams<{ productId: string }>();

  const infoPath = `${PATH.mainProductList}/${params.productId}/info`;
  const reviewPath = `${PATH.mainProductList}/${params.productId}/review`;

  return (
    <div className="flex w-full">
      <Link href={infoPath} replace className="w-full h-full">
        <TabButton active={pathname === infoPath}>상품</TabButton>
      </Link>

      <Link href={reviewPath} replace className="w-full h-full">
        <TabButton active={pathname === reviewPath}>리뷰</TabButton>
      </Link>
    </div>
  );
};

export default ProductDetailTabs;
