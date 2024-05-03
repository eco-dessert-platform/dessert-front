import Header from '@/shared/components/Header';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Header title="맞춤 추천 받기" />
    {children}
  </>
);

export default Layout;
