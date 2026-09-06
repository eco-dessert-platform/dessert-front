'use client';

import { MouseEventHandler, useEffect, useState } from 'react';
import { useAtom } from 'jotai';

import useAddCartMutation from '@/domains/cart/queries/useAddCartMutation';
import { selectedWishFolderAtom } from '@/domains/wish/atoms/wishFolder';
import useAddWishProductMutation from '@/domains/wish/queries/useAddWishProductMutation';
import useDeleteWishProductMutation from '@/domains/wish/queries/useDeleteWishProductMutation';
import HeartButton from '@/shared/components/HeartButton';
import ButtonNewver, { buttonVariants } from '@/shared/components/ButtonNewver';
import useGetBoardDetailQuery from '@/domains/product/queries/useGetBoardDetailQuery';
import { useParams, usePathname } from 'next/navigation';
import { cn } from '@/shared/utils/cn';
import useModal from '@/shared/hooks/useModal';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Modal from '@/shared/components/Modal';
import ProductCard from '@/domains/product/components/ProductCard';
import useGetSimilarProductsQuery from '@/domains/product/queries/useGetSimilarProducts';
import useGetProductOptionQuery from '@/domains/product/queries/useGetProductOptionQuery';
import useGetProductOptionStatusQuery from '@/domains/product/queries/useGetProductOptionStatusQuery';
import { ProductType } from '@/domains/product/types/productInfoType';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import { CloseIcon } from '@/shared/components/icons';

import { isLoggedinAtom } from '@/shared/atoms/login';

const IS_PARTNER_STORE = true;

const PartnerPurchaseButton = ({
  isSoldout,
  onClick
}: {
  isSoldout: boolean;
  onClick: () => void;
}) => (
  <ButtonNewver
    color={isSoldout ? 'gray' : 'black'}
    className={cn('w-full', isSoldout ? 'cursor-not-allowed' : 'cursor-pointer')}
    size="lg"
    disabled={isSoldout}
    onClick={onClick}
    aria-label={isSoldout ? '임시품절' : '구매하기'}
    title={isSoldout ? '임시품절' : '구매하기'}
  >
    {isSoldout ? '임시품절' : '구매하기'}
  </ButtonNewver>
);

const ExternalPurchaseButton = ({ purchaseUrl }: { purchaseUrl: string }) => {
  const gotoPurchaseUrl = () => {
    window.open(purchaseUrl, '_blank');
  };

  return (
    <ButtonNewver
      color="black"
      className="w-full cursor-pointer"
      size="lg"
      onClick={gotoPurchaseUrl}
      aria-label="외부 판매처로 이동해 구매하기"
      title="구매하러 가기"
    >
      구매하러 가기
    </ButtonNewver>
  );
};

type SelectedOption = {
  productId: number;
  quantity: number;
};

