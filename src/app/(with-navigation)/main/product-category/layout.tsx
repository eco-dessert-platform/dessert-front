import { getStaticMetadata } from '@/shared/utils/metadata';
import Header from '@/shared/components/Header';

export const metadata = getStaticMetadata('product-category');

const CategoryPageLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="카테고리" />
    {children}
  </>
);

export default CategoryPageLayout;
