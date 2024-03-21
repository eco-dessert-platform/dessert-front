import Header from '@/components/commons/header/client/Header';
import ProductAndStoreTabWithCount from '@/components/units/(main)/client/ProductAndStoreTabWithCount';
import FilterTab from '@/components/units/(main)/Products/client/FilterTab';
import ProductsTab from '@/components/units/(main)/Products/client/ProductsTab';

const Products = () => {
  return (
    <>
      <Header title="전체보기" />
      <ProductAndStoreTabWithCount />
      <FilterTab />
      <ProductsTab />
    </>
  );
};

export default Products;
