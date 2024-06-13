import { transformDayTag } from '@/domains/product/utils/transfromTag';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import InfoWrapper from '@/domains/product/components/InfoWrapper';
import { IProductDetailType } from '@/domains/product/types/productDetailType';

interface DetailOrderAvailableDaysProps {
  data: IProductDetailType;
}

const DetailOrderAvailableDays = ({ data }: DetailOrderAvailableDaysProps) => {
  const { orderAvailableDays } = data.board;
  let availableDays = Object.keys(orderAvailableDays).filter((day) => orderAvailableDays[day]);
  availableDays = availableDays.map((item) => transformDayTag(item));

  return (
    <PaddingWrapper>
      <InfoWrapper title="주문가능일">
        <div className="flex gap-[4px]">
          {['월', '화', '수', '목', '금', '토', '일'].map((item) => (
            <div
              key={item}
              className={`rounded-full leading-150 w-[24px] h-[24px] text-12 font-normal flex items-center justify-center  ${
                availableDays.includes(item)
                  ? 'text-primaryOrangeRed bg-subColorPink font-medium'
                  : 'text-gray-600 bg-gray-50 '
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </InfoWrapper>
    </PaddingWrapper>
  );
};
export default DetailOrderAvailableDays;
