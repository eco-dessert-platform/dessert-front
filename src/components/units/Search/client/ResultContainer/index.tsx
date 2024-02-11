'use client';

import { useEffect, useState } from 'react';
import ServerPopularKeyword from '../../server/ServerPopularKeyword';
import ServerRecentKeyword from '../../server/ServerRecentKeyword';
import SearchResult from '../SearchResult';
import { useGetSearchResultQuery } from '../../hooks/useGetSearchResultQuery';
import SearchInput from '@/components/commons/inputs/SearchInput';
import Back from '@/components/commons/header/assets/back_arrow.svg';
import { ISearchType } from '../../types';
import { useAddSearchKeywordQuery } from '../../hooks/useAddSearchKeyword';

interface recentDataProp {
    recentData: ISearchType[];
    bestData: ISearchType[];
}

const ResultContainer = ({ recentData, bestData }: recentDataProp) => {
    console.log('recentData:', recentData);

    const [keyword, setKeyword] = useState<string>('');
    const { data, refetch } = useGetSearchResultQuery(keyword);
    const save = useAddSearchKeywordQuery();

    console.log('검색결과', JSON.stringify(data?.boards));
    console.log('검색 결과', JSON.stringify(save.mutate(keyword)));

    const goBackHandler = () => {
        window.history.back();
    };

    useEffect(() => {
        refetch();
        save.mutate(keyword);
        console.log(keyword);
    }, [keyword, refetch, save]);

    return (
        <>
            <div className="w-[92%] m-auto flex items-center gap-[17px]">
                <div onClick={goBackHandler}>
                    <Back />
                </div>
                <SearchInput placeholder="궁금한 상품을 찾아보세요!" onEnter={setKeyword} />
            </div>

            {keyword ? (
                <SearchResult
                    resultProducts={data?.boards}
                    resultStores={data?.stores}
                    refetch={refetch}
                />
            ) : (
                <>
                    <ServerRecentKeyword recentKeywordList={recentData} />
                    <ServerPopularKeyword bestKeywordList={bestData} />
                </>
            )}
        </>
    );
};
export default ResultContainer;
