import Header from '@/shared/components/Header';

interface PreferenceUpdateLayoutProps {
  children: React.ReactNode;
}

const PreferenceUpdateLayout = ({ children }: PreferenceUpdateLayoutProps) => (
  <>
    <Header title="맞춤 추천 수정하기" back />
    {children}
  </>
);

export default PreferenceUpdateLayout;
