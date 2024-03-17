'use client';

import { IAllProductsType } from '@/commons/types/allProductsType';
import ProductCard from '@/components/commons/card/ProductCard';

interface ProductsListProps {
  bestProducts: IAllProductsType;
}

const ProductsList = ({ bestProducts }: ProductsListProps) => {
  return (
    <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-4">
      {bestProducts?.content?.map(product => (
        <div key={String(product.boardId)} className="w-[48%]">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
