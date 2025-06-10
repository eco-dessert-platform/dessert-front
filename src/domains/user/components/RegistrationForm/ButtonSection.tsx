import ButtonNewver from '@/shared/components/ButtonNewver';

const ButtonSection = () => (
  <div className="fixed bottom-0 left-1/2 z-5000 w-full max-w-[600px] -translate-x-1/2 bg-white p-[16px]">
    <ButtonNewver type="submit" size="lg" className="w-full" color="black">
      완료
    </ButtonNewver>
  </div>
);

export default ButtonSection;
