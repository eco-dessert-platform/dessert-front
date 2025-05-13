import { getCookie } from '@/shared/actions/cookie';
import { TOKEN } from '@/shared/constants/token';
import ArrowIcons from '@/shared/components/icons/ArrowIcons';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import Link from 'next/link';
import PATH from '@/shared/constants/path';

const RecommendationSection = async () => {
  const accessToken = await getCookie(TOKEN.accessToken);
  const isLoggedIn = !!accessToken;

  return (
    !isLoggedIn && (
      <PaddingWrapper className="py-[6px]">
        <Link
          href={PATH.login}
          className="border-primaryOrangeRed rounded-[8px] border px-[16px] py-[14px] w-full flex hover:opacity-70 transition-opacity"
        >
          <div className="flex justify-between w-full gap-2">
            <div className="min-w-[40px] h-[40px] rounded-[10px] bg-primaryOrangeRed bg-opacity-15 flex justify-center items-center">
              <span>🥐</span>
            </div>
            <div className="w-full">
              <p className="text-primaryOrangeRed typo-title-14-semibold">맞춤 추천 받기</p>
              <p className="text-gray-600 typo-body-11-regular">
                맞춤 추천은 내가 좋아할만한 빵/과자들을 보여줘요!
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <ArrowIcons shape="primary-medium-forward" />
          </div>
        </Link>
      </PaddingWrapper>
    )
  );
};

export default RecommendationSection;
