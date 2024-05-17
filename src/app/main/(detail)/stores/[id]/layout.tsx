import Header from '@/shared/components/Header';

const MainDetailLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="스토어" back />
    {children}
  </>
);

export default MainDetailLayout;
