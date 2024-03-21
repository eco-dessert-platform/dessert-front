import Header from '@/components/commons/header/client/Header';
import ServerProducts from './ServerProducts';

const ServerStoreDetail = () => {
  return (
    <>
      <Header title="스토어" back={true} />
      <ServerProducts />
    </>
  );
};
export default ServerStoreDetail;
