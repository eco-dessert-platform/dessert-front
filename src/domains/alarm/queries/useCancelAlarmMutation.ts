import { useMutation, useQueryClient } from '@tanstack/react-query';
import { productQueryKey } from '@/shared/queries/queryKey';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { ProductOptionResponse } from '@/domains/product/types/productDetailType';
import alarmService from '@/domains/alarm/queries/service';
import { ALARM } from '@/domains/alarm/constants';
import { AlarmType } from '@/domains/alarm/types';

interface Props {
  pushCategory: AlarmType;
  productId: number;
  productOptionId: number;
}

export const useCancelAlarmMutation = ({ pushCategory, productId, productOptionId }: Props) => {
  const queryClient = useQueryClient();
  const queryKey = productQueryKey.detail(Number(productId), 'product-option');
  const { openToast } = useToastNewVer();

  const mutationFn = async () => {
    await alarmService.cancelAlarm({ pushCategory, productOptionId });
  };

  const onMutate = async () => {
    // TODO: useGetProductOptionQuery 훅의 queryKey로 접근해 이 product의 isNotified, (요일인 경우) 선택한 요일 변경
    await queryClient.cancelQueries({ queryKey });
    const previousQueryData: ProductOptionResponse | undefined = queryClient.getQueryData(queryKey);
    queryClient.setQueryData(queryKey, (prev: ProductOptionResponse) => {
      const newProducts = prev.products.map((productOption) =>
        productOption.id === productOptionId
          ? { ...productOption, isNotified: false }
          : productOption
      );
      return { ...prev, products: newProducts };
    });
    return previousQueryData;
  };

  const onSuccess = () => {
    // TODO: useGetAlarmMutation 훅의 queryKey로 접근해 invalidate
    openToast({ message: `${ALARM[pushCategory].name} 알림이 해제됐어요.` });
  };

  const onError = (_: Error, __: void, previousQueryData: ProductOptionResponse | undefined) => {
    // TODO: useGetProductOptionQuery 훅의 queryKey로 접근해 이 product의 isNotified, (요일인 경우) 선택한 요일 다시 변경
    queryClient.setQueryData(queryKey, previousQueryData);
    openToast({ message: `${ALARM[pushCategory].name} 알림 해제에 실패했어요.` });
  };

  return useMutation({ mutationFn, onMutate, onSuccess, onError });
};
