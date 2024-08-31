import { ELEMENT_ID } from '@/shared/constants/elementId';
import { ReactNode } from 'react';

interface Props {
  main: ReactNode;
  footer?: ReactNode;
}

const DefaultLayout = ({ main, footer }: Props) => (
  <div className="flex flex-col justify-between h-screen">
    <main id={ELEMENT_ID.main} className="w-full flex-1 relative overflow-scroll">
      {main}
    </main>
    <footer className="shrink-0 sticky bottom-0">{footer}</footer>
  </div>
);

export default DefaultLayout;
