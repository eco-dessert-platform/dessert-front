'use client';

import { useState } from 'react';
import { useParams } from 'next/navigation';
import useModal from '@/shared/hooks/useModal';
import { useAddAlarmMutation } from '@/domains/product/queries/useAddAlarmMutation';
import { useCancelAlarmMutation } from '@/domains/product/queries/useCancelAlarmMutation';
import useAddAlarmWithFcmToken from '@/domains/alarm/hooks/useAddAlarmWithFcmToken';
import { DateProductOptionType } from '@/domains/product/types/productDetailType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Modal from '@/shared/components/Modal';
import Checkbox from '@/shared/components/Checkbox';
import ButtonNewver from '@/shared/components/ButtonNewver';

interface Props {
  product: DateProductOptionType;
}

const DateAlarmModal = ({
  product: {
    id: productOptionId,
    title: productOptionName,
    orderAvailableDate: { startDate },
    isNotified
  }
}: Props) => {
  const { closeModal } = useModal();
  const { productId } = useParams<{ productId: string }>();
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
  const { addAlarmWithFcmToken } = useAddAlarmWithFcmToken({ addAlarm });

  const handleChange = () => {
    setIsSelected(!isSelected);
  };

  const handleApply = async () => {
    if (isNotified !== isSelected) {
      if (isSelected) addAlarmWithFcmToken();
      else cancelAlarm();
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
