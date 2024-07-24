import Link from 'next/link';

import XX from '@/domains/search/assets/xx.svg';

interface RecentKeywordProps {
  title: string;
  onClick?: () => void;
}

const RecentKeyword = ({ title, onClick }: RecentKeywordProps) => (
  <div className="flex items-center justify-center gap-[4px] pl-[12px] pr-[8px] py-[8px] min-w-max bg-white border border-solid border-gray-200 rounded-[50px]">
    <Link href={`/search/products?query=${title}`} className="typo-body-12-medium text-gray-700">
      {title}
    </Link>
    <button type="button" onClick={onClick} aria-label="delete button">
      <XX />
    </button>
  </div>
);

export default RecentKeyword;
