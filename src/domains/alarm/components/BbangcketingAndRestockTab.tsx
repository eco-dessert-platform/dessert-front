'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PATH from '@/shared/constants/path';
import TabButton from '@/shared/components/TabButton';

const BbangcketingAndRestockTab = () => {
  const pathname = usePathname();

  const isBbangcketingPage = pathname === PATH.bbangcketing;
  const isRestockPage = pathname === PATH.restock;

  return (
    <div className="flex">
      <Link className="w-full" href={PATH.bbangcketing}>
        <TabButton active={isBbangcketingPage}>빵켓팅</TabButton>
      </Link>
      <Link className="w-full" href={PATH.restock}>
        <TabButton active={isRestockPage}>재입고</TabButton>
      </Link>
    </div>
  );
};

export default BbangcketingAndRestockTab;
