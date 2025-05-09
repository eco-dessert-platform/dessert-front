'use client';

import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';
import usePopup from '@/shared/hooks/usePopup';
import useAddAlarmWithFcmToken from '@/domains/alarm/hooks/useAddAlarmWithFcmToken';
import Popup from '@/shared/components/Popup';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';

interface Props {
  type: AlarmType;
  addAlarm: ({ fcmToken }: { fcmToken: string }) => void;
}

const AddAlarmPopup = ({ type, addAlarm }: Props) => {
  const { closePopup } = usePopup();
  const { addAlarmWithFcmToken } = useAddAlarmWithFcmToken({ addAlarm });

  const handleApply = async () => {
    addAlarmWithFcmToken();
    closePopup();
  };

  return (
    <Popup>
      <PaddingWrapper className="text-center typo-title-16-medium">
        {ALARM[type].name} 알림
      </PaddingWrapper>
      <PaddingWrapper className="text-center typo-title-14-regular">
        {ALARM[type].name} 알림을 신청할까요?
        <br />
        빵이 {type === 'restock' && '재'}입고되는 즉시, 푸시 알림이 가요!
      </PaddingWrapper>
      <PaddingWrapper className="flex justify-around gap-x-[10px] py-[10px]">
        <ButtonNewver
          color="border-white"
          size="md"
          radius="round"
          className="flex-1"
          onClick={closePopup}
        >
          취소
        </ButtonNewver>
        <ButtonNewver
          color="black"
          size="md"
          radius="round"
          className="flex-1"
          onClick={handleApply}
        >
          신청
        </ButtonNewver>
      </PaddingWrapper>
    </Popup>
  );
};

export default AddAlarmPopup;
