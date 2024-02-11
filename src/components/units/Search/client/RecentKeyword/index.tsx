'use client';

import { useEffect, useState } from 'react';
import XX from './assets/xx.svg';
import { ISearchType } from '../../types';

// const RECENT: string[] = [
//     'example1',
//     'example2',
//     'example3',
//     'example4',
//     'example5',
//     'example6',
//     'example7',
//     'example8',
//     'example9',
//     'example10'
// ];

interface RecentChipProps {
    title: string;
    onClick?: () => void;
}

interface recentDataProp {
    recentKeywordList: ISearchType[];
}

function RecentChip({ title, onClick }: RecentChipProps) {
    return (
        <p className="text-xs font-medium font-Pretendard leading-[18px] text-zinc-600 flex items-center justify-center gap-[4px]">
            {title}
            <button onClick={onClick}>
                <XX />
            </button>
        </p>
    );
}

const RecentKeyword = ({ recentKeywordList }: recentDataProp) => {
    const [recentItems, setRecentItems] = useState<ISearchType[]>([]);

    useEffect(() => {
        console.log(recentKeywordList);
    }, [recentKeywordList]);

    const handleDelete = async (keyword: string) => {
        console.log(keyword);
        try {
            const res = await fetch(
                `https://api.bbangle.store/api/v1/search/recency?keyword=${keyword}`,
                {
                    method: 'DELETE',

                    headers: {
                        'Content-Type': 'application/json',
                        Authorization:
                            'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwNzIyMTU4MywiZXhwIjoxNzA3MjMyMzgzLCJpZCI6N30._2pvXtot-wT4_62kPcBk-8NxFYBFhuiiSFg1LEPmwqo'
                    }
                }
            );
            const data = await res.json();
            // setRecentItems(items => items.filter(item => item.keyword !== itemToDelete));
            return data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };
    const GetAllRecenctKeywords = async () => {
        try {
            const res = await fetch('https://api.bbangle.store/api/v1/search/recency', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization:
                        'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJiYmFuZ2xlYmJhbmdsZSIsImlhdCI6MTcwNzIyMTU4MywiZXhwIjoxNzA3MjMyMzgzLCJpZCI6N30._2pvXtot-wT4_62kPcBk-8NxFYBFhuiiSFg1LEPmwqo'
                }
            });
            const data = await res.json();
            return data;
        } catch (err) {
            console.log(err);
            return [];
        }
    };

    useEffect(() => {
        (async () => {
            const recentData = await GetAllRecenctKeywords();
            setRecentItems(recentData.content);
        })();
    }, [recentItems]);

    return (
        <>
            <div className="w-full relative">
                <div className="flex gap-[8px] w-92% overflow-x-scroll scrollbar-hide">
                    {recentItems?.map((item: ISearchType, index: number) => (
                        <span
                            key={index}
                            className="h-34px flex-shrink-0 px-3 py-2 bg-white border border-solid border-gray-200  gap-1 inline-flex rounded-[50px] "
                        >
                            <RecentChip
                                title={item.keyword}
                                onClick={() => handleDelete(item.keyword)}
                            />
                        </span>
                    ))}
                </div>
            </div>
        </>
    );
};

export default RecentKeyword;
