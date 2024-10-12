import { DetailedHTMLProps, FormHTMLAttributes } from 'react';
import HealthInfoSection from './HealthInfoSection';
import OtherInfoSection from './OtherInfoSection';

const RecommendationStep2Form = (
  props: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
) => (
  <form {...props}>
    <HealthInfoSection />
    <OtherInfoSection />
  </form>
);

export default RecommendationStep2Form;
