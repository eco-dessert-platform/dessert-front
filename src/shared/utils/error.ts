interface Props {
  code: number;
  message: string;
}

export function throwApiError({ code, message }: Props) {
  throw new Error(`[ERROR ${code}] ${message}`);
}

export function getErrorMessage(error: unknown) {
  if (error instanceof Error) return error.message;
  return String(error);
}
