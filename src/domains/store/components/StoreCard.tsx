import PaddingWrapper from '@/shared/components/PaddingWrapper';
import useAddWishStoreMutation from '@/domains/wish/queries/useAddWishStoreMutation';
import useDeleteWishStoreMutation from '@/domains/wish/queries/useDeleteWishStoreMutation';
import Image from 'next/image';
import StarButton from '@/shared/components/StarButton';
import { BbangleIcon } from '@/shared/components/icons';

interface WishStroeProps {
  id: number;
  imgSrc: string;
  title: string;
  desc: string;
  isWished?: boolean; // default false로 임시 처리 (백엔드에서 안 줌)
}

const StoreCard = ({ id, imgSrc, title, desc, isWished = false }: WishStroeProps) => {
  const { mutate: addMutate } = useAddWishStoreMutation();
  const { mutate: deleteMutate } = useDeleteWishStoreMutation();

  const like = () => {
    addMutate({ storeId: String(id) });
  };

  const hate = () => {
    deleteMutate({ storeId: String(id) });
  };

  return (
    <PaddingWrapper className="flex gap-[10px] justify-between border-b border-gray-100">
      <div className="w-[40px] h-[40px] rounded-[6px] shrink-0">
        {imgSrc ? (
          <Image width={40} height={40} src={imgSrc} alt="store thumbnail" />
        ) : (
          <BbangleIcon shape="smile" />
        )}
      </div>

      <div className="flex w-full flex-col overflow-hidden">
        <div className="flex justify-between">
          <div className="font-semibold leading-150 tracking-tight-2 text-14">{title}</div>
          <StarButton isAcive={isWished} onClick={isWished ? hate : like} />
        </div>
        <p className="truncate text-gray-600 leading-130 tracking-tight-2 text-12">{desc}</p>
      </div>
    </PaddingWrapper>
  );
};

export default StoreCard;
