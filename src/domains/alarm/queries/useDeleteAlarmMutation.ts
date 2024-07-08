import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import alarmService from '@/domains/alarm/queries/service';
import { alarmQueryKey } from '@/domains/alarm/queries/queryKey';
import { ALARM } from '@/domains/alarm/constants';
import { AlarmType, PushProductType } from '@/domains/alarm/types';

interface Props {
  pushCategory: AlarmType;
  productOptionId: number;
}

export const useDeleteAlarmMutation = ({ pushCategory, productOptionId }: Props) => {
  const queryClient = useQueryClient();
  const queryKey = alarmQueryKey.list(pushCategory);
  const { openToast } = useToastNewVer();

  const mutationFn = async () => {
    await alarmService.deleteAlarm({ pushCategory, productOptionId });
  };

  const onMutate = async () => {
    await queryClient.cancelQueries({ queryKey });
    const previousQueryData: Array<PushProductType> | undefined =
      queryClient.getQueryData(queryKey);
    queryClient.setQueryData(queryKey, (prev: Array<PushProductType>) =>
      prev.filter((product) => product.productId !== productOptionId)
    );
    return previousQueryData;
  };

  const onSuccess = () => {
    openToast({ message: `${ALARM[pushCategory].name} 알림이 삭제됐어요.` });
  };

  const onError = (_: Error, __: void, previousQueryData: Array<PushProductType> | undefined) => {
    queryClient.setQueryData(queryKey, previousQueryData);
    openToast({ message: `${ALARM[pushCategory].name} 알림 삭제에 실패했어요.` });
  };

  return useMutation({ mutationFn, onMutate, onSuccess, onError });
};
