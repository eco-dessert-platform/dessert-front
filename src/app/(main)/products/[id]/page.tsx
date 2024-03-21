import DetailHome from '@/components/units/Detail/server/DetailHome';
import API from '@/api';
import { IProductDetailType } from '@/components/units/Detail/types';

async function getDetail(params: { id: string }) {
  const data: IProductDetailType = await API.get(`/boards/${params.id}`);
  return data;
}

const ProductDetail = async ({ params }: { params: { id: string } }) => {
  const data = await getDetail(params);
  return <DetailHome data={data} />;
};

export default ProductDetail;
