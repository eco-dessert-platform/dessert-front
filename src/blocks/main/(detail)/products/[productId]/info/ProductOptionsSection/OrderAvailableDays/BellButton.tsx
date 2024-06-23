import React from 'react';

import BellIcons from '@/shared/components/icons/BellIcon';
import useToggle from '@/shared/hooks/useToggle';

const BellButton = ({ isNotified }: { isNotified: boolean }) => {
  const { isActive, toggle: shake } = useToggle(isNotified);

  return (
    <button
      type="button"
      onClick={shake}
      className="p-[6px] flex gap-[2px] border border-gray-200 rounded-[4px]"
    >
      <div className={isActive ? 'animate-bell' : ''}>
        <BellIcons shape={isActive ? 'on' : 'off'} />
      </div>
      <span className="typo-body-12-medium text-gray-600">
        빵켓팅 알림 {isActive ? '신청' : '해제'}
      </span>
    </button>
  );
};

export default BellButton;
