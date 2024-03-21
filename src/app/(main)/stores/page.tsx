import Header from '@/components/commons/header/client/Header';
import ProductAndStoreTab from '@/components/commons/tabs/ProductAndStoreTab';
import StoresTab from '@/components/units/(main)/Stores/client/StoresTab';
import { Suspense } from 'react';

const Stores = () => {
  return (
    <>
      <Header title="전체보기" />
      <Suspense>
        <ProductAndStoreTab />
      </Suspense>
      <div className="flex flex-wrap m-auto">
        <StoresTab />
      </div>
    </>
  );
};

export default Stores;
