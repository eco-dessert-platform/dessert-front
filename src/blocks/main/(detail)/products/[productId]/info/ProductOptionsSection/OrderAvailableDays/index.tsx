import './index.css';

import { ProductsType } from '@/domains/product/types/productDetailType';

import BellButton from './BellButton';
import TypeOfDate from './TypeOfDate';
import TypeOfWeek from './TypeOfWeek';

interface Props {
  product: ProductsType;
}

const OrderAvailableDays = ({ product }: Props) => (
  <div>
    <h2 className="text-gray-500 text-12 leading-150 font-semibold pb-0">주문 가능일</h2>
    <div className="flex justify-between items-center">
      <div className="flex gap-[4px]">
        {product.orderType === 'WEEK' && <TypeOfWeek availableDays={product.orderAvailableWeek} />}
        {product.orderType === 'DATE' && <TypeOfDate availableDays={product.orderAvailableDate} />}
      </div>
      <BellButton isNotified={product.isNotified} />
    </div>
  </div>
);
export default OrderAvailableDays;
