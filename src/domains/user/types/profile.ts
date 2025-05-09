export interface NicknameDoubleCheckResponse {
  message: string;
  isValid: boolean;
}

export interface MyProfileUpdateRequest {
  profileImg: string | null;
  nickname: string | null;
  sex: string;
  birthDate: string | null;
}

export interface RegistrationRequest {
  profileImg?: string;
  sex: string;
  isAllowingMarketing: boolean;
  isPersonalInfoConsented: boolean;
  isTermsOfServiceAccepted: boolean;
  nickname: string;
  birthDate: string;
}

export interface UserProfileType {
  profileImg: string | null;
  nickname: string | null;
  sex: string;
  birthDate: string | null;
}

export interface WithdrawResponse {
  message: string;
}

export interface WithdrawFormType {
  deleteReasons: Array<string>;
  isAgreeChecked: boolean;
}
