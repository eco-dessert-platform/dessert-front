'use client';

import ReactMarkdown from 'react-markdown';
import PaddingWrapper from '@/shared/components/PaddingWrapper';
import { useQuery } from '@tanstack/react-query';

const PrivacyPolicy = () => {
  const { data } = useQuery({
    queryKey: ['policy'],
    queryFn: () => fetch('/privacy-policy.md').then((response) => response.text())
  });

  return (
    <PaddingWrapper className="typo-body-12-medium [&>ul]:list-disc [&>ul]:ml-4 [&>ol]:ml-4 [&>ol]:list-decimal [&>h1]:typo-heading-20-semibold [&>h2]:typo-heading-18-semibold [&>h3]:typo-title-16-regular">
      <ReactMarkdown>{data}</ReactMarkdown>
    </PaddingWrapper>
  );
};

export default PrivacyPolicy;
