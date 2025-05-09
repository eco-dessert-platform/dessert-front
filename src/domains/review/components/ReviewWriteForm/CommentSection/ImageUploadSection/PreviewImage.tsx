import { BbangleIcon, CloseIcon } from '@/shared/components/icons';
import ImageWithFallback from '@/shared/components/ImageWithFallback';
import { BLUR_DATA_URL } from '@/shared/constants/blurDataUrl';

interface PreviewImageProps {
  imageSrc: string;
  onRemove: () => void;
}

const PreviewImage = ({ imageSrc, onRemove }: PreviewImageProps) => (
  <div className="relative">
    <ImageWithFallback
      src={imageSrc}
      alt="preview image"
      width={64}
      height={64}
      placeholder="blur"
      blurDataURL={BLUR_DATA_URL}
      fallback={
        <BbangleIcon
          shape="smile"
          className="flex w-[64px] h-[64px] flex-col items-center justify-center border bg-gray-50 rounded-[6px] "
        />
      }
      className="min-w-[64px] h-[64px] border-[1px] border-gray-300 rounded-[6px] object-cover object-center"
    />
    <button
      type="button"
      onClick={onRemove}
      aria-label="remove image"
      className="absolute top-[6px] right-[6px]"
    >
      <CloseIcon shape="white-circle" />
    </button>
  </div>
);

export default PreviewImage;
