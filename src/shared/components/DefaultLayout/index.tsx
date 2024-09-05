import { ELEMENT_ID } from '@/shared/constants/elementId';
import { ReactNode } from 'react';

interface Props {
  main: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
}

const DefaultLayout = ({ main, header, footer }: Props) => (
  <>
    {header && <header className="sticky top-0 max-w-[600px] mx-auto">{header}</header>}
    <main className="max-w-[600px] mx-auto relative">{main}</main>
    {footer && (
      <footer
        id={ELEMENT_ID.footer}
        className="max-w-[600px] w-full mx-auto shrink-0 sticky bottom-0"
      >
        {footer}
      </footer>
    )}
  </>
);

export default DefaultLayout;
