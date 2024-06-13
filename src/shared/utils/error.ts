interface Props {
  code: number;
  message: string;
}

export function throwApiError({ code, message }: Props) {
  throw new Error(`[ERROR ${code}] ${message}`);
}
