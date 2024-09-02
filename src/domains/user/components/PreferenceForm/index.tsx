'use client';

import DescriptionSection from '@/domains/user/components/PreferenceForm/DescriptionSection';
import CheckSection from '@/domains/user/components/PreferenceForm/CheckSection';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { DetailedHTMLProps, FormHTMLAttributes } from 'react';

const PreferenceForm = (
  props: DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement>
) => (
  <PaddingWrapper>
    <form {...props}>
      <DescriptionSection />
      <CheckSection />
    </form>
  </PaddingWrapper>
);

export default PreferenceForm;
