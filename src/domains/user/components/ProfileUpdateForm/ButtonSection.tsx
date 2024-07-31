import ButtonNewver from '@/shared/components/ButtonNewver';
import FixedBottom from '@/shared/components/FixedBottom';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

const ButtonSection = () => (
  <FixedBottom>
    <PaddingWrapper className="bg-white">
      <ButtonNewver type="submit" color="black" className="w-full">
        수정하기
      </ButtonNewver>
    </PaddingWrapper>
  </FixedBottom>
);

export default ButtonSection;
