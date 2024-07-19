import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { sendMessageToApp } from '@/shared/utils/sendMessageToApp';
import { FCM_TOKEN } from '@/domains/alarm/constants/fcmTokenMessageType';
import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';
import { fcmTokenState } from '@/domains/alarm/atoms';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import usePopup from '@/shared/hooks/usePopup';
import Popup from '@/shared/components/Popup';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';

interface Props {
  type: AlarmType;
  addAlarm: ({ fcmToken }: { fcmToken: string }) => void;
}

const AddAlarmPopup = ({ type, addAlarm }: Props) => {
  const { openToast } = useToastNewVer();
  const { closePopup } = usePopup();
  const fcmToken = useRecoilValue(fcmTokenState);

  useEffect(() => {
    if (fcmToken.data) addAlarm({ fcmToken: fcmToken.data });
    else openToast({ message: `[알림 신청 실패] ${fcmToken.error}` });
  }, [fcmToken, addAlarm, openToast]);

  const handleApply = async () => {
    if (!fcmToken.data && !fcmToken.error) sendMessageToApp({ type: FCM_TOKEN.getFcmToken });
    else if (fcmToken.data) addAlarm({ fcmToken: fcmToken.data });
    else openToast({ message: `[알림 신청 실패] ${fcmToken.error}` });
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
