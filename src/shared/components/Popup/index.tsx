'use client';

import { ReactNode } from 'react';

interface PopupProps {
  children: ReactNode;
  className?: string;
}

const Popup = ({ children, className = '' }: PopupProps) => (
  <div className={`mx-[16px] w-full rounded-[12px] bg-white ${className}`}>{children}</div>
);

export default Popup;
