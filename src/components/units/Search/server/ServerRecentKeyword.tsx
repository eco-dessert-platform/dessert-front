import RecentKeyword from '../client/RecentKeyword';
import { ISearchType } from '../types';

interface recentDataProp {
    recentKeywordList: ISearchType[];
}

const ServerRecentKeyword = ({ recentKeywordList }: recentDataProp) => {
    return (
        <div className="w-[92%] m-auto  py-[16px]">
            <div className="text-neutral-400 text-sm font-semibold mb-[10px]">최근 검색어</div>
            <RecentKeyword recentKeywordList={recentKeywordList} />
        </div>
    );
};

export default ServerRecentKeyword;
