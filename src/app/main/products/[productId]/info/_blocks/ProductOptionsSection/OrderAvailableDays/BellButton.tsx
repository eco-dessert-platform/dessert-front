import React from 'react';

import BellIcons from '@/shared/components/icons/BellIcon';
import useToggle from '@/shared/hooks/useToggle';

const BellButton = ({ isNotified }: { isNotified: boolean }) => {
  const { isActive, toggle: shake } = useToggle(isNotified);

  return (
    <button
      type="button"
      onClick={shake}
      className={`flex gap-[2px] rounded-[4px] border border-gray-200 p-[6px] ${isActive ? 'bg-gray-900' : 'bg-gray-50'}`}
    >
      <div className={isActive ? 'animate-bell' : ''}>
        {isActive && <BellIcons shape="on-18" />}
      </div>
      <span className={`typo-body-12-medium ${isActive ? 'text-white' : 'text-gray-600'}`}>
        빵켓팅 알림 {isActive ? '중' : '신청'}
      </span>
    </button>
  );
};

export default BellButton;
