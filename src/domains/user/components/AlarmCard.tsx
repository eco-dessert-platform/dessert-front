import Image from 'next/image';

interface Props {
  type: 'bbangketing' | 'restock';
  data: {
    title: string;
    description: string;
    thumbnail: string;
    alarm: boolean;
  };
  onAlarm: () => void;
  onDelete: () => void;
}

const AlarmCard = ({ data, type, onAlarm, onDelete }: Props) => {
  const { title, description, thumbnail, alarm } = data;

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
        <div className="w-full">
          <h6 className="typo-title-14-semibold text-gray-900">{title}</h6>
          {/* 말줄임!!!!!! */}
          <p className="typo-body-12-regular text-gray-600 line-clamp-2 truncate break-words">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AlarmCard;
