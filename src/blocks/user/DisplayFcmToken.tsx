'use client';

import { useRef, useEffect } from 'react';
import { useAtom } from 'jotai';
import useWebview from '@/shared/hooks/useWebView';
import { fcmTokenAtom } from '@/domains/alarm/atoms';
import { sendMessageToApp } from '@/shared/utils/sendMessageToApp';
import { FCM_TYPE } from '@/shared/constants/message';

import usePopup from '@/shared/hooks/usePopup';
import Popup from '@/shared/components/Popup';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import ButtonNewver from '@/shared/components/ButtonNewver';

const DisplayFcmToken = () => {
  const { openPopup, closePopup } = usePopup();
  const { isWebView } = useWebview();
  const [fcmToken] = useAtom(fcmTokenAtom);
  const countClicked = useRef(0);

  useEffect(() => {
    if (!fcmToken.data && !fcmToken.error) return;
    openPopup(
      <Popup>
        <PaddingWrapper>
          <h5 className="typo-title-16-semibold mb-[16px] text-center">fcmToken 값</h5>
          <p className="typo-title-14-regular mb-[16px] break-all">
            {fcmToken.data}
            {fcmToken.error && `fcmToken 값을 가져오지 못했습니다.\n${fcmToken.error}`}
          </p>
          <ButtonNewver color="black" className="w-full" onClick={closePopup}>
            확인
          </ButtonNewver>
        </PaddingWrapper>
      </Popup>
    );
  }, [fcmToken, openPopup, closePopup]);

  const handleClick = () => {
    countClicked.current += 1;
    const isMultipleOf10 = countClicked.current % 10 === 0;
    if (isMultipleOf10 && isWebView) {
      sendMessageToApp({ type: FCM_TYPE.getFcmToken });
    }
  };

  return (
    <div
      className="z-header absolute top-0 left-0 h-full w-full"
      aria-hidden="true"
      onClick={handleClick}
    />
  );
};

export default DisplayFcmToken;
