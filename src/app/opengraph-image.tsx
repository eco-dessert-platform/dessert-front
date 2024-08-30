import { ImageResponse } from 'next/og';
import { BbangleLogoIcon } from '@/shared/components/icons';

export const alt = 'logo';
export const contentType = 'image/png';

const OpenGraphImage = () =>
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

export default OpenGraphImage;
