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
        'flex items-center justify-center rounded-[6px] border border-gray-100',
        sizeClass
      )}
    >
      {hasThumbnail && thumbnailCount > 1 && (
        <div className="grid size-full grid-cols-2 grid-rows-2 gap-[2px]">
          {thumbnailList.map((thumbnail) => (
            <div key={thumbnail} className="relative size-full">
              <ImageWithFallback
                src={thumbnail}
                alt="상품사진"
                placeholder="blur"
                blurDataURL={BLUR_DATA_URL}
                className="rounded-[6px] object-cover"
                fill
                fallback={
                  <SadBbangleBox className="typo-body-12-regular size-full rounded-[6px] border bg-gray-50">
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
            className="rounded-[6px] object-cover"
            fill
            fallback={
              <SadBbangleBox className="typo-body-12-regular size-full rounded-[6px] border bg-gray-50">
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
