'use client';
import ProductCard from '@/components/commons/card/ProductCard';
import { IStoreDetailAllType } from '../../types';

interface AllProductProps {
  data: IStoreDetailAllType | undefined;
}

function AllProducts({ data }: AllProductProps) {
  return (
    <div className="flex w-full flex-wrap m-auto gap-x-[4%] gap-y-4">
      {data?.content?.map((item, i) => (
        <div key={i} className="w-[48%]">
          <ProductCard product={item} />
        </div>
      ))}
    </div>
  );
}

export default AllProducts;
