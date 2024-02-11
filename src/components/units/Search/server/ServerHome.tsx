import ResultContainer from '../client/ResultContainer';
import { ISearchType } from '../types';

interface recentDataProp {
    recentData: ISearchType[];
    bestData: ISearchType[];
}
const ServerHome = async ({ recentData, bestData }: recentDataProp) => {
    return (
        <>
            <ResultContainer recentData={recentData} bestData={bestData} />
        </>
    );
};
export default ServerHome;
