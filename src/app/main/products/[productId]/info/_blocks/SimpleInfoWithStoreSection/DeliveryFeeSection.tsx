import { IBoardDetailType } from '@/domains/product/types/productDetailType';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

interface Props {
  deliveryFee: IBoardDetailType['deliveryFee'];
  freeShippingConditions: IBoardDetailType['freeShippingConditions'];
}

const DeliveryFeeSection = ({ deliveryFee, freeShippingConditions }: Props) => (
  <PaddingWrapper className="flex w-full items-center gap-[4px] border-t border-b border-gray-100 bg-gray-50">
    <div className="typo-title-14-medium text-gray-600">배송비</div>
    <div className="typo-title-14-regular text-gray-800">{deliveryFee.toLocaleString()}원</div>
    <div className="typo-body-12-regular text-gray-500">
      {`(${freeShippingConditions.toLocaleString()}원 이상 구매 시 무료)`}
    </div>
  </PaddingWrapper>
);

export default DeliveryFeeSection;
