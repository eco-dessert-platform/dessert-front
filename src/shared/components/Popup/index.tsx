'use client';

import { ReactNode } from 'react';

interface PopupProps {
  children: ReactNode;
  className?: string;
}

const Popup = ({ children, className = '' }: PopupProps) => (
  <div className={`rounded-[12px] w-full bg-white mx-[16px] ${className}`}>{children}</div>
);

export default Popup;
