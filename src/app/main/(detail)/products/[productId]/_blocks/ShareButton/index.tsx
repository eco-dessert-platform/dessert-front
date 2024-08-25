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
        .catch((error: Error) => openToast({ message: error.message }));
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
