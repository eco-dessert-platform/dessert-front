import XX from '@/domains/search/assets/xx.svg';
import Link from 'next/link';

interface RecentKeywordProps {
  title: string;
  onClick?: () => void;
}

const RecentKeyword = ({ title, onClick }: RecentKeywordProps) => {
  return (
    <div className="flex items-center justify-center gap-[4px] pl-[12px] pr-[8px] py-[8px] min-w-max bg-white border border-solid border-gray-200 rounded-[50px]">
      <Link
        href={`/search/products?query=${title}`}
        className="text-12 font-medium leading-150 tracking-tight-2"
      >
        {title}
      </Link>
      <button onClick={onClick}>
        <XX />
      </button>
    </div>
  );
};

export default RecentKeyword;
