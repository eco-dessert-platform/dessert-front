'use client';

import { useGetAlarmQuery } from '@/domains/alarm/queries/useGetAlarmQuery';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Loading from '@/shared/components/Loading';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import AlarmCard from '@/domains/alarm/components/AlarmCard';
import NoAlarm from '@/domains/alarm/components/NoAlarm';

const BbancketingProductList = () => {
  const {
    data: products,
    isFetching,
    isError
  } = useGetAlarmQuery({ pushCategory: 'bbangcketing' });

  if (isFetching) {
    return <Loading />;
  }
  if (isError) {
    return (
      <SadBbangleBox>
        <p>오류가 발생했어요!</p>
      </SadBbangleBox>
    );
  }
  if (!products || products.length === 0) return <NoAlarm type="bbangcketing" />;

  return (
    <PaddingWrapper className="flex flex-col gap-y-[16px]">
      {products.map((product) => (
        <AlarmCard
          key={product.productId}
          type="bbangcketing"
          data={product}
          onAlarm={() => undefined}
          onDelete={() => undefined}
        />
      ))}
    </PaddingWrapper>
  );
};

export default BbancketingProductList;
