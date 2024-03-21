import API from '@/api';

type AutoCompleteSearchTextsType = Array<string>;

export const getAutoCompleteSearchTexts = async (
  keyword: string
): Promise<AutoCompleteSearchTextsType> => {
  if (!keyword) return [];
  const data: { content: AutoCompleteSearchTextsType } = await API.get(
    `/search/auto-keyword?keyword=${keyword}`
  );
  return data.content;
};
