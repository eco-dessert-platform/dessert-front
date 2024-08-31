import userService from '@/domains/user/queries/service';
import PreferenceFormSection from '@/blocks/user/preference/update/PreferenceFormSection';
import { transformDataToAtomFormat } from '@/domains/user/utils/transformPreference';

const PreferenceUpdatePage = async () => {
  const data = await userService.getPreference();
  const preference = transformDataToAtomFormat(data);

  return <PreferenceFormSection data={preference} />;
};

export default PreferenceUpdatePage;
