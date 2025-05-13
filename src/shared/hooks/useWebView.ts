const useWebView = () => ({
  isWebView: typeof window !== 'undefined' && window.ReactNativeWebView
});

export default useWebView;
