import { BbangleIcon } from '@/shared/components/icons';
import Image from 'next/image';
import { twMerge } from 'tailwind-merge';

interface Props {
  thumbnailList?: string[];
  size?: 'lg' | 'sm';
}

const FolderThumbnail = ({ thumbnailList, size = 'lg' }: Props) => {
  const sizeClass = size === 'lg' ? 'size-full' : 'size-[24px]';

  const hasThumbnail = !!thumbnailList && thumbnailList.length !== 0;
  const thumbnailCount = hasThumbnail ? thumbnailList.length : 0;

  return (
    <div
      className={twMerge(
        'flex justify-center items-center border border-gray-100 rounded-[6px]',
        sizeClass
      )}
    >
      {hasThumbnail && thumbnailCount > 1 && (
        <div className="grid grid-cols-2 grid-rows-2 size-full gap-[2px]">
          {thumbnailList.map((thumbnail) => (
            <div key={thumbnail} className="relative size-full">
              <Image src={thumbnail} fill alt="thumbnail" />
            </div>
          ))}
        </div>
      )}
      {hasThumbnail && thumbnailCount === 1 && (
        <div key={thumbnailList[0]} className="relative size-full">
          <Image src={thumbnailList[0]} fill alt="thumbnail" />
        </div>
      )}
      {!hasThumbnail && <BbangleIcon shape="smile" className="size-[80px]" />}
    </div>
  );
};

export default FolderThumbnail;
