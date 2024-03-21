import Header from '@/components/commons/header/client/Header';
import { fetchUserProfile } from '@/components/units/(mypage)/api/fetchUserProfile';
import UpdateForm from '@/components/units/(mypage)/Update/client/UpdateForm';

export const dynamic = 'force-dynamic';

const Update = async () => {
  const myProfile = await fetchUserProfile();

  return (
    <>
      <Header title="프로필 수정" back />
      <UpdateForm defaultValues={myProfile} />
    </>
  );
};

export default Update;
