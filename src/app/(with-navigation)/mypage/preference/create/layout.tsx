import Header from '@/shared/components/Header';

interface PreferenceCreateLayoutProps {
  children: React.ReactNode;
}

const PreferenceCreateLayout = ({ children }: PreferenceCreateLayoutProps) => (
  <>
    <Header title="맞춤 추천 받기" />
    {children}
  </>
);

export default PreferenceCreateLayout;
