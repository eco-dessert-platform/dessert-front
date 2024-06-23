'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PATH from '@/shared/constants/path';
import TabButton from '@/shared/components/TabButton';

const BbangketingAndRestockTab = () => {
  const pathname = usePathname();

  const isBbangketingPage = pathname === PATH.bbangketing;
  const isRestockPage = pathname === PATH.restock;

  return (
    <div className="flex">
      <Link className="w-full" href={PATH.bbangketing}>
        <TabButton active={isBbangketingPage}>빵켓팅</TabButton>
      </Link>
      <Link className="w-full" href={PATH.restock}>
        <TabButton active={isRestockPage}>재입고</TabButton>
      </Link>
    </div>
  );
};

export default BbangketingAndRestockTab;
