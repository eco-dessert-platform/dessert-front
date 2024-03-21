import ProductCard from '@/components/commons/card/ProductCard';
import API from '@/api';
import { IProductType } from '@/commons/types/productType';

const getBestProducts = async () => {
  const data = await API.get('/boards', { cache: 'no-store' });
  return data;
};

const ProductsList = async () => {
  const bestProducts = await getBestProducts();
  return (
    <div className="grid grid-cols-2 gap-x-[16px] gap-y-[16px]">
      {bestProducts?.content?.map((product: IProductType) => (
        <ProductCard key={String(product.boardId)} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
