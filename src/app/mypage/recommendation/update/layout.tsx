import userService from '@/domains/user/queries/service';
import DefaultLayout from '@/shared/components/DefaultLayout';
import Header from '@/shared/components/Header';
import RecommendationFormProvider from '../_blocks/RecommendationFormProvider';
import ButtonSection from './_blocks/ButtonSection';

interface RecommendationUpdateLayoutProps {
  children: React.ReactNode;
}

const RecommendationUpdateLayout = async ({ children }: RecommendationUpdateLayoutProps) => {
  const [recommendationStep1, recommendationStep2] = await Promise.all([
    userService.getRecommendationStep1(),
    userService.getRecommendationStep2()
  ]);

  return (
    <RecommendationFormProvider
      defaultValues={{ step1: recommendationStep1, step2: recommendationStep2 }}
    >
      <DefaultLayout
        header={<Header title="맞춤 추천 수정하기" back />}
        main={children}
        footer={<ButtonSection />}
      />
    </RecommendationFormProvider>
  );
};

export default RecommendationUpdateLayout;
