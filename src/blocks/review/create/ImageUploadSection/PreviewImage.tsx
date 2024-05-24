import Image from 'next/image';
import { CloseIcon } from '@/shared/components/icons';

interface PreviewImageProps {
  imageSrc: string;
  onRemove: () => void;
}

const PreviewImage = ({ imageSrc, onRemove }: PreviewImageProps) => (
  <div className="relative">
    <Image
      src={imageSrc}
      alt="preview image"
      width={64}
      height={64}
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
