import { atom } from 'recoil';
import Footer from '@/global/Footer';

export const fixedBottomState = atom<React.ReactNode>({
  key: 'fixedBottomState',
  default: <Footer />
});
