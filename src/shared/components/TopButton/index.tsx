'use client';

import ArrowIcons from '@/shared/components/icons/ArrowIcons';

const TopButton = () => {
  const handleClick = () => {
    const mainEl = document.getElementById('main');
    if (!mainEl) return;
    mainEl.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      aria-label="top button"
      className="fixed z-bottomButton bottom-[104px] right-[16px] sm:right-[calc(50%-300px+16px)] w-[46px] h-[46px] flex-center rounded-full bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.16)]"
      onClick={handleClick}
    >
      <ArrowIcons shape="top" />
    </button>
  );
};

export default TopButton;
