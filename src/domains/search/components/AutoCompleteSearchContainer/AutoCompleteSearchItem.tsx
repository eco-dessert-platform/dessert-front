import Link from 'next/link';

interface AutoCompleteSearchItemProps {
  text: string;
  keyword: string;
}

const AutoCompleteSearchItem = ({ text, keyword }: AutoCompleteSearchItemProps) => {
  const keywordStartIdx = text.indexOf(keyword);
  const keywordLastIdx = keywordStartIdx + keyword.length - 1;

  const startText = text.slice(0, keywordStartIdx);
  const endText = text.slice(keywordLastIdx + 1);
  const highlightedText = text.slice(keywordStartIdx, keywordLastIdx + 1);

  const noMatched = keywordStartIdx === -1;

  return (
    <Link href={`/search/products?query=${text}`}>
      <div className="typo-title-14-regular border-b border-solid border-gray-100 bg-white p-[16px] text-gray-900">
        {noMatched ? (
          text
        ) : (
          <>
            {startText}
            <span className="text-primary-orange-red">{highlightedText}</span>
            {endText}
          </>
        )}
      </div>
    </Link>
  );
};

export default AutoCompleteSearchItem;
