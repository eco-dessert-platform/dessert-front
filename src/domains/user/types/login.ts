export type AccessTokenType = string;
export type RefreshTokenType = string;

export interface LoginResponse {
  accessToken: AccessTokenType;
  refreshToken: RefreshTokenType;
}

export interface KakaoAuthResponse {
  access_token: AccessTokenType;
  token_type: string;
  refresh_token: RefreshTokenType;
  expires_in: number;
  scope: string;
  refresh_token_expires_in: number;
}

export interface ParsedJWT {
  exp: number;
  iat: number;
  id: number;
  iss: number;
}
