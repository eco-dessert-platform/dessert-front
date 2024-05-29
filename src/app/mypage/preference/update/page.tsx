import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import { preferenceQueryKey } from '@/domains/user/queries/queryKey';
import userService from '@/domains/user/queries/service';
import PreferenceFormSection from '@/blocks/user/preference/update/PreferenceFormSection';

const PreferenceUpdatePage = async () => {
  const queryClient = new QueryClient();
  await queryClient.fetchQuery({
    queryKey: preferenceQueryKey.all,
    queryFn: async () => {
      const data = await userService.getPreference();
      return data;
    }
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PreferenceFormSection />
    </HydrationBoundary>
  );
};

export default PreferenceUpdatePage;
