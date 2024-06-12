import './index.css';

import { ProductType } from '@/domains/product/types/productDetailType';

import BellButton from './BellButton';
import TypeOfDate from './TypeOfDate';
import TypeOfWeek from './TypeOfWeek';

interface Props {
  product: ProductType;
}

const OrderAvailableDays = ({ product }: Props) => {
  const daysComponent = (type: string) => {
    switch (type) {
      case 'WEEK':
        return <TypeOfWeek availableDays={product.orderAvailableWeek} />;
      case 'DATE':
        return <TypeOfDate availableDays={product.orderAvailableDate} />;
      default:
        return null;
    }
  };

  return (
    <div>
      <h2 className="text-gray-500 text-12 leading-150 font-semibold pb-0">주문 가능일</h2>
      <div className="flex justify-between items-center">
        <div className="flex gap-[4px]">{daysComponent(product.orderType)}</div>
        <BellButton isNotified={product.isNotified} />
      </div>
    </div>
  );
};
export default OrderAvailableDays;
