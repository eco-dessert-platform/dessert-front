import PaddingWrapper from '@/shared/components/PaddingWrapper';
import AlarmCard from '@/domains/user/components/AlarmCard';

const PRODUCT = {
  title: '상품명',
  description:
    '상품 설명ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd',
  thumbnail:
    'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQwu9l5QEVRGPd9-hQ90jhpiGAMg1ycT46XWkXivXoCYaZ2RUm0Fz_Y0ZVxsJ50o3_K'
};

const BbanketingPage = () => {
  const handleAlarm = () => undefined;

  const handleDelete = () => undefined;

  return (
    <PaddingWrapper className="flex flex-col gap-y-[16px]">
      <AlarmCard
        type="bbangketing"
        data={{ ...PRODUCT, alarm: true }}
        onAlarm={handleAlarm}
        onDelete={handleDelete}
      />
      <AlarmCard
        type="bbangketing"
        data={{ ...PRODUCT, alarm: false }}
        onAlarm={handleAlarm}
        onDelete={handleDelete}
      />
    </PaddingWrapper>
  );
};

export default BbanketingPage;
