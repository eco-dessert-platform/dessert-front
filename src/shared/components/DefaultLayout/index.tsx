import { ELEMENT_ID } from '@/shared/constants/elementId';
import { ReactNode } from 'react';

interface Props {
  main: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
}

const DefaultLayout = ({ main, header, footer }: Props) => (
  <div className="flex flex-col justify-between h-screen">
    {header && <header>{header}</header>}
    <main className="w-full flex-1 relative overflow-scroll">{main}</main>
    {footer && (
      <footer id={ELEMENT_ID.footer} className="shrink-0 sticky bottom-0">
        {footer}
      </footer>
    )}
  </div>
);

export default DefaultLayout;
