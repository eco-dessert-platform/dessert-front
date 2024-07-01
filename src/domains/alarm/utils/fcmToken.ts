import { getMessaging, getToken } from 'firebase/messaging';
import firebaseApp from '@/domains/alarm/utils/firebase';

export const getFcmToken = async () => {
  if (!(typeof window !== 'undefined' && 'PushManager' in window && 'serviceWorker' in navigator))
    return null;

  const messaging = getMessaging(firebaseApp);
  const permission = await Notification.requestPermission();

  if (permission === 'granted') {
    const currentToken = await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_FIREBASE_VAPID_KEY
    });
    return currentToken;
  }
  return null;
};
