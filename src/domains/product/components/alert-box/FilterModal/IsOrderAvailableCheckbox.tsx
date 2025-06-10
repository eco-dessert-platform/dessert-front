'use client';

import { useEffect } from 'react';
import { useAtom, useAtomValue } from 'jotai';

import { filterValueAtom, orderAvailableTodayAtom } from '@/domains/product/atoms';
import CheckBox from '@/shared/components/Checkbox';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

const IsOrderAvailableCheckbox = () => {
  const filterValue = useAtomValue(filterValueAtom);
  const [orderAvailableToday, setOrderAvailableToday] = useAtom(orderAvailableTodayAtom);

  useEffect(() => {
    setOrderAvailableToday(filterValue.orderAvailableToday);
  }, [filterValue.orderAvailableToday, setOrderAvailableToday]);

  const handleCheckChange = () => {
    setOrderAvailableToday((prev) => !prev);
  };

  return (
    <PaddingWrapper className="mb-[100px]">
      <CheckBox
        className="typo-title-14-regular text-gray-800"
        isChecked={orderAvailableToday}
        onChange={handleCheckChange}
      >
        주문가능상품만 보기
      </CheckBox>
    </PaddingWrapper>
  );
};

export default IsOrderAvailableCheckbox;
