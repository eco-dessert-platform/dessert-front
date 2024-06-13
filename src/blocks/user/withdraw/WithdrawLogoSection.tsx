import { BbangleIcon } from '@/shared/components/icons';

const WithdrawLogoSection = () => (
  <div className="mb-[40px] flex flex-col items-center">
    <div className="flex justify-center items-center w-[80px] h-[80px]">
      <BbangleIcon shape="cry" />
    </div>
    <div className="leading-normal tracking-tight text-center">
      <p className="text-[16px] font-semibold">빵그리의 오븐과 이별인가요?</p>
      <p className="text-[14px] font-normal">
        계정을 삭제하면 내가 찜한 모든 상품들이 사라지게 돼요
      </p>
    </div>
  </div>
);

export default WithdrawLogoSection;
