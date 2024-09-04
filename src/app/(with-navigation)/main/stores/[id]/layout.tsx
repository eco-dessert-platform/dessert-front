import { GenerateMetadataProps } from '@/shared/types/generateMetadata';
import { getDynamicMetadata } from '@/shared/utils/metadata';
import Header from '@/shared/components/Header';

export const generateMetadata = (props: GenerateMetadataProps) =>
  getDynamicMetadata('store-detail', props);

interface Props {
  children: React.ReactNode;
}

const MainStoreDetailLayout = async ({ children }: Props) => (
  <>
    <Header title="스토어" back />
    {children}
  </>
);

export default MainStoreDetailLayout;
