import ProductCard from '@/components/commons/card/ProductCard';
import API from '@/api';

const getBestProducts = async () => {
  try {
    await new Promise(resolve => setTimeout(resolve, 3000));
    const res = await fetch(`${API.serverUrl}/boards`, { cache: 'no-store' });
    const data = res.json();
    return data;
  } catch (err) {
    console.log(err);
    return [];
  }
};
const ProductsList = async () => {
  const bestProducts = await getBestProducts();
  return (
    <div className="flex flex-wrap w-[92%] m-auto  gap-x-[4%] gap-y-4">
      {bestProducts?.content?.map((product: any) => (
        <div key={String(product.boardId)} className="w-[48%]">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
