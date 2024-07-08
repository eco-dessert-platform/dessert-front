'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import useModal from '@/shared/hooks/useModal';
import { useAddAlarmMutation } from '@/domains/product/queries/useAddAlarmMutation';
import { useCancelAlarmMutation } from '@/domains/alarm/queries/useCancelAlarmMutation';
import { ProductOptionType } from '@/domains/product/types/productDetailType';
import { transformDayTag } from '@/domains/product/utils/transfromTag';
import { getFcmToken } from '@/domains/alarm/utils/fcmToken';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Modal from '@/shared/components/Modal';
import Checkbox from '@/shared/components/Checkbox';
import ButtonNewver from '@/shared/components/ButtonNewver';

interface Props {
  productOptionId: ProductOptionType['id'];
  orderAvailableWeek: ProductOptionType['orderAvailableWeek'];
}

const WeekAlarmModal = ({ productOptionId, orderAvailableWeek }: Props) => {
  const { openToast } = useToastNewVer();
  const { closeModal } = useModal();
  const { productId } = useParams<{ productId: string }>();
  const [selectedDays, setSelectedDays] = useState<Array<string>>([]);
  const { mutate: addAlarm } = useAddAlarmMutation({
    pushCategory: 'bbangcketing',
    productId: Number(productId),
    productOptionId
  });
  const { mutate: cancelAlarm } = useCancelAlarmMutation({
    pushCategory: 'bbangcketing',
    productId: Number(productId),
    productOptionId
  });

  const handleChange = (dayToChange: string) => {
    const newValue = selectedDays.includes(dayToChange)
      ? selectedDays.filter((day) => day !== dayToChange)
      : [...selectedDays, dayToChange];

    setSelectedDays(newValue);
  };

  const handleApply = async () => {
    try {
      const fcmToken = await getFcmToken();

      const numSelectedDays = selectedDays.length;
      if (numSelectedDays === 0) cancelAlarm();
      if (numSelectedDays > 0) addAlarm({ fcmToken });
    } catch (error) {
      if (!(error instanceof Error)) return;
      openToast({ message: `[알림 신청 실패] ${error.message}` });
    }
    closeModal();
  };

  return (
    <Modal title="요일별 알림 신청">
      <PaddingWrapper className="py-[10px] flex flex-col gap-y-[10px]">
        {Object.entries(orderAvailableWeek).map(([dayEn, isOrderAvailable]) => {
          const dayKr = transformDayTag(dayEn);
          return (
            isOrderAvailable && (
              <Checkbox
                key={dayKr}
                isChecked={selectedDays.includes(dayKr)}
                onChange={() => handleChange(dayKr)}
                className="typo-title-14-regular"
              >
                매주 {dayKr}요일 알림
              </Checkbox>
            )
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
