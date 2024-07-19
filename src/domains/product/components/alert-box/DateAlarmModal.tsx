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
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Modal from '@/shared/components/Modal';
import Checkbox from '@/shared/components/Checkbox';
import ButtonNewver from '@/shared/components/ButtonNewver';

interface Props {
  productOptionId: ProductOptionType['id'];
  productOptionName: ProductOptionType['title'];
  orderAvailableDate: ProductOptionType['orderAvailableDate'];
  isNotified: ProductOptionType['isNotified'];
}

const DateAlarmModal = ({
  productOptionId,
  productOptionName,
  orderAvailableDate: { startDate },
  isNotified
}: Props) => {
  const { openToast } = useToastNewVer();
  const { closeModal } = useModal();
  const { productId } = useParams<{ productId: string }>();
  const fcmToken = useRecoilValue(fcmTokenState);
  const [isSelected, setIsSelected] = useState(isNotified);
  const { mutate: addAlarm } = useAddAlarmMutation({
    pushCategory: 'bbangcketing',
    productId: Number(productId),
    productOptionId,
    pushType: 'DATE'
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

  const handleChange = () => {
    setIsSelected(!isSelected);
  };

  const handleApply = async () => {
    if (isNotified !== isSelected) {
      if (isSelected) {
        if (!fcmToken.data && !fcmToken.error) sendMessageToApp({ type: FCM_TOKEN.getFcmToken });
        else if (fcmToken.data) addAlarm({ fcmToken: fcmToken.data });
        else openToast({ message: `[알림 신청 실패] ${fcmToken.error}` });
      } else cancelAlarm();
    }
    closeModal();
  };

  const date = new Date(startDate).toLocaleDateString('ko-KR', {
    month: 'numeric',
    day: 'numeric',
    weekday: 'short'
  });
  const time = new Date(startDate).toLocaleTimeString('en-US', {
    hour: 'numeric'
  });

  return (
    <Modal title="날짜별 알림 신청">
      <PaddingWrapper className="py-[10px]">
        <Checkbox
          isChecked={isSelected}
          onChange={handleChange}
          className="typo-title-14-regular"
        >{`${productOptionName} ${date} ${time} 입고`}</Checkbox>
      </PaddingWrapper>
      <PaddingWrapper>
        <ButtonNewver color="black" className="w-full" onClick={handleApply}>
          신청
        </ButtonNewver>
      </PaddingWrapper>
    </Modal>
  );
};

export default DateAlarmModal;
