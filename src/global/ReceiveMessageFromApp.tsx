'use client';

import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { MessageType } from '@/shared/types/message';
import { fcmTokenState } from '@/domains/alarm/atoms';
import { FCM_TYPE } from '@/shared/constants/message';

const ReceiveMessageFromApp = () => {
  const setFcmToken = useSetRecoilState(fcmTokenState);

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      if (typeof event.data !== 'string') return;

      const message = JSON.parse(event.data);
      if (!message.type) throw new Error('메시지 타입이 올바르지 않습니다.');
      const { type, data, error }: MessageType = message;

      if (type === FCM_TYPE.getSucceed || type === FCM_TYPE.getFailed) {
        setFcmToken({ data, error });
      }
    };

    window.addEventListener('message', handleMessage);
    document.addEventListener('message', handleMessage as EventListener);

    return () => {
      window.removeEventListener('message', handleMessage);
      document.removeEventListener('message', handleMessage as EventListener);
    };
  }, [setFcmToken]);

  return null;
};

export default ReceiveMessageFromApp;
