import Popup from '@/components/commons/Popup';
import Button from '@/components/commons/button/client/Button';
import Input from '@/components/commons/inputs/Input';

const BirthdayPopup = () => {
  return (
    <Popup className="p-[16px] flex flex-col gap-[26px]">
      <Input label="생년월일 8자를 입력해주세요." />
      <div className="flex gap-[10px]">
        <Button variants="primary-white" onClick={() => {}}>
          취소
        </Button>
        <Button variants="primary-black" onClick={() => {}}>
          확인
        </Button>
      </div>
    </Popup>
  );
};

export default BirthdayPopup;