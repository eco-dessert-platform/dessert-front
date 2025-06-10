import Image from 'next/image';
import Link from 'next/link';

import userService from '@/domains/user/queries/service';
import { BbangleIcon } from '@/shared/components/icons';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PATH from '@/shared/constants/path';

const UserInfoSection = async () => {
  const { profileImg, nickname } = await userService.getUserProfile();

  return (
    <PaddingWrapper className="flex flex-col gap-[16px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center justify-between gap-[6px]">
          <div className="rounded-[6px] bg-gray-100">
            {profileImg ? (
              <Image
                src={profileImg}
                width={30}
                height={30}
                alt={`${nickname}'s profile image`}
                className="rounded-lg"
              />
            ) : (
              <BbangleIcon shape="smile" className="h-[30px] w-[30px]" />
            )}
          </div>
          <p className="typo-title-16-semibold text-gray-900">{nickname}</p>
        </div>
        <Link href={PATH.profileUpdate}>
          <p className="typo-body-11-regular text-gray-500">프로필 수정</p>
        </Link>
      </div>
      <p className="typo-title-14-regular text-gray-800">반가워요 :) 무엇을 도와드릴까요?</p>
    </PaddingWrapper>
  );
};

export default UserInfoSection;
