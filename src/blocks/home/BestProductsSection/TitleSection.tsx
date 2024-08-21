import Link from 'next/link';
import PATH from '@/shared/constants/path';
import { getCookie } from '@/shared/actions/cookie';
import { TOKEN } from '@/shared/constants/token';
import userService from '@/domains/user/queries/service';
import { transformDataToAtomFormat } from '@/domains/user/utils/transformPreference';
import { genGuidanceMessage } from '@/domains/home/utils/genGuidanceMessage';
import PaddingWrapper from '@/shared/components/PaddingWrapper';

const TitleSection = async () => {
  const accessToken = await getCookie(TOKEN.accessToken);
  const isLoggedIn = !!accessToken;

  let preference;
  if (isLoggedIn) {
    try {
      const data = await userService.getPreference();
      preference = transformDataToAtomFormat(data);
    } catch (error) {
      if (error instanceof Error) console.error(error.message);
    }
  }

  return (
    <PaddingWrapper>
      <div className="flex justify-between items-center">
        {isLoggedIn ? (
          <div className="flex items-center gap-x-[6px]">
            <h2 className="text-gray-900 typo-heading-18-semibold">개인 맞춤 상품</h2>
            <Link
              href={PATH.preferenceUpdate}
              className="px-[10px] py-[2px] rounded-[50px] bg-gray-100 text-gray-700 typo-body-12-semibold"
            >
              수정
            </Link>
          </div>
        ) : (
          <h2 className="text-gray-900 typo-heading-18-semibold">인기상품</h2>
        )}
        <Link href={PATH.mainProductList} className="text-gray-600 typo-body-11-semibold">
          더보기
        </Link>
      </div>
      {isLoggedIn && preference && (
        <p className="mt-[6px] typo-body-12-regular text-gray-600 whitespace-pre-line">
          {genGuidanceMessage(preference)}
        </p>
      )}
    </PaddingWrapper>
  );
};

export default TitleSection;
