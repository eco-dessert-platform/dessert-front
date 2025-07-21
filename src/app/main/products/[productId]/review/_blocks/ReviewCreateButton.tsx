'use client';

import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';
import { isLoggedinAtom } from '@/shared/atoms/login';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import ButtonNewver from '@/shared/components/ButtonNewver';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import PATH from '@/shared/constants/path';
import RequiredLoginToast from '@/shared/components/RequiredLoginToast';

interface Props {
  productId: number;
}

const ReviewCreateButton = ({ productId }: Props) => {
  const [isLoggedIn] = useAtom(isLoggedinAtom);
  const { openToast } = useToastNewVer();
  const { push } = useRouter();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      push(PATH.reviewCreate({ productId, progress: 1 }));
      return;
    }
    openToast({
      message: ERROR_MESSAGE.requiredLogin,
      action: <RequiredLoginToast />
    });
  };

  return (
    <ButtonNewver
      color="border-primary"
      className="w-full"
      size="md"
      radius="round"
      onClick={handleButtonClick}
    >
      리뷰 작성
    </ButtonNewver>
  );
};

export default ReviewCreateButton;
