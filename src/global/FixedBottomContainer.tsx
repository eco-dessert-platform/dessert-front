'use client';

import { useRecoilValue } from 'recoil';
import { fixedBottomState } from '@/shared/atoms/fixedBottom';

const FixedBottomContainer = () => {
  const fixedBottom = useRecoilValue(fixedBottomState);

  return (
    <div id="fixed-bottom-container" className="sticky bottom-0 w-full z-fixedBottom">
      {fixedBottom}
    </div>
  );
};

export default FixedBottomContainer;
