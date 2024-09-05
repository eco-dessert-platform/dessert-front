import { ELEMENT_ID } from '@/shared/constants/elementId';
import { ReactNode } from 'react';

interface Props {
  main: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
}

const DefaultLayout = ({ main, header, footer }: Props) => (
  <div className="flex flex-col min-h-screen w-full">
    {header && (
      <header className="sticky top-0 max-w-[600px] w-full mx-auto z-header">{header}</header>
    )}
    <main className="max-w-[600px] w-full mx-auto relative flex-1">{main}</main>
    {footer && (
      <footer
        id={ELEMENT_ID.footer}
        className="max-w-[600px] w-full mx-auto shrink-0 sticky bottom-0 z-footer"
      >
        {footer}
      </footer>
    )}
  </div>
);

export default DefaultLayout;
