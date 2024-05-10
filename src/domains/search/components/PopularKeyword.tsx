import Link from 'next/link';

interface PopularKeywordProps {
  order: number;
  name: string;
}

const PopularKeyword = ({ order, name }: PopularKeywordProps) => (
  <div className="flex items-center gap-[6px]">
    <p className="text-primaryOrangeRed typo-title-14-bold">{order}</p>
    <Link href={`/search/products?query=${name}`} className="text-gray-900 typo-title-14-regular">
      {name}
    </Link>
  </div>
);

export default PopularKeyword;
