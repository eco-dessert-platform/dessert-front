import ModalContainer from './ModalContainer';
import PopupContainer from './PopupContainer';
import ToastContainer from './ToastContainer';
import TooltipContainer from './TooltipContainer';
import FullScreenModalContainer from './FullScreenModalContainer';

const AlertContainer = () => (
  <>
    <ModalContainer />
    <PopupContainer />
    <TooltipContainer />
    <ToastContainer />
    <FullScreenModalContainer />
  </>
);

export default AlertContainer;
