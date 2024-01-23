'use client';
import ProductCard from '@/components/commons/card/ProductCard';
import { UseGetStoreDetialQuery } from '../../hooks/useGetStoreDetailQuery';

function BestProducts() {
    const { data } = UseGetStoreDetialQuery(1);
    console.log(data?.bestProducts);
    return (
        <>
            <div className="flex w-full flex-wrap m-auto gap-x-[3%] gap-y-2">
                {data?.bestProducts.map((item, i) => (
                    <div key={i} className="w-[31%]">
                        <ProductCard product={item} popular={true} ranking={Number(i + 1)} />
                    </div>
                ))}
            </div>
        </>
    );
}

export default BestProducts;