const PurchaseOptionBottomSheet = ({
  boardId,
  productId,
  deliveryFee,
  freeShippingConditions
}: {
  boardId: number;
  productId: number;
  deliveryFee: number;
  freeShippingConditions: number;
}) => {
  const { data: productOptions = [] } = useGetProductOptionQuery(productId);
  const firstOption = productOptions.find(({ isSoldout }) => !isSoldout);
  const isSingleOption = productOptions.length === 1;
  const [isOptionOpen, setIsOptionOpen] = useState(!isSingleOption);
  const [selectedOptions, setSelectedOptions] = useState<SelectedOption[]>([]);
  const { mutate: addCart, isPending: isAddingCart } = useAddCartMutation();

  const selectedProducts = selectedOptions
    .map((selectedOption) => {
      const product = productOptions.find(({ id }) => id === selectedOption.productId);
      return product ? { product, quantity: selectedOption.quantity } : null;
    })
    .filter((item): item is { product: ProductType; quantity: number } => !!item);
  const totalPrice = selectedProducts.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0
  );
  const hasFreeShippingCondition = freeShippingConditions > 0;
  const appliedDeliveryFee =
    totalPrice === 0 || (hasFreeShippingCondition && totalPrice >= freeShippingConditions)
      ? 0
      : deliveryFee;
  const deliveryFeeText =
    totalPrice > 0 && appliedDeliveryFee === 0 ? '무료' : `${deliveryFee.toLocaleString()}원`;
  const paymentPrice = totalPrice + appliedDeliveryFee;
  const disabled = selectedProducts.length === 0 || isAddingCart;

  useEffect(() => {
    if (isSingleOption && firstOption) {
      setSelectedOptions([{ productId: firstOption.id, quantity: 1 }]);
      setIsOptionOpen(false);
    }
  }, [firstOption, isSingleOption]);

  const updateQuantity = (productOptionId: number, nextQuantity: number) => {
    setSelectedOptions((prev) =>
      prev.map((selectedOption) =>
        selectedOption.productId === productOptionId
          ? { ...selectedOption, quantity: Math.min(999, Math.max(1, nextQuantity)) }
          : selectedOption
      )
    );
  };
  const resetSelectedOption = (productOptionId: number) => {
    if (isSingleOption) return;
    setSelectedOptions((prev) =>
      prev.filter((selectedOption) => selectedOption.productId !== productOptionId)
    );
  };
  const selectOption = (optionId: number) => {
    setSelectedOptions((prev) =>
      prev.some((selectedOption) => selectedOption.productId === optionId)
        ? prev
        : [...prev, { productId: optionId, quantity: 1 }]
    );
    setIsOptionOpen(false);
  };

  const addToCart = () => {
    if (selectedProducts.length === 0) return;
    addCart({
      boardId,
      options: selectedProducts.map(({ product, quantity }) => ({
        productId: product.id,
        quantity
      }))
    });
  };

  return (
    <Modal title="옵션 선택" className="flex h-[80dvh] flex-col">
      <PaddingWrapper className="flex min-h-0 flex-1 flex-col gap-[16px] pb-0">
        <div className="min-h-0 flex-1 overflow-y-auto">
          <div className="overflow-hidden rounded-[8px] border border-gray-300">
            <button
              type="button"
              className="flex w-full cursor-pointer items-center justify-between bg-white p-[14px] text-left"
              aria-expanded={isOptionOpen}
              aria-label="기본상품 옵션 열기"
              onClick={() => setIsOptionOpen((prev) => !prev)}
            >
              <span className="typo-title-14-semibold">기본상품 선택</span>
              <span className={cn(isOptionOpen && 'rotate-180')}>
                <ArrowIcons shape="large-down" />
              </span>
            </button>

            {isOptionOpen && (
              <div className="border-t border-gray-200">
                {productOptions.length === 0 && (
                  <p className="typo-body-14-regular p-[14px] text-gray-600">
                    선택 가능한 상품 옵션이 없어요.
                  </p>
                )}
                {productOptions.map((option) => (
                  <button
                    key={option.id}
                    type="button"
                    disabled={
                      option.isSoldout ||
                      selectedOptions.some(
                        ({ productId: selectedOptionId }) => selectedOptionId === option.id
                      )
                    }
                    aria-pressed={selectedOptions.some(
                      ({ productId: selectedOptionId }) => selectedOptionId === option.id
                    )}
                    aria-label={`${option.title} 옵션 선택`}
                    className={cn(
                      'flex w-full cursor-pointer items-center justify-between border-b border-gray-100 p-[14px] text-left last:border-b-0',
                      selectedOptions.some(
                        ({ productId: selectedOptionId }) => selectedOptionId === option.id
                      ) && 'bg-gray-50 text-gray-400',
                      option.isSoldout && 'cursor-not-allowed bg-gray-50 text-gray-400'
                    )}
                    onClick={() => selectOption(option.id)}
                  >
                    <span className="typo-body-14-regular">{option.title}</span>
                    <span className="typo-body-12-medium">
                      {option.isSoldout ? '일시품절' : `${option.price.toLocaleString()}원`}
                    </span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {selectedProducts.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="mt-[12px] flex flex-col gap-[14px] rounded-[8px] bg-gray-50 p-[14px]"
            >
              <div className="flex items-start justify-between gap-[12px]">
                <p className="typo-title-14-semibold text-gray-900">{product.title}</p>
                <button
                  type="button"
                  aria-label="선택한 옵션 삭제"
                  className={cn('cursor-pointer', isSingleOption && 'cursor-not-allowed opacity-0')}
                  disabled={isSingleOption}
                  onClick={() => resetSelectedOption(product.id)}
                >
                  <CloseIcon shape="no-bg-24" />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-[14px]">
                  <button
                    type="button"
                    aria-label="수량 줄이기"
                    className="size-[28px] cursor-pointer rounded-full bg-white text-gray-900 disabled:cursor-not-allowed disabled:text-gray-300"
                    disabled={quantity === 1}
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                  >
                    -
                  </button>
                  <span className="typo-title-14-medium min-w-[20px] text-center">{quantity}</span>
                  <button
                    type="button"
                    aria-label="수량 늘리기"
                    className="size-[28px] cursor-pointer rounded-full bg-white text-gray-900"
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <span className="typo-title-14-semibold">
                  {(product.price * quantity).toLocaleString()}원
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="-mx-[16px] shrink-0 border-t border-gray-100 bg-white px-[16px] pt-[18px] pb-[20px]">
          <div className="mb-[18px] flex items-center justify-between">
            <div className="typo-title-14-semibold flex items-center gap-[8px] text-gray-900">
              <span>배송비</span>
              <span>{deliveryFeeText}</span>
              {hasFreeShippingCondition && (
                <span className="typo-body-12-regular text-gray-500">
                  ({freeShippingConditions.toLocaleString()}원 이상 구매 시 무료)
                </span>
              )}
            </div>
            <div className="typo-title-14-semibold flex items-center gap-[8px] text-gray-900">
              <span>총 금액</span>
              <span className="typo-title-18-semibold text-primary-orange-red">
                {paymentPrice.toLocaleString()}원
              </span>
            </div>
          </div>

          <div className="flex gap-[8px]">
            <ButtonNewver
              color="border-white"
              className="min-w-0 flex-1 shrink cursor-pointer"
              size="lg"
              disabled={disabled}
              aria-label="장바구니에 담기"
              title="장바구니"
              onClick={addToCart}
            >
              장바구니
            </ButtonNewver>
            <ButtonNewver
              color="black"
              className="min-w-0 flex-1 shrink cursor-pointer"
              size="lg"
              disabled={disabled}
              aria-label="바로구매"
              title="바로구매"
            >
              바로구매
            </ButtonNewver>
          </div>
        </div>
      </PaddingWrapper>
    </Modal>
  );
};

const FixedPurchaseButtonSection = () => {
  const { productId } = useParams<{ productId: string }>();
  const { openModal, closeModal, modal } = useModal();
  const pathname = usePathname();

  const [selectedWishFolder] = useAtom(selectedWishFolderAtom);
  const [isLoggedIn] = useAtom(isLoggedinAtom);

  const { mutate: addMutate } = useAddWishProductMutation();
  const { mutate: deleteMutate } = useDeleteWishProductMutation();
  const { data: similarProducts } = useGetSimilarProductsQuery(Number(productId));
  const { data: boardData } = useGetBoardDetailQuery(Number(productId));
  const { data: productOptionStatus } = useGetProductOptionStatusQuery(Number(productId));

  useEffect(() => {
    if (modal) {
      closeModal();
    }
  }, [pathname, closeModal]);

  if (!boardData) return 'data not found';
  if (!similarProducts) return null;

  const addToWishlist: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    addMutate({ productId: boardData.boardId, folderId: selectedWishFolder });
    if (isLoggedIn) {
      setTimeout(() => {
        openModal(
          <Modal title="이런 건강 디저트는 어때요?">
            <PaddingWrapper className="flex flex-col gap-y-[10px] py-[16px]">
              <div className="grid grid-cols-3 gap-[16px]">
                {similarProducts.map((item) => (
                  <ProductCard key={item.boardId} product={item} isSimilarProduct />
                ))}
              </div>
            </PaddingWrapper>
          </Modal>
        );
      }, 500);
    }
  };

  const deleteToWishlist: MouseEventHandler<HTMLButtonElement> = (e) => {
    deleteMutate({ productId: boardData.boardId });
    e.preventDefault();
  };

  const openPurchaseOptionBottomSheet = () => {
    openModal(
      <PurchaseOptionBottomSheet
        boardId={boardData.boardId}
        deliveryFee={boardData.deliveryFee}
        freeShippingConditions={boardData.freeShippingConditions}
        productId={Number(productId)}
      />
    );
  };

  const isSoldOut = productOptionStatus?.isSoldOut ?? boardData.isSoldout;

  return (
    <div className="mx-auto flex w-full max-w-[600px] items-center gap-[10px] bg-white p-[16px]">
      <HeartButton
        shape="default"
        isActive={boardData.isBoardWished}
        onClick={boardData.isBoardWished ? deleteToWishlist : addToWishlist}
        className={cn(
          buttonVariants({ size: 'lg', color: 'border-white', radius: 'round' }),
          'w-[56px] min-w-max p-0'
        )}
      />
      <div className="flex-1">
        {IS_PARTNER_STORE ? (
          <PartnerPurchaseButton isSoldout={isSoldOut} onClick={openPurchaseOptionBottomSheet} />
        ) : (
          <ExternalPurchaseButton purchaseUrl={boardData.purchaseUrl} />
        )}
      </div>
    </div>
  );
};

export default FixedPurchaseButtonSection;
