import Link from 'next/link';
import PATH from '@/shared/constants/path';
import { getCookie } from '@/shared/actions/cookie';
import { TOKEN } from '@/shared/constants/token';
import userService from '@/domains/user/queries/service';
import { genGuidanceMessage } from '@/domains/home/utils/genGuidanceMessage';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

const TitleSection = async () => {
  const accessToken = await getCookie(TOKEN.accessToken);
  const isLoggedIn = !!accessToken;

  let preference;
  if (isLoggedIn) {
    try {
      const recommendationStep1 = await userService.getRecommendationStep1();
      preference = recommendationStep1.preferenceType;
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  return (
    <PaddingWrapper>
      <div className="flex items-center justify-between">
        {isLoggedIn ? (
          <div className="flex items-center gap-x-[6px]">
            <h2 className="typo-heading-18-semibold text-gray-900">개인 맞춤 상품</h2>
            <Link
              href={PATH.recommendationUpdate({ progress: 1 })}
              className="typo-body-12-semibold rounded-[50px] bg-gray-100 px-[10px] py-[2px] text-gray-700"
            >
              수정
            </Link>
          </div>
        ) : (
          <h2 className="typo-heading-18-semibold text-gray-900">인기상품</h2>
        )}
        <Link href={PATH.mainProductList} className="typo-body-11-semibold text-gray-600">
          더보기
        </Link>
      </div>
      {isLoggedIn && preference && (
        <p className="typo-body-12-regular mt-[6px] whitespace-pre-line text-gray-600">
          {genGuidanceMessage(preference)}
        </p>
      )}
    </PaddingWrapper>
  );
};

export default TitleSection;
