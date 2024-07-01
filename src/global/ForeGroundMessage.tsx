'use client';

import { useEffect } from 'react';
import { getMessaging, onMessage } from 'firebase/messaging';
import firebaseApp from '@/domains/alarm/utils/firebase';

const ForeGroundMessage = () => {
  useEffect(() => {
    if (!(typeof window !== 'undefined' && 'PushManager' in window && 'serviceWorker' in navigator))
      return undefined;

    const messaging = getMessaging(firebaseApp);
    const unsubscribe = onMessage(messaging, (payload) => {
      const notificationTitle = payload.notification?.title || '';
      const notificationOptions = {
        body: payload.notification?.body || ''
      };
      const notification = new Notification(notificationTitle, notificationOptions);

      notification.onclick = (e) => {
        e.preventDefault();
        notification.close();
      };
    });

    return unsubscribe;
  }, []);

  return null;
};

export default ForeGroundMessage;
