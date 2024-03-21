import API from '@/api';
import { REAVALIDATE_TAG } from '@/commons/constants/revalidateTags';

interface NotificationType {
  title: string;
  content: string;
  createdAt: string;
}

export const fetchNotificationDetail = async (id: number): Promise<NotificationType> => {
  const data: NotificationType = await API.get(`/notice/${id}`, {
    next: { tags: [`${REAVALIDATE_TAG.notificationDetail}:${id}`] }
  });

  return data;
};
