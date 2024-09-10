export interface NicknameDoubleCheckResponse {
  message: string;
}

export interface MyProfileUpdateRequest {
  profileImg: File | null;
  nickname: string | null;
  sex: string | null;
  birthDate: string | null;
}

export interface RegistrationRequest {
  profileImg?: File;
  sex: string;
  isAllowingMarketing: boolean;
  isPersonalInfoConsented: boolean;
  isTermsOfServiceAccepted: boolean;
  nickname: string;
  birthDate?: string;
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
