import Button from '@/shared/components/Button';

const ButtonSection = () => (
  <div className="fixed z-[5000] left-1/2 -translate-x-1/2 bottom-0 w-full max-w-[600px] p-[16px] bg-white">
    <Button type="submit" variants="primary-black">
      수정하기
    </Button>
  </div>
);

export default ButtonSection;
