'use client';

import { useParams } from 'next/navigation';
import useModal from '@/shared/hooks/useModal';
import usePopup from '@/shared/hooks/usePopup';
import useWebView from '@/shared/hooks/useWebView';
import { useAddAlarmMutation } from '@/domains/product/queries/useAddAlarmMutation';
import { useCancelAlarmMutation } from '@/domains/product/queries/useCancelAlarmMutation';
import { ORDER_TYPE } from '@/domains/product/constants/orderType';
import { AlarmType } from '@/domains/alarm/types';
import useCheckLogin from '@/domains/product/hooks/useCheckLogin';
import WeekAlarmModal from '@/domains/product/components/alert-box/WeekAlarmModal';
import DateAlarmModal from '@/domains/product/components/alert-box/DateAlarmModal';
import AlarmButton from '@/domains/alarm/components/common/AlarmButton';
import MobileAppPopup from '@/domains/alarm/components/alert-box/MobileAppPopup';
import AddAlarmPopup from '@/domains/alarm/components/alert-box/AddAlarmPopup';
import CancelAlarmPopup from '@/domains/alarm/components/alert-box/CancelAlarmPopup';
import { ProductType } from '@/domains/product/types/productInfoType';
import TypeOfDate from './TypeOfDate';
import TypeOfWeek from './TypeOfWeek';

interface Props {
  product: ProductType;
}

const OrderAvailableDays = ({ product }: Props) => {
  const { id: productOptionId, orderType, isSoldout, isBbangketting: notified } = product;
  const isWeek = orderType.orderType === 'WEEK';
  const isDate = orderType.orderType === 'DATE';

  const { openModal } = useModal();
  const { openPopup } = usePopup();
  const { productId } = useParams<{ productId: string }>();
  const { isWebView } = useWebView();
  const { checkLogin } = useCheckLogin();
  const mutationProps = {
    pushCategory: (isSoldout ? 'restock' : 'bbangcketing') as AlarmType,
    productId: Number(productId),
    productOptionId
  };
  const { mutate: addAlarm } = useAddAlarmMutation(mutationProps);
  const { mutate: cancelAlarm } = useCancelAlarmMutation(mutationProps);

  const handleRestockBtnClick = () => {
    if (!isWebView) {
      openPopup(<MobileAppPopup type="restock" />);
      return;
    }

    const isLoggedIn = checkLogin();
    if (!isLoggedIn) return;

    if (notified) {
      openPopup(<CancelAlarmPopup type="restock" cancelAlarm={cancelAlarm} />);
    } else {
      openPopup(
        <AddAlarmPopup type="restock" addAlarm={({ fcmToken }) => addAlarm({ fcmToken })} />
      );
    }
  };

  const handleBbangcketingBtnClick = () => {
    if (!isWebView) {
      openPopup(<MobileAppPopup type="bbangcketing" />);
      return;
    }

    const isLoggedIn = checkLogin();
    if (!isLoggedIn) return;

    if (isWeek) {
      openModal(<WeekAlarmModal id={productOptionId} orderType={orderType} />);
    } else if (isDate) {
      openModal(<DateAlarmModal product={product} notified={false} />);
    }
  };

  return (
    <div>
      <h2 className="text-12 pb-0 leading-150 font-semibold text-gray-500">
        주문 가능 {ORDER_TYPE[orderType.orderType]}
      </h2>
      <div className="flex items-center justify-between">
        <div className="flex gap-[4px]">
          {isWeek && <TypeOfWeek availableDays={product.orderType} />}
          {isDate && (
            <TypeOfDate
              availableDays={{
                startDate: orderType.orderStartDate,
                endDate: orderType.orderEndDate
              }}
            />
          )}
        </div>
        <AlarmButton
          type={isSoldout ? 'restock' : 'bbangcketing'}
          isAlarming={notified}
          onClick={isSoldout ? handleRestockBtnClick : handleBbangcketingBtnClick}
          disabled={isDate && new Date(orderType.orderStartDate ?? 0) <= new Date()}
          className="max-w-max"
        />
      </div>
    </div>
  );
};
export default OrderAvailableDays;
