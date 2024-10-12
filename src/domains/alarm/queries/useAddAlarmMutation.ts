import { useMutation, useQueryClient } from '@tanstack/react-query';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import { productQueryKey } from '@/shared/queries/queryKey';
import { alarmQueryKey } from '@/domains/alarm/queries/queryKey';
import alarmService from '@/domains/alarm/queries/service';
import { AlarmType, PushProductType } from '@/domains/alarm/types';
import { ProductOptionResponse } from '@/domains/product/types/productDetailType';
import { ALARM } from '@/domains/alarm/constants';

interface Props {
  pushCategory: AlarmType;
}

interface VariablesType {
  fcmToken: string;
  productOptionId: number;
}

export const useAddAlarmMutation = ({ pushCategory }: Props) => {
  const { openToast } = useToastNewVer();
  const queryClient = useQueryClient();
  const productDetailsQueryKey = productQueryKey.details();
  const alarmListQueryKey = alarmQueryKey.list(pushCategory);

  const mutationFn = async ({ fcmToken, productOptionId }: VariablesType) => {
    await alarmService.addAlarm({ fcmToken, pushCategory, productOptionId });
  };

  const onMutate = async ({ productOptionId }: VariablesType) => {
    await queryClient.cancelQueries({ queryKey: alarmListQueryKey });
    const previousQueryData: Array<PushProductType> | undefined =
      queryClient.getQueryData(alarmListQueryKey);
    queryClient.setQueryData(alarmListQueryKey, (prev: Array<PushProductType>) =>
      prev.map((product) =>
        product.productId === productOptionId ? { ...product, subscribed: true } : product
      )
    );
    return previousQueryData;
  };

  const onSuccess = (_: void, { productOptionId }: VariablesType) => {
    queryClient.setQueriesData(
      {
        queryKey: productDetailsQueryKey,
        predicate: (query) => query.queryKey[3] === 'product-option'
      },
      (prev: ProductOptionResponse | undefined) => {
        const hasTarget = prev?.products.find(
          (productOption) => productOption.id === productOptionId
        );
        if (!prev || !hasTarget) return prev;

        const newProducts = prev.products.map((productOption) =>
          productOption.id === productOptionId
            ? { ...productOption, notified: true }
            : productOption
        );
        return { ...prev, products: newProducts };
      }
    );
    openToast({ message: `${ALARM[pushCategory].name} 알림 신청이 완료됐어요.` });
  };

  const onError = (
    _: Error,
    __: VariablesType,
    previousQueryData: Array<PushProductType> | undefined
  ) => {
    queryClient.setQueryData(alarmListQueryKey, previousQueryData);
    openToast({ message: `${ALARM[pushCategory].name} 알림 신청에 실패했어요.` });
  };

  return useMutation({ mutationFn, onMutate, onSuccess, onError });
};
