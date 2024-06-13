import Header from '@/shared/components/Header';

const MainDetailLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="상품보기" back />
    {children}
  </>
);

export default MainDetailLayout;
