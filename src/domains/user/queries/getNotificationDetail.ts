import fetchExtend from '@/shared/utils/api';
import QUERY_KEY from '@/shared/constants/queryKey';

interface NotificationType {
  title: string;
  content: string;
  createdAt: string;
}

const getNotificationDetail = async (id: number) => {
  const res = await fetchExtend.get(`/notice/${id}`, {
    next: { tags: [`${QUERY_KEY.notification}:${id}`] }
  });
  if (!res.ok) throw new Error('공지사항 조회 실패');
  const data: NotificationType = await res.json();
  return data;
};

export default getNotificationDetail;
