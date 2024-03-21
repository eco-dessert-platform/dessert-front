'use client';

import { useParams } from 'next/navigation';
import { useGetStoreDetialQuery } from '../../hooks/useGetStoreDetailQuery';
import StoreProfile from '../StoreProfile';
import AllProducts from '../AllProduct';
import BestProducts from '../BestProduct';
import Loading from '@/components/commons/Loading';
import { useGetStoreDetialAllQuery } from '../../hooks/useGetStoreDetailAllQuery';
import StoreDetailSection from './StoreDetailSection';

const DetailContainer = () => {
  const params = useParams();
  const { data } = useGetStoreDetialQuery(Number(params.id));
  const { data: allData } = useGetStoreDetialAllQuery(Number(params.id));

  if (!data) {
    return (
      <div className="w-[92%] mx-atuo p-[16px]">
        <Loading />
      </div>
    );
  }
  return (
    <div className="w-full">
      <div className="border-b-4 w-full mx-auto pb-[16px] border-solid border-gray-100">
        <StoreProfile data={data} />
      </div>
      <div className="w-full border-b border-solid border-gray-100 py-[16px]">
        <StoreDetailSection title="인기상품">
          <BestProducts data={data} />
        </StoreDetailSection>
      </div>
      <StoreDetailSection title="전체상품" className="py-[16px]">
        <AllProducts data={allData} />
      </StoreDetailSection>
    </div>
  );
};
export default DetailContainer;
