import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import useWebView from '@/shared/hooks/useWebView';
import { sendMessageToApp } from '@/shared/utils/sendMessageToApp';
import { FCM_TOKEN } from '@/domains/alarm/constants/fcmTokenMessageType';
import { fcmTokenState } from '@/domains/alarm/atoms';

interface Props {
  addAlarm: ({ fcmToken }: { fcmToken: string }) => void;
}

const useAddAlarmWithFcmToken = ({ addAlarm }: Props) => {
  const { openToast } = useToastNewVer();
  const fcmToken = useRecoilValue(fcmTokenState);
  const { isWebView } = useWebView();

  useEffect(() => {
    if (isWebView && !fcmToken.data && !fcmToken.error)
      sendMessageToApp({ type: FCM_TOKEN.getFcmToken });
  }, [isWebView, fcmToken.data, fcmToken.error]);

  const addAlarmWithFcmToken = () => {
    if (!fcmToken.data && !fcmToken.error)
      openToast({ message: '[알림 신청 실패] fcmToken을 가져오는 데 실패했습니다.' });
    else if (fcmToken.data) addAlarm({ fcmToken: fcmToken.data });
    else openToast({ message: `[알림 신청 실패] ${fcmToken.error}` });
  };

  return { addAlarmWithFcmToken };
};

export default useAddAlarmWithFcmToken;
