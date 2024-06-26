import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';
import userService from '@/domains/user/queries/service';
import { preferenceQueryKey } from '@/domains/user/queries/queryKey';
import PreferenceFormSection from '@/blocks/user/preference/update/PreferenceFormSection';

const PreferenceUpdatePage = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: preferenceQueryKey.all,
    queryFn: userService.getPreference
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PreferenceFormSection />
    </HydrationBoundary>
  );
};

export default PreferenceUpdatePage;
