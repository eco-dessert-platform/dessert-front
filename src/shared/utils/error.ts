interface Props {
  code: number;
  message: string;
}

export function throwError({ code, message }: Props) {
  throw new Error(`[ERROR ${code}] ${message}`);
}
