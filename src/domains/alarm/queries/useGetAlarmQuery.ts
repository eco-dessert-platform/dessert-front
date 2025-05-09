import { useQuery } from '@tanstack/react-query';
import { alarmQueryKey } from '@/domains/alarm/queries/queryKey';
import alarmService from '@/domains/alarm/queries/service';
import { AlarmType } from '@/domains/alarm/types';

interface Props {
  pushCategory: AlarmType;
}

export const useGetAlarmQuery = ({ pushCategory }: Props) => {
  const queryKey = alarmQueryKey.list(pushCategory);

  const queryFn = async () => {
    const data = await alarmService.getAlarm({ pushCategory });
    return data;
  };

  return useQuery({ queryKey, queryFn });
};
