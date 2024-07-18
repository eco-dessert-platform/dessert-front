import { MessageType } from '@/shared/types/message';

export const sendMessageToApp = (message: MessageType) => {
  window.ReactNativeWebView.postMessage(JSON.stringify(message));
};
