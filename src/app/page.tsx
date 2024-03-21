import LogoContainer from '@/components/units/Home/client/LogoContainer';
import Banner from '@/components/units/Home/client/Banner';
import Search from '@/components/units/Home/client/Search';
import ServerCategory from '@/components/units/Home/server/ServerCategory';
import ServerProducts from '@/components/units/Home/server/ServerProducts';

export default function Home() {
  return (
    <>
      <LogoContainer />
      <Search />
      <Banner />
      <ServerCategory />
      <ServerProducts />
    </>
  );
}
