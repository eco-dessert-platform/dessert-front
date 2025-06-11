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
    <PaddingWrapper className="absolute bottom-0 flex w-full bg-linear-to-t from-white via-white via-[80.75%] to-white/0 to-[116.09%] px-[16px] pt-[30px]">
      <button
        type="button"
        className="typo-body-12-medium w-full rounded-[8px] border border-solid border-gray-200 py-[13px] text-center text-gray-600"
        onClick={handleClick}
      >
        {!isMore ? '더보기' : '숨기기'}
      </button>
    </PaddingWrapper>
  );
};

export default MoreButton;
