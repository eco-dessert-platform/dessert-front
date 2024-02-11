import ServerHome from '@/components/units/Search/server/ServerHome';
// import * as API from '@/api';

// async function sendSearchKeyword(keyword: string) {
//     try {
//         console.log(keyword);
//         const response = await fetch(`https://api.bbangle.store/api/v1/search?keyword=${keyword}`, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ keyword })
//         });

//         if (!response.ok) {
//             throw new Error(`Error: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error('Failed to fetch data:', error);
//     }
// }
async function GetAllRecenctKeywords() {
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
}

async function GetAllBestKeywords() {
    try {
        const res = await fetch('https://api.bbangle.store/api/v1/search/best-keyword', {
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
}

const Search = async () => {
    // const data = await sendSearchKeyword('55');
    const recentData = await GetAllRecenctKeywords();
    const bestData = await GetAllBestKeywords();

    // console.log(111 + JSON.stringify(data));

    return <ServerHome recentData={recentData.content} bestData={bestData.content} />;
};

export default Search;
