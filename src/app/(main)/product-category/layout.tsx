import Header from '@/shared/components/Header';

const CategoryPageLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="카테고리" />
    {children}
  </>
);

export default CategoryPageLayout;
