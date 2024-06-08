import PaddingWrapper from '@/shared/components/PaddingWrapper';

const Banner = () => (
  <PaddingWrapper className="pb-[0px]">
    <div className="w-full h-[164px] bg-redGray-30 rounded-[10px] flex justify-center items-center">
      <p className="typo-title-14-medium text-center">
        10초만에 맞춤 추천을 설정하면
        <br />
        본인이 원하는 빵을 파악하기 쉬워져요!
        <br />
        디자인 작업 필요
      </p>
    </div>
  </PaddingWrapper>
);

export default Banner;
