import Banner from '@/blocks/home/Banner';
import BestProductsSection from '@/blocks/home/BestProductsSection';
import CategorySection from '@/blocks/home/CategorySection';
import HomeLogoSection from '@/blocks/home/HomeLogoSection';
import Search from '@/blocks/home/SearchSection';

const Home = () => (
  <>
    <HomeLogoSection />
    <Search />
    <Banner />
    <CategorySection />
    <BestProductsSection />
  </>
);

export default Home;
