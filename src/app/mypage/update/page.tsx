import ProfileUpdateForm from '@/domains/user/components/ProfileUpdateForm';
import userService from '@/domains/user/queries/service';

export const dynamic = 'force-dynamic';

const Update = async () => {
  const myProfile = await userService.getUserProfile();

  return <ProfileUpdateForm defaultValues={myProfile} />;
};

export default Update;
