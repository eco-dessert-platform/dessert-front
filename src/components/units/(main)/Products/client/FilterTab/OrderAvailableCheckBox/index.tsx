'use client';

import { useRecoilState } from 'recoil';
import { filterValueState } from '@/components/units/(main)/Products/atoms';
import CheckBox from '@/components/commons/checkbox/client/Checkbox';

const OrderAvailableCheckBox = () => {
  const [filterValue, setFilterValue] = useRecoilState(filterValueState);
  const isChecked = filterValue.showProductsAvailableOrder;

  const handleCheckChange = () => {
    setFilterValue({ ...filterValue, showProductsAvailableOrder: !isChecked });
  };

  return (
    <CheckBox isChecked={isChecked} onChange={handleCheckChange}>
      <p className="text-gray-800">주문 가능 상품만 보기</p>
    </CheckBox>
  );
};

export default OrderAvailableCheckBox;
