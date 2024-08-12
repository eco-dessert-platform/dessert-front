'use client';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { MessageType } from '@/shared/types/message';
import { FCM_TOKEN } from '@/domains/alarm/constants/fcmTokenMessageType';
import { fcmTokenState } from '@/domains/alarm/atoms';

const ReceiveMessageFromApp = () => {
  const setFcmToken = useSetRecoilState(fcmTokenState);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data !== 'string') return;
      const message = JSON.parse(event.data);
      if (!message.type) throw new Error('메시지 타입이 올바르지 않습니다.');
      const { type, data, error }: MessageType = message;

      if (type === FCM_TOKEN.getSucceed || type === FCM_TOKEN.getFailed) {
        setFcmToken({ data, error });
      }
    };

    window.addEventListener('message', handleMessage);
    document.addEventListener('message', handleMessage as EventListener);

    return () => {
      window.removeEventListener('message', handleMessage);
      document.addEventListener('message', handleMessage as EventListener);
    };
  }, [setFcmToken]);

  return null;
};

export default ReceiveMessageFromApp;
