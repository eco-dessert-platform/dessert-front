import ButtonNewver from '@/shared/components/ButtonNewver';

const ButtonSection = () => (
  <div className="fixed z-[5000] left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[600px] p-[16px] bg-white">
    <ButtonNewver type="submit" size="lg" className="w-full" color="black">
      완료
    </ButtonNewver>
  </div>
);

export default ButtonSection;
