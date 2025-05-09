import { motion } from 'framer-motion';
import { cn } from '@/shared/utils/cn';
import { CloseIcon } from '@/shared/components/icons';
import useFullScreenModal from '@/shared/hooks/useFullScreenModal';

interface Props {
  children: React.ReactNode;
  className: string;
}

const FullScreenModal = ({ children, className }: Props) => {
  const { closeFullScreenModal } = useFullScreenModal();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        ease: 'linear',
        duration: 0.2
      }}
      className={cn('relative w-full h-full bg-white', className)}
    >
      <button
        type="button"
        aria-label="close button"
        className="absolute top-[16px] right-[16px] z-[1000]"
        onClick={closeFullScreenModal}
      >
        <CloseIcon shape="black" />
      </button>
      {children}
    </motion.div>
  );
};

export default FullScreenModal;
