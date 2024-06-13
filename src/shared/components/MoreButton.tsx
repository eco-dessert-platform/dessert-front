import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface MoreButtonProps {
  isMore: boolean;
  onClick: () => void;
}

const MoreButton = ({ isMore, onClick }: MoreButtonProps) => {
  const handleClick = () => {
    if (isMore) {
      window.scrollTo({
        top: 420,
        behavior: 'smooth'
      });
      setTimeout(() => {
        onClick();
      }, 200);
    } else {
      window.scrollTo({
        top: 600,
        behavior: 'smooth'
      });
      setTimeout(() => {
        onClick();
      }, 200);
    }
  };
  return (
    <PaddingWrapper className="flex w-full pt-[30px] px-[16px] absolute  bottom-0 bg-gradient-to-t from-white via-[80.75%] via-white to-white/0 to-[116.09%]">
      <button
        type="button"
        className="text-center text-gray-600 text-12 py-[13px] font-medium w-full border border-solid border-gray-200 rounded-[8px]"
        onClick={handleClick}
      >
        {!isMore ? '더보기' : '숨기기'}
      </button>
    </PaddingWrapper>
  );
};

export default MoreButton;
