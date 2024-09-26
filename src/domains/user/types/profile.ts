export interface NicknameDoubleCheckResponse {
  message: string;
}

export interface MyProfileUpdateRequest {
  profileImg: File | null;
  nickname: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
}

export interface RegistrationRequest {
  profileImg?: File;
  phoneNumber: string;
  isAllowingMarketing: boolean;
  isPersonalInfoConsented: boolean;
  isTermsOfServiceAccepted: boolean;
  nickname: string;
  birthdate?: string;
}

export interface UserProfileType {
  profileImg: string | null;
  nickname: string | null;
  phoneNumber: string | null;
  birthDate: string | null;
}

export interface WithdrawResponse {
  message: string;
}

export interface WithdrawFormType {
  deleteReasons: Array<string>;
  isAgreeChecked: boolean;
}
