import * as API from '@/api';

interface GetAllNotificationsProps {
  pageParam: number;
}

interface NotificationType {
  id: number;
  title: string;
  createdAt: string;
}

interface AllNotificationsType {
  contents: Array<NotificationType>;
  lastPage: number;
}

const SIZE = 10; // 한 페이지당 보여질 데이터 수

export const getAllNotifications = async ({
  pageParam
}: GetAllNotificationsProps): Promise<AllNotificationsType> => {
  const res = await API.get(`/notice?page=${pageParam}&size=${SIZE}&sort=createdAt,DESC`);
  const data: AllNotificationsType = await res.json();

  return data;
};
