import Button from '@/shared/components/Button';

const ButtonSection = () => (
  <div className="fixed bottom-0 left-1/2 z-5000 w-full max-w-[600px] -translate-x-1/2 bg-white p-[16px]">
    <Button type="submit" variants="primary-black">
      수정하기
    </Button>
  </div>
);

export default ButtonSection;
