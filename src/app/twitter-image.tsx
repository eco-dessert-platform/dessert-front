import { ImageResponse } from 'next/og';
import { BbangleLogoIcon } from '@/shared/components/icons';

export const alt = '빵그리의 오븐 로고';
export const contentType = 'image/png';

const TwitterImage = () =>
  new ImageResponse(
    (
      <div
        className="w-full h-full flex justify-center items-center bg-primaryOrangeRed"
        style={{ display: 'flex' }}
      >
        <BbangleLogoIcon />
      </div>
    )
  );

export default TwitterImage;
