import Link from 'next/link';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { BbangleIcon } from '@/shared/components/icons';
import PATH from '@/shared/constants/path';

const HomeLogoSection = () => (
  <PaddingWrapper className="bg-white pb-0">
    <h1>
      <Link href={PATH.home}>
        <BbangleIcon shape="horizontal-name" />
      </Link>
    </h1>
  </PaddingWrapper>
);

export default HomeLogoSection;
