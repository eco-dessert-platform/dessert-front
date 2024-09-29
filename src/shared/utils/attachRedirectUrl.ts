export const attachRedirectUrl = ({
  url,
  redirectUrl
}: {
  url: string;
  redirectUrl: string | null;
}) => {
  const newUrl = new URL(url, window.location.protocol + window.location.host);
  if (redirectUrl) newUrl.searchParams.append('redirect', redirectUrl);
  return newUrl.toString();
};
