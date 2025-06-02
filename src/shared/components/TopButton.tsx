'use client';

import { useState, useEffect } from 'react';
import { ELEMENT_ID } from '@/shared/constants/elementId';
import { cn } from '@/shared/utils/cn';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';

const DISTANCE_FROM_FOOTER = 16;

const TopButton = () => {
  const [scrolled, setScrolled] = useState(false);
  const [translateY, setTranslateY] = useState(0);

  useEffect(() => {
    const footer = document.getElementById(ELEMENT_ID.footer);
    if (!footer) return;

    const observer = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.target === footer) {
          setTranslateY(-footer.clientHeight - DISTANCE_FROM_FOOTER);
        }
      });
    });

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) setScrolled(true);
      else setScrolled(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      type="button"
      aria-label="top button"
      className={cn(
        'fixed z-top-button bottom-0 right-[16px] sm:right-[calc(50%-300px+16px)] w-[46px] h-[46px] flex-center rounded-full bg-white shadow-[0_0_4px_0_rgba(0,0,0,0.16)] invisible',
        scrolled && translateY !== 0 && 'visible'
      )}
      style={{
        transform: `translateY(${translateY}px)`
      }}
      onClick={handleClick}
    >
      <ArrowIcons shape="top" />
    </button>
  );
};

export default TopButton;
