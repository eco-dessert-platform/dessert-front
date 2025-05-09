import { AlarmType } from '@/domains/alarm/types';

export const alarmQueryKey = {
  all: ['alarm'],
  lists: () => [...alarmQueryKey.all, 'list'],
  list: (type: AlarmType) => [...alarmQueryKey.lists(), { type }]
};
