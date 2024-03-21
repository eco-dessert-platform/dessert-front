import API from '@/api';

const isLoggedIn = true; // 일단 로그인했다고 가정

export const deleteRecentSearchKeyword = async (keyword: string) => {
  if (!isLoggedIn) return;
  const data = await API.delete(`/search/recency?keyword=${keyword}`);
  return data;
};
