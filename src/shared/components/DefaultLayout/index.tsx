'use client';

import { ELEMENT_ID } from '@/shared/constants/elementId';
import { ReactNode, useLayoutEffect, useRef, useState } from 'react';

interface Props {
  main: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
}

const DefaultLayout = ({ main, header, footer }: Props) => {
  const [footerHeight, setFooterHeight] = useState<number>();
  const footerRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!footerRef.current) return;
    setFooterHeight(footerRef.current.clientHeight);
  }, [footerRef.current?.clientHeight]);

  return (
    <>
      {header && (
        <header className="sticky max-w-[600px] top-0 w-full mx-auto z-header">{header}</header>
      )}
      <main
        id={ELEMENT_ID.main}
        style={{
          paddingBottom: footerHeight || 0
        }}
        className="max-w-[600px]  w-full min-h-screen shadow-lg mx-auto relative flex-1"
      >
        {main}
      </main>
      {footer && (
        <footer
          ref={footerRef}
          id={ELEMENT_ID.footer}
          className="max-w-[600px] w-full mx-auto  fixed left-1/2 -translate-x-1/2 bottom-0 z-footer bg-white"
        >
          {footer}
        </footer>
      )}
    </>
  );
};

export default DefaultLayout;
