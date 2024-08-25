'use client';

import { ReactNode, useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import getComponentFromChildren from '@/shared/utils/getComponent';
import useToggle from '@/shared/hooks/useToggle';
import DropdownTrigger from './DropdownTrigger';
import DropdownContent from './DropdownContent';
import DropdownItem from './DropdownContent/DropdownItem';

interface Props {
  children?: ReactNode;
  className?: string;
}

const Dropdown = ({ children, className }: Props) => {
  const { isActive: isOpen, toggle, setIsActive } = useToggle();
  const triggerRef = useRef<HTMLDivElement>(null);
  const dropdownTrigger = getComponentFromChildren({ children, target: <DropdownTrigger /> });
  const dropdownContent = getComponentFromChildren({ children, target: <DropdownContent /> });

  useEffect(() => {
    const handleWindowClick = (e: MouseEvent) => {
      const isInsideClick =
        triggerRef.current && e.target instanceof Element && triggerRef.current.contains(e.target);
      if (!isInsideClick) {
        setIsActive(false);
      }
    };

    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  }, [setIsActive]);

  return (
    <div aria-label="dropdown" className={twMerge('relative inline-block', className)}>
      <div aria-hidden="true" role="button" ref={triggerRef} className="w-full" onClick={toggle}>
        {dropdownTrigger}
      </div>
      {isOpen && dropdownContent}
    </div>
  );
};

export default Object.assign(Dropdown, {
  Trigger: DropdownTrigger,
  Content: DropdownContent,
  Item: DropdownItem
});
