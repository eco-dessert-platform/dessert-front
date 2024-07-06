'use client';

import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { isLoggedinState } from '@/shared/atoms/login';
import PATH from '@/shared/constants/path';
import useToastNewVer from '@/shared/hooks/useToastNewVer';
import useModal from '@/shared/hooks/useModal';
import usePopup from '@/shared/hooks/usePopup';
import { ProductOptionType } from '@/domains/product/types/productDetailType';
import { ORDER_TYPE } from '@/domains/product/constants/orderType';
import WeekAlarmModal from '@/domains/product/components/alert-box/WeekAlarmModal';
import DateAlarmModal from '@/domains/product/components/alert-box/DateAlarmModal';
import AlarmButton from '@/domains/alarm/components/common/AlarmButton';
import AddAlarmPopup from '@/domains/alarm/components/alert-box/AddAlarmPopup';
import CancelAlarmPopup from '@/domains/alarm/components/alert-box/CancelAlarmPopup';
import TypeOfDate from './TypeOfDate';
import TypeOfWeek from './TypeOfWeek';

interface Props {
  productOptionId: ProductOptionType['id'];
  productOptionName: ProductOptionType['title'];
  orderType: ProductOptionType['orderType'];
  orderAvailableWeek: ProductOptionType['orderAvailableWeek'];
  orderAvailableDate: ProductOptionType['orderAvailableDate'];
  isNotified: ProductOptionType['isNotified'];
  soldout: ProductOptionType['soldout'];
}

const OrderAvailableDays = ({
  productOptionId,
  productOptionName,
  orderType,
  orderAvailableWeek,
  orderAvailableDate,
  isNotified,
  soldout
}: Props) => {
  const { push } = useRouter();
  const { openToast } = useToastNewVer();
  const { openModal } = useModal();
  const { openPopup } = usePopup();
  const isLoggedIn = useRecoilValue(isLoggedinState);

  const handleRestockBtnClick = () => {
    if (!isLoggedIn) {
      openToast({ message: '알림 신청을 하려면 먼저 로그인해주세요.' });
      push(PATH.login);
      return;
    }

    if (isNotified) {
      openPopup(<CancelAlarmPopup type="restock" productOptionId={productOptionId} />);
    } else {
      openPopup(<AddAlarmPopup type="restock" productOptionId={productOptionId} />);
    }
  };

  const handleBbangcketingBtnClick = () => {
    if (!isLoggedIn) {
      openToast({ message: '알림 신청을 하려면 먼저 로그인해주세요.' });
      push(PATH.login);
      return;
    }

    if (orderType === 'WEEK') {
      openModal(
        <WeekAlarmModal productOptionId={productOptionId} orderAvailableWeek={orderAvailableWeek} />
      );
    }
    if (orderType === 'DATE') {
      openModal(
        <DateAlarmModal
          productOptionId={productOptionId}
          productOptionName={productOptionName}
          orderAvailableDate={orderAvailableDate}
          isNotified={isNotified}
        />
      );
    }
  };

  return (
    <div>
      <h2 className="text-gray-500 text-12 leading-150 font-semibold pb-0">
        주문 가능 {ORDER_TYPE[orderType]}
      </h2>
      <div className="flex justify-between items-center">
        <div className="flex gap-[4px]">
          {orderType === 'WEEK' && <TypeOfWeek availableDays={orderAvailableWeek} />}
          {orderType === 'DATE' && <TypeOfDate availableDays={orderAvailableDate} />}
        </div>
        <AlarmButton
          type={soldout ? 'restock' : 'bbangcketing'}
          isAlarming={isNotified}
          onClick={soldout ? handleRestockBtnClick : handleBbangcketingBtnClick}
          className="max-w-max"
        />
      </div>
    </div>
  );
};
export default OrderAvailableDays;
