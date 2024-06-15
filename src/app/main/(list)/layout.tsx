import Header from '@/shared/components/Header';
import ProductAndStoreTab from '@/shared/components/ProductAndStoreTab';
import { Suspense } from 'react';

const MainListLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="전체보기" />
    <Suspense>
      <ProductAndStoreTab defaultPath="/main" />
    </Suspense>
    {children}
  </>
);

export default MainListLayout;
