import PopularKeyword from '../client/PopularKeyword';
import { ISearchType } from '../types';

interface bestDataProp {
    bestKeywordList: ISearchType[];
}

const ServerPopularKeyword = ({ bestKeywordList }: bestDataProp) => {
    return (
        <>
            <div className="w-[92%] m-auto  py-[16px]">
                <div className="text-neutral-400 text-sm font-semibold mb-[10px]">인기 검색어</div>
                <PopularKeyword bestKeywordList={bestKeywordList} />
            </div>
        </>
    );
};

export default ServerPopularKeyword;
