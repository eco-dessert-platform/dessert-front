import Header from '@/shared/components/Header';
import { ShareIcon } from '@/shared/components/icons';
import getProductDetail from '@/domains/product/queries/getProductDetail';

interface ReviewListPageProps {
  params: { productId: string };
}

const ReviewListPage = async ({ params: { productId } }: ReviewListPageProps) => {
  const {
    board: { title: boardName },
    store: { storeName }
  } = await getProductDetail(productId);

  return (
    <>
      <Header
        title={`[${storeName}] ${boardName}`}
        content={
          <button type="button" aria-label="공유 버튼">
            <ShareIcon />
          </button>
        }
        back
      />
      리뷰 목록 페이지
    </>
  );
};

export default ReviewListPage;
