import HomeLogoSection from '@/blocks/home/HomeLogoSection';
import Banner from '@/blocks/home/Banner';
import Search from '@/blocks/home/SearchSection';
import CategorySection from '@/blocks/home/CategorySection';
import BestProductsSection from '@/blocks/home/BestProductsSection';
import RecommendationSection from '@/blocks/home/RecommendationSection';
import TopButton from '@/shared/components/TopButton';

const Home = () => (
    <>
      <HomeLogoSection />
      <Search />
      <Banner />
      <CategorySection />
      <RecommendationSection />
      <BestProductsSection />
      <TopButton />
    </>
  );

export default Home;
