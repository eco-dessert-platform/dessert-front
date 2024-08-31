'use client';

import { ShareIcon } from '@/shared/components/icons';
import useToastNewVer from '@/shared/hooks/useToastNewVer';

const ShareButton = () => {
  const { openToast } = useToastNewVer();

  const handleClick = () => {
    if (typeof window.navigator.share !== 'undefined') {
      window.navigator
        .share({
          title: document.title,
          url: window.location.href
        })
        .catch((error: Error) => {
          console.error({ message: error.message });
          openToast({ message: '공유 중 오류가 발생했습니다. 다시 시도해주세요.' });
        });
    } else {
      openToast({ message: '공유가 불가합니다' });
    }
  };

  return (
    <button type="button" aria-label="공유 버튼" onClick={handleClick}>
      <ShareIcon />
    </button>
  );
};

export default ShareButton;
