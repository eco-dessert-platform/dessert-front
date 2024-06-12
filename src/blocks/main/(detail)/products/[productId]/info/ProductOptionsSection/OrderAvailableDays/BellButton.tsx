import React from 'react';

import BellIcons from '@/shared/components/icons/BellIcons';
import useShakeAnimation from '@/shared/hooks/useShakeAnimation';

const BellButton = ({ isNotified }: { isNotified: boolean }) => {
  const { isAnimating, shake } = useShakeAnimation(isNotified);

  return (
    <button
      type="button"
      onClick={shake}
      className="p-[6px] flex gap-[2px] border border-gray-200 rounded-[4px]"
    >
      <div className={isAnimating ? 'animate-bell' : ''}>
        <BellIcons shape={isAnimating ? 'on' : 'off'} />
      </div>
      <span className="typo-body-12-medium text-gray-600">
        빵켓팅 알림 {isAnimating ? '신청' : '해제'}
      </span>
    </button>
  );
};

export default BellButton;
