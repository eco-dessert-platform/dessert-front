import { RECOMMENDATION_PROVIDER_DEFAULT_VALUE } from '@/domains/user/constants/recommendation';
import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import RecommendationFormProvider from '../_blocks/RecommendationFormProvider';
import ButtonSection from './_blocks/ButtonSection';

interface RecommendationCreateLayoutProps {
  children: React.ReactNode;
}

const RecommendationCreateLayout = ({ children }: RecommendationCreateLayoutProps) => (
  <RecommendationFormProvider defaultValues={RECOMMENDATION_PROVIDER_DEFAULT_VALUE}>
    <DefaultLayout
      header={<Header title="맞춤 추천 받기" />}
      main={children}
      footer={<ButtonSection />}
    />
  </RecommendationFormProvider>
);

export default RecommendationCreateLayout;
