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
          className="border-primary-orange-red flex w-full rounded-[8px] border px-[16px] py-[14px] transition-opacity hover:opacity-70"
        >
          <div className="flex w-full justify-between gap-2">
            <div className="bg-primary-orange-red/15 flex h-[40px] min-w-[40px] items-center justify-center rounded-[10px]">
              <span>🥐</span>
            </div>
            <div className="w-full">
              <p className="text-primary-orange-red typo-title-14-semibold">맞춤 추천 받기</p>
              <p className="typo-body-11-regular text-gray-600">
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
