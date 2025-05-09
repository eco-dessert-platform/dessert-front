import { BbangleIcon } from '@/shared/components/icons';

const WithdrawLogoSection = () => (
  <div className="mb-[40px] flex flex-col items-center">
    <div className="flex justify-center items-center w-[80px] h-[80px]">
      <BbangleIcon shape="cry" />
    </div>
    <div className="text-center">
      <p className="typo-title-16-semibold">빵그리의 오븐과 이별인가요?</p>
      <p className="typo-title-14-medium">계정을 삭제하면 내가 찜한 모든 상품들이 사라지게 돼요</p>
    </div>
  </div>
);

export default WithdrawLogoSection;
