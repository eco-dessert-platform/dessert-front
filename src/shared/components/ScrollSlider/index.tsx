import { useEffect, useRef } from 'react';

interface SliderProps {
  children: React.ReactNode;
  className?: string;
}

const ScrollSlider = ({ children, className }: SliderProps) => {
  const slideRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const slide = slideRef.current;
    if (!slide) return;

    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        slide.scrollLeft += e.deltaY;
      }
    };

    slide.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      slide.removeEventListener('wheel', handleWheel);
    };
  }, []);

  return (
    <div ref={slideRef} className={className}>
      {children}
    </div>
  );
};

export default ScrollSlider;
