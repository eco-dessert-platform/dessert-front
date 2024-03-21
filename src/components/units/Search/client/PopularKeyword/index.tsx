import Link from 'next/link';
import { getPopularKeywords } from '@/components/units/Search/api/getPopularKeywords';

const PopularKeyword = async () => {
  const popularKeywords = await getPopularKeywords();

  return (
    <div className="flex flex-col gap-[16px]">
      {popularKeywords.map((item, i) => (
        <div key={i} className="flex items-center gap-[6px] text-14 leading-150 tracking-tight-2">
          <p className="text-primaryOrangeRed font-bold">{i + 1}</p>
          <Link href={`/search/products?query=${item}`}>
            <p className="text-gray-900 font-normal">{item}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularKeyword;
