import Image from 'next/image';
import Link from 'next/link';
import { fetchUserProfile } from '@/components/units/(mypage)/api/fetchUserProfile';
import PaddingWrapper from '@/components/commons/PaddingWrapper';
import { BbangleSmileIcon } from '@/components/commons/Icon';

const UserInfo = async () => {
  const { profileImg, nickname } = await fetchUserProfile();

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
              <BbangleSmileIcon className="w-[30px] h-[30px]" />
            )}
          </div>
          <p className="text-18 text-gray-900 font-bold tracking-tight">{nickname}</p>
        </div>
        <Link href="/mypage/update">
          <p className="text-11 text-gray-500 tracking-tight-2 leading-150">프로필 수정</p>
        </Link>
      </div>
      <p className="text-14 text-gray-800 tracking-tight-2">반가워요 :) 무엇을 도와드릴까요?</p>
    </PaddingWrapper>
  );
};

export default UserInfo;
