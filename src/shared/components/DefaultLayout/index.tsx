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
    <div className="min-h-screen">
      {header && (
        <header className="z-header sticky top-0 mx-auto w-full max-w-[600px]">{header}</header>
      )}
      <main
        id={ELEMENT_ID.main}
        style={{
          paddingBottom: footerHeight || 0
        }}
        className="relative mx-auto min-h-screen w-full max-w-[600px] flex-1 shadow-lg"
      >
        {main}
      </main>
      {footer && (
        <footer
          ref={footerRef}
          id={ELEMENT_ID.footer}
          className="z-footer fixed bottom-0 left-1/2 mx-auto w-full max-w-[600px] -translate-x-1/2 bg-white"
        >
          {footer}
        </footer>
      )}
    </div>
  );
};

export default DefaultLayout;
