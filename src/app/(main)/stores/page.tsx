import Header from '@/components/commons/header/client/Header';
import ProductAndStoreTabWithCount from '@/components/units/(main)/client/ProductAndStoreTabWithCount';
import StoresTab from '@/components/units/(main)/Stores/client/StoresTab';

const Stores = () => {
  return (
    <>
      <Header title="전체보기" />
      <ProductAndStoreTabWithCount />
      <StoresTab />
    </>
  );
};

export default Stores;
