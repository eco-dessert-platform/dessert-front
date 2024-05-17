import Header from '@/shared/components/Header';
import ProductAndStoreTabWithCount from '@/domains/product/components/ProductAndStoreTabWithCount';

const MainListLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="전체보기" />
    <ProductAndStoreTabWithCount />
    {children}
  </>
);

export default MainListLayout;
