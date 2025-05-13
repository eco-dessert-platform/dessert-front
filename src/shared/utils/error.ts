interface Props {
  code: number;
  message: string;
}

/**
 * @deprecated @/shared/constants/error.ts 의 ERROR_MESSAGE를 사용해주세요.
 * */
export function throwApiError({ code, message }: Props) {
  throw new Error(`[ERROR ${code}] ${message}`);
}
