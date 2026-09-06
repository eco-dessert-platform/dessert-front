import Link from 'next/link';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { BbangleIcon, CartIcon } from '@/shared/components/icons';
import PATH from '@/shared/constants/path';

const CartButton = () => (
  <button
    type="button"
    aria-label="장바구니로 이동"
    title="장바구니"
    className="flex size-[44px] cursor-pointer items-center justify-center text-black"
  >
    <CartIcon />
  </button>
);

const HomeLogoSection = () => (
  <PaddingWrapper className="flex items-center justify-between bg-white pb-0">
    <h1>
      <Link href={PATH.home}>
        <BbangleIcon shape="horizontal-name" />
      </Link>
    </h1>
    <CartButton />
  </PaddingWrapper>
);

export default HomeLogoSection;
