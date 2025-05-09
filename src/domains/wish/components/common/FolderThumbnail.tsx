import ImageWithFallback from '@/shared/components/ImageWithFallback';
import SadBbangleBox from '@/shared/components/SadBbangleBox';
import { BbangleIcon } from '@/shared/components/icons';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';
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
              <ImageWithFallback
                src={thumbnail}
                alt="상품사진"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="object-cover rounded-[6px]"
                fill
                fallback={
                  <SadBbangleBox className="border bg-gray-50 rounded-[6px] size-full typo-body-12-regular">
                    no image
                  </SadBbangleBox>
                }
              />
            </div>
          ))}
        </div>
      )}
      {hasThumbnail && thumbnailCount === 1 && (
        <div key={thumbnailList[0]} className="relative size-full">
          <ImageWithFallback
            src={thumbnailList[0]}
            alt="상품사진"
            placeholder="blur"
            blurDataURL={BLUR_DATA_URL}
            className="object-cover rounded-[6px]"
            fill
            fallback={
              <SadBbangleBox className="border bg-gray-50 rounded-[6px] size-full typo-body-12-regular">
                no image
              </SadBbangleBox>
            }
          />
        </div>
      )}
      {!hasThumbnail && <BbangleIcon shape="smile" className="size-[80px]" />}
    </div>
  );
};

export default FolderThumbnail;
