'use client';

import { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { useParams } from 'next/navigation';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import useModal from '@/shared/hooks/useModal';
import { sendMessageToApp } from '@/shared/utils/sendMessageToApp';
import { FCM_TOKEN } from '@/domains/alarm/constants/fcmTokenMessageType';
import { fcmTokenState } from '@/domains/alarm/atoms';
import { useAddAlarmMutation } from '@/domains/product/queries/useAddAlarmMutation';
import { useCancelAlarmMutation } from '@/domains/product/queries/useCancelAlarmMutation';
import { ProductOptionType } from '@/domains/product/types/productDetailType';
import { DayEnType } from '@/domains/product/types/dayType';
import { transformDayTag } from '@/domains/product/utils/transfromTag';
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
  const fcmToken = useRecoilValue(fcmTokenState);
  const [selectedDays, setSelectedDays] = useState<Array<DayEnType>>([]);
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

  useEffect(() => {
    if (fcmToken.data) addAlarm({ fcmToken: fcmToken.data });
    else openToast({ message: `[알림 신청 실패] ${fcmToken.error}` });
  }, [fcmToken, addAlarm, openToast]);

  const handleChange = (dayToChange: DayEnType) => {
    const newValue = selectedDays.includes(dayToChange)
      ? selectedDays.filter((day) => day !== dayToChange)
      : [...selectedDays, dayToChange];

    setSelectedDays(newValue);
  };

  const handleApply = async () => {
    const numSelectedDays = selectedDays.length;
    if (numSelectedDays === 0) cancelAlarm();
    if (numSelectedDays > 0) {
      if (!fcmToken.data && !fcmToken.error) sendMessageToApp({ type: FCM_TOKEN.getFcmToken });
      else if (fcmToken.data) addAlarm({ fcmToken: fcmToken.data });
      else openToast({ message: `[알림 신청 실패] ${fcmToken.error}` });
    }
    closeModal();
  };

  return (
    <Modal title="요일별 알림 신청">
      <PaddingWrapper className="py-[10px] flex flex-col gap-y-[10px]">
        {Object.entries(orderAvailableWeek).map(([day, isOrderAvailable]) => {
          const dayEn = day as DayEnType;
          const dayKr = transformDayTag(dayEn);
          return (
            isOrderAvailable && (
              <Checkbox
                key={dayEn}
                isChecked={selectedDays.includes(dayEn)}
                onChange={() => handleChange(dayEn)}
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
