import Header from '@/components/commons/header/client/Header';
import WishDetail from '../client/WishDetail';

interface ServerHomeProps {
  folderId: number;
}

const ServerHome = async ({ folderId }: ServerHomeProps) => {
  return (
    <>
      <Header title="찜 상세" back />
      <WishDetail folderId={folderId} />
    </>
  );
};

export default ServerHome;
