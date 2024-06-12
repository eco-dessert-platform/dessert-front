import Header from '@/shared/components/Header';
import ProductAndStoreTab from '@/shared/components/ProductAndStoreTab';

const MainListLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="전체보기" />
    <ProductAndStoreTab defaultPath="/main" />
    {children}
  </>
);

export default MainListLayout;
