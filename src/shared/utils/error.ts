interface Props {
  code: number;
  message: string;
}

export function throwApiError({ code, message }: Props) {
  throw new Error(`[ERROR ${code}] ${message}`);
}

export function getApiErrorMessage({ code, message }: Props) {
  return Error(`[ERROR ${code}] ${message}`);
}
