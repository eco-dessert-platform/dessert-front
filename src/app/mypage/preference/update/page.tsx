import userService from '@/domains/user/queries/service';
import { PreferenceType } from '@/domains/user/types/profile';
import PreferenceFormSection from '@/blocks/user/preference/update/PreferenceFormSection';

const PreferenceUpdatePage = async () => {
  const data = await userService.getPreference();
  const preferenceArr = data
    .toLowerCase()
    .replace('muscle_grow', 'muscle grow')
    .split('_') as Array<PreferenceType>;

  return <PreferenceFormSection data={preferenceArr} />;
};

export default PreferenceUpdatePage;
