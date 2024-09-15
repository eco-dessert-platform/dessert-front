export function isWebView(userAgent: string) {
  const isIOSWebView = /iPhone|iPod|iPad/.test(userAgent) && !/Safari/.test(userAgent);

  const isAndroidWebView = /Android/.test(userAgent) && /wv/.test(userAgent);

  return isIOSWebView || isAndroidWebView;
}
