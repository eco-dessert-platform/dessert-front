import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { productQueryKey } from '@/shared/queries/queryKey';
import { alarmQueryKey } from '@/domains/alarm/queries/queryKey';
import { ProductOptionResponse } from '@/domains/product/types/productDetailType';
import alarmService from '@/domains/alarm/queries/service';
import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';

interface Props {
  pushCategory: AlarmType;
  productId: number;
  productOptionId: number;
}

export const useAddAlarmMutation = ({ pushCategory, productId, productOptionId }: Props) => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();
  const productOptionQueryKey = productQueryKey.detail(Number(productId), 'product-option');
  const alarmListQueryKey = alarmQueryKey.list(pushCategory);

  const mutationFn = async ({ fcmToken }: { fcmToken: string }) => {
    await alarmService.addAlarm({ fcmToken, pushCategory, productOptionId });
  };

  const onMutate = async () => {
    // TODO: useGetProductOptionQuery 훅의 queryKey로 접근해 이 product의 isNotified, (요일인 경우) 선택한 요일 변경
    await queryClient.cancelQueries({ queryKey: productOptionQueryKey });
    const previousQueryData: ProductOptionResponse | undefined =
      queryClient.getQueryData(productOptionQueryKey);
    queryClient.setQueryData(productOptionQueryKey, (prev: ProductOptionResponse) => {
      const newProducts = prev.products.map((productOption) =>
        productOption.id === productOptionId
          ? { ...productOption, isNotified: true }
          : productOption
      );
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
