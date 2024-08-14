import Link from 'next/link';
import { CloseIcon } from '@/shared/components/icons';

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
      <CloseIcon shape="no-bg-16" />
    </button>
  </div>
);

export default RecentKeyword;
