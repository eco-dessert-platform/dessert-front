import { None } from '@/components/units/NotFound/client';

const ImgNone = () => {
  return (
    <div
      className="w-full relative m-auto flex items-center justify-center border border-solid border-gray-100 rounded-[10px]"
      style={{ paddingTop: '100%' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <None />
      </div>
    </div>
  );
};
export default ImgNone;
