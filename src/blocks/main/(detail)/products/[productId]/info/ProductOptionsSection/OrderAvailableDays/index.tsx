import './index.css';

import { ProductOptionType } from '@/domains/product/types/productDetailType';

import BellButton from './BellButton';
import TypeOfDate from './TypeOfDate';
import TypeOfWeek from './TypeOfWeek';

interface Props {
  orderType: ProductOptionType['orderType'];
  orderAvailableWeek: ProductOptionType['orderAvailableWeek'];
  orderAvailableDate: ProductOptionType['orderAvailableDate'];
  isNotified: ProductOptionType['isNotified'];
}

const OrderAvailableDays = ({
  orderType,
  orderAvailableWeek,
  orderAvailableDate,
  isNotified
}: Props) => (
  <div>
    <h2 className="text-gray-500 text-12 leading-150 font-semibold pb-0">주문 가능일</h2>
    <div className="flex justify-between items-center">
      <div className="flex gap-[4px]">
        {orderType === 'WEEK' && <TypeOfWeek availableDays={orderAvailableWeek} />}
        {orderType === 'DATE' && <TypeOfDate availableDays={orderAvailableDate} />}
      </div>
      <BellButton isNotified={isNotified} />
    </div>
  </div>
);
export default OrderAvailableDays;
