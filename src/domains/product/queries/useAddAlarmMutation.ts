import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { productQueryKey } from '@/shared/queries/queryKey';
import { alarmQueryKey } from '@/domains/alarm/queries/queryKey';
import { ProductOptionResponse, OrderType } from '@/domains/product/types/productDetailType';
import { DayEnType } from '@/domains/product/types/dayType';
import alarmService from '@/domains/alarm/queries/service';
import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';
import { transformWeekArrayToObject } from '@/domains/product/utils/transformWeek';

interface Props {
  pushCategory: AlarmType;
  productId: number;
  productOptionId: number;
  pushType?: OrderType;
  days?: Array<DayEnType>;
}

export const useAddAlarmMutation = ({
  pushCategory,
  productId,
  productOptionId,
  pushType,
  days
}: Props) => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();
  const productOptionQueryKey = productQueryKey.detail(Number(productId), 'product-option');
  const alarmListQueryKey = alarmQueryKey.list(pushCategory);

  const mutationFn = async ({ fcmToken }: { fcmToken: string }) => {
    await alarmService.addAlarm({ fcmToken, pushCategory, productOptionId, pushType, days });
  };

  const onMutate = async () => {
    await queryClient.cancelQueries({ queryKey: productOptionQueryKey });
    const previousQueryData: ProductOptionResponse | undefined =
      queryClient.getQueryData(productOptionQueryKey);
    queryClient.setQueryData(productOptionQueryKey, (prev: ProductOptionResponse) => {
      const newProducts = prev.products.map((productOption) => {
        if (productOption.id === productOptionId) {
          if (pushType === 'WEEK' && days)
            return {
              ...productOption,
              isNotified: true,
              appliedOrderWeek: transformWeekArrayToObject(days)
            };
          if (pushType === 'DATE') return { ...productOption, isNotified: true };
        }
        return productOption;
      });
      return { ...prev, products: newProducts };
    });
    return previousQueryData;
  };

  const onSuccess = () => {
    queryClient.invalidateQueries({ queryKey: alarmListQueryKey });
    openToast({ message: `${ALARM[pushCategory].name} 알림 신청이 완료됐어요.` });
  };

  const onError = (
    _: Error,
    __: { fcmToken: string },
    previousQueryData: ProductOptionResponse | undefined
  ) => {
    queryClient.setQueryData(productOptionQueryKey, previousQueryData);
    openToast({ message: `${ALARM[pushCategory].name} 알림 신청에 실패했어요.` });
  };

  return useMutation({ mutationFn, onMutate, onSuccess, onError });
};
