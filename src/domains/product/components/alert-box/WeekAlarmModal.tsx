'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import useModal from '@/shared/hooks/useModal';
import { useAddAlarmMutation } from '@/domains/product/queries/useAddAlarmMutation';
import { useCancelAlarmMutation } from '@/domains/product/queries/useCancelAlarmMutation';
import useAddAlarmWithFcmToken from '@/domains/alarm/hooks/useAddAlarmWithFcmToken';
import { DayEnType } from '@/domains/product/types/dayType';
import { transformDayToKr } from '@/domains/product/utils/transformDay';
import { transformWeekObjectToArray } from '@/domains/product/utils/transformWeek';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Modal from '@/shared/components/Modal';
import Checkbox from '@/shared/components/Checkbox';
import ButtonNewver from '@/shared/components/ButtonNewver';
import { OrderType } from '../../types/productInfoType';

interface Props {
  id: number;
  orderType: OrderType;
}

const WeekAlarmModal = ({ id: productOptionId, orderType }: Props) => {
  const orderAvailableWeekArr = transformWeekObjectToArray(orderType);
  const appliedOrderWeekArr = orderType && transformWeekObjectToArray(orderType);

  const { closeModal } = useModal();
  const { productId } = useParams<{ productId: string }>();
  const [selectedDays, setSelectedDays] = useState<Array<DayEnType>>(appliedOrderWeekArr || []);
  const { mutate: addAlarm } = useAddAlarmMutation({
    pushCategory: 'bbangcketing',
    productId: Number(productId),
    productOptionId,
    pushType: 'WEEK',
    days: selectedDays
  });
  const { mutate: cancelAlarm } = useCancelAlarmMutation({
    pushCategory: 'bbangcketing',
    productId: Number(productId),
    productOptionId
  });
  const { addAlarmWithFcmToken } = useAddAlarmWithFcmToken({ addAlarm });

  const handleChange = (dayToChange: DayEnType) => {
    const newValue = selectedDays.includes(dayToChange)
      ? selectedDays.filter((day) => day !== dayToChange)
      : [...selectedDays, dayToChange];

    setSelectedDays(newValue);
  };

  const handleApply = async () => {
    const numSelectedDays = selectedDays.length;
    if (numSelectedDays === 0) cancelAlarm();
    else addAlarmWithFcmToken();
    closeModal();
  };

  return (
    <Modal title="요일별 알림 신청">
      <PaddingWrapper className="flex flex-col gap-y-[10px] py-[10px]">
        {orderAvailableWeekArr.map((dayEn) => {
          const dayKr = transformDayToKr(dayEn);
          return (
            <Checkbox
              key={dayEn}
              isChecked={selectedDays.includes(dayEn)}
              onChange={() => handleChange(dayEn)}
              className="typo-title-14-regular"
            >
              매주 {dayKr}요일 알림
            </Checkbox>
          );
        })}
      </PaddingWrapper>
      <PaddingWrapper>
        <ButtonNewver color="black" className="w-full" onClick={handleApply}>
          신청
        </ButtonNewver>
      </PaddingWrapper>
    </Modal>
  );
};

export default WeekAlarmModal;
