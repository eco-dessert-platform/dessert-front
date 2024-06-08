import UpdateForm from '@/domains/user/components/ProfileUpdateForm';
import userService from '@/domains/user/queries/service';

export const dynamic = 'force-dynamic';

const Update = async () => {
  const myProfile = await userService.getUserProfile();

  return <UpdateForm defaultValues={myProfile} />;
};

export default Update;
