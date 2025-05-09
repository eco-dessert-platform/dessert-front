'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { isLoggedinState } from '@/shared/atoms/login';
import { ERROR_MESSAGE } from '@/shared/constants/error';
import ButtonNewver from '@/shared/components/ButtonNewver';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import PATH from '@/shared/constants/path';

interface Props {
  productId: number;
}

const ReviewCreateButton = ({ productId }: Props) => {
  const isLoggedIn = useRecoilValue(isLoggedinState);
  const { openToast } = useToastNewVer();
  const { push } = useRouter();

  const handleButtonClick = () => {
    if (isLoggedIn) {
      push(PATH.reviewCreate({ productId, progress: 1 }));
      return;
    }
    openToast({
      message: ERROR_MESSAGE.requiredLogin,
      action: (
        <Link className="hover:underline" href={PATH.login}>
          로그인
        </Link>
      )
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
