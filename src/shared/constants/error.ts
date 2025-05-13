export const ERROR_MESSAGE = {
  requiredLogin: '로그인이 필요합니다.',
  api: ({ code, message }: { code: number; message: string }) => `[${code}] ${message}`
};
