export interface DefaultResponse {
  success: boolean;
  code: number;
  message: string;
  fieldErrors?: [
    {
      field: string;
      msg: string;
    }
  ];
}

export interface ListResponse<T> extends DefaultResponse {
  list: T;
}

export interface ResultResponse<T> extends DefaultResponse {
  result: T;
}

export interface Cursor<T> {
  nextCursor: number;
  hasNext: boolean;
  content: T;
}
