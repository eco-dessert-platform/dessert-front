import { useMutation } from '@tanstack/react-query';
import * as API from '@/api';

interface PutSearchKeywordReturn {
    message: string;
}

const putSearchKeywordQuery = async (keyword: string): Promise<PutSearchKeywordReturn> => {
    return API.post<PutSearchKeywordReturn, string>(`/search?keyword=${keyword}`, keyword);
};

export const useAddSearchKeywordQuery = () => {
    return useMutation({
        mutationKey: ['keywordAdd'],
        mutationFn: putSearchKeywordQuery
    });
};
