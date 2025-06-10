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
          className="flex h-[64px] w-[64px] flex-col items-center justify-center rounded-[6px] border bg-gray-50"
        />
      }
      className="h-[64px] min-w-[64px] rounded-[6px] border border-gray-300 object-cover object-center"
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
