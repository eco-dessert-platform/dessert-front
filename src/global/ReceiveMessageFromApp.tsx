'use client';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { MessageType } from '@/shared/types/message';
import { FCM_TOKEN } from '@/domains/alarm/constants/fcmTokenMessageType';
import { fcmTokenState } from '@/domains/alarm/atoms';
import { APP } from '@/shared/constants/appMessageType';
import { appState } from '@/shared/atoms/app';

const ReceiveMessageFromApp = () => {
  const setFcmToken = useSetRecoilState(fcmTokenState);
  const setApp = useSetRecoilState(appState);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data !== 'string') return;
      const message = JSON.parse(event.data);
      if (!message.type) throw new Error('메시지 타입이 올바르지 않습니다.');
      const { type, data, error }: MessageType = message;

      if (type === FCM_TOKEN.getSucceed || type === FCM_TOKEN.getFailed) {
        setFcmToken({ data, error });
      }
      if (type === APP.isWebviewApp) {
        setApp({ isWebviewApp: true });
      }
    };

    window.addEventListener('message', handleMessage);
    document.addEventListener('message', handleMessage as EventListener);

    return () => {
      window.removeEventListener('message', handleMessage);
      document.addEventListener('message', handleMessage as EventListener);
    };
  }, [setFcmToken, setApp]);

  return null;
};

export default ReceiveMessageFromApp;
