import { useQuery } from '@tanstack/react-query';
import * as API from '@/api';
import { IAllProductsType } from '@/commons/types/allProductsType';

// /search?keyword={}

interface getSearchResultQueryProps {
    boards?: IAllProductsType;
}

const getSearchResultQuery = async (keyword: string): Promise<getSearchResultQueryProps> => {
    const result = await API.get<{ data: getSearchResultQueryProps }>(`/search?keyword=${keyword}`);
    //console.log('11', result.data);
    return result.data;
};

export const useGetSearchResultQuery = (keyword: string) => {
    return useQuery<getSearchResultQueryProps, Error>({
        queryKey: ['searchResult'],
        queryFn: () => getSearchResultQuery(keyword)
    });
};
