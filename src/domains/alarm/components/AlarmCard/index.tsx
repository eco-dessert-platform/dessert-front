'use client';

import { memo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ProductType, AlarmType } from '@/domains/alarm/types';
import AlarmButton from '@/domains/alarm/components/AlarmCard/AlarmButton';
import DeleteButton from '@/domains/alarm/components/AlarmCard/DeleteButton';

interface Props {
  type: AlarmType;
  data: ProductType;
  onAlarm: (id: number) => void;
  onDelete: (id: number) => void;
}

const AlarmCard = ({ type, data, onAlarm, onDelete }: Props) => {
  const { id, title, description, thumbnail, isAlarming } = data;

  return (
    <div className="flex flex-col gap-y-[10px] p-[16px] w-full border-[1px] border-gray-100 rounded-[10px]">
      <div className="flex justify-between items-start gap-x-[10px]">
        <Image
          src={thumbnail}
          alt="상품 이미지"
          width={40}
          height={40}
          className="w-[40px] h-[40px] object-cover rounded-[6px]"
        />
        <div className="w-full overflow-hidden">
          <Link href={`/main/products/${id}/info`}>
            <h6 className="typo-title-14-semibold text-gray-900">{title}</h6>
          </Link>
          <p className="typo-body-12-regular text-gray-600 line-clamp-2 text-ellipsis overflow-hidden break-words">
            {description}
          </p>
        </div>
      </div>
      <div className="flex gap-x-[10px]">
        <AlarmButton type={type} isAlarming={isAlarming} onClick={() => onAlarm(id)} />
        {!isAlarming && <DeleteButton onClick={() => onDelete(id)} />}
      </div>
    </div>
  );
};

export default memo(AlarmCard);
