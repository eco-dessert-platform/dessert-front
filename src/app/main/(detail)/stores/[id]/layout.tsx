import Header from '@/shared/components/Header';

const MainStoreDetailLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="스토어" back />
    {children}
  </>
);

export default MainStoreDetailLayout;
