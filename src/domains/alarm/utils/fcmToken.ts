import { getMessaging, getToken } from 'firebase/messaging';
import firebaseApp from '@/domains/alarm/utils/firebase';

export const getFcmToken = async () => {
  if (!(typeof window !== 'undefined' && 'PushManager' in window && 'serviceWorker' in navigator))
    throw new Error('푸시 알림이 불가합니다.');

  const messaging = getMessaging(firebaseApp);
  const permission = await Notification.requestPermission();

  if (permission === 'granted') {
    const currentToken = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY
    });
    return currentToken;
  }
  throw new Error('설정에서 알림 권한을 허용해주세요.');
};
