import Link from 'next/link';

interface PopularKeywordProps {
  order: number;
  name: string;
}

const PopularKeyword = ({ order, name }: PopularKeywordProps) => (
  <Link href={`/search/products?query=${name}`} className="flex items-center gap-[6px] py-[8px]">
    <p className="text-primary-orange-red typo-title-14-bold">{order}</p>
    <p className="typo-title-14-regular text-gray-900">{name}</p>
  </Link>
);

export default PopularKeyword;
