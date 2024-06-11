import Image from 'next/image';
import Link from 'next/link';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import PATH from '@/shared/constants/path';
import { BbangleIcon } from '@/shared/components/icons';
import userService from '@/domains/user/queries/service';

const UserInfoSection = async () => {
  const { profileImg, nickname } = await userService.getUserProfile();

  return (
    <PaddingWrapper className="flex flex-col gap-[16px]">
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-[6px]">
          <div className="bg-gray-100 rounded-[6px] ">
            {profileImg ? (
              <Image
                src={profileImg}
                width={30}
                height={30}
                alt={`${nickname}'s profile image`}
                className="rounded-lg"
              />
            ) : (
              <BbangleIcon shape="smile" className="w-[30px] h-[30px]" />
            )}
          </div>
          <p className="text-gray-900 typo-title-16-semibold">{nickname}</p>
        </div>
        <Link href={PATH.profileUpdate}>
          <p className="text-gray-500 typo-body-11-regular">프로필 수정</p>
        </Link>
      </div>
      <p className="text-gray-800 typo-title-14-regular">반가워요 :) 무엇을 도와드릴까요?</p>
    </PaddingWrapper>
  );
};

export default UserInfoSection;
