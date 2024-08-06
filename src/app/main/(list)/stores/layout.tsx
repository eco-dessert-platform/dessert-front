import Header from '@/shared/components/Header';

const MainListLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="전체보기" />
    {children}
  </>
);

export default MainListLayout;
