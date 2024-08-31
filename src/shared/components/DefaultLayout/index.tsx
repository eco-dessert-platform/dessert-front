import ToastContainer from '@/global/AlertContainer/ToastContainer';
import { ReactNode } from 'react';

interface Props {
  main: ReactNode;
  footer?: ReactNode;
}

const DefaultLayout = ({ main, footer }: Props) => (
  <div className="flex flex-col justify-between h-screen">
    <main className="w-full relative overflow-scroll">
      {main}
      <ToastContainer />
    </main>
    <footer className="shrink-0 sticky bottom-0">{footer}</footer>
  </div>
);

export default DefaultLayout;
