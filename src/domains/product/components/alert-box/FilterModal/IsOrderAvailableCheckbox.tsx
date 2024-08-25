import { useEffect } from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import { filterValueState, orderAvailableTodayTempState } from '@/domains/product/atoms';
import { FilterFamilyIDType } from '@/domains/product/types/filterType';
import CheckBox from '@/shared/components/Checkbox';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface OrderAvailableCheckBoxProps {
  filterFamilyId: FilterFamilyIDType;
}

const IsOrderAvailableCheckbox = ({ filterFamilyId }: OrderAvailableCheckBoxProps) => {
  const filterValue = useRecoilValue(filterValueState(filterFamilyId));
  const [orderAvailableToday, setOrderAvailableToday] = useRecoilState(
    orderAvailableTodayTempState(filterFamilyId)
  );

  useEffect(() => {
    setOrderAvailableToday(filterValue.orderAvailableToday);
  }, [filterValue, setOrderAvailableToday]);

  const handleCheckChange = () => {
    setOrderAvailableToday((prev) => !prev);
  };

  return (
    <PaddingWrapper>
      <CheckBox
        className="text-gray-800 typo-title-14-regular"
        isChecked={orderAvailableToday}
        onChange={handleCheckChange}
      >
        주문가능상품만 보기
      </CheckBox>
    </PaddingWrapper>
  );
};

export default IsOrderAvailableCheckbox;
