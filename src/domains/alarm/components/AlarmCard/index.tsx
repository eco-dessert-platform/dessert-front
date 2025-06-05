'use client';

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { PushProductType, AlarmType } from '@/domains/alarm/types';
import AlarmButton from '@/domains/alarm/components/common/AlarmButton';
import DeleteButton from '@/domains/alarm/components/AlarmCard/DeleteButton';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';

interface Props {
  type: AlarmType;
  data: PushProductType;
  onAlarm: (id: number) => void;
  onDelete: (id: number) => void;
}

const AlarmCard = ({ type, data, onAlarm, onDelete }: Props) => {
  const { productId, storeName, productTitle, boardThumbnail, subscribed } = data;

  return (
    <div className="flex flex-col gap-y-[10px] p-[16px] w-full border border-gray-100 rounded-[10px]">
      <div className="flex justify-between items-start gap-x-[10px]">
        <Image
          src={boardThumbnail}
          alt="상품 이미지"
          width={40}
          height={40}
          placeholder="blur"
          blurDataURL={BLUR_DATA_URL}
          className="w-[40px] h-[40px] object-cover rounded-[6px]"
        />
        <div className="w-full overflow-hidden">
          <Link href={`/main/products/${productId}/info`}>
            <h6 className="typo-title-14-semibold text-gray-900">{storeName}</h6>
          </Link>
          <p className="typo-body-12-regular text-gray-600 line-clamp-2 text-ellipsis overflow-hidden break-words">
            {productTitle}
          </p>
        </div>
      </div>
      <div className="flex gap-x-[10px]">
        <AlarmButton type={type} isAlarming={subscribed} onClick={() => onAlarm(productId)} />
        {!subscribed && <DeleteButton onClick={() => onDelete(productId)} />}
      </div>
    </div>
  );
};

export default memo(AlarmCard);
