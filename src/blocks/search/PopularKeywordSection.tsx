import PopularKeyword from '@/domains/search/components/PopularKeyword';
import searchService from '@/domains/search/queries/service';

const PopularKeywordSection = async () => {
  const popularKeywords = await searchService.getPopularKeywords();

  return (
    <div className="flex flex-col">
      {popularKeywords.map((word, idx) => (
        <PopularKeyword key={word} order={idx + 1} name={word} />
      ))}
    </div>
  );
};

export default PopularKeywordSection;
