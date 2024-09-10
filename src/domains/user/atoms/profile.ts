import { atom, selector } from 'recoil';

import { MyProfileUpdateRequest, RegistrationRequest } from '../types/profile';

export const agreeState = atom({
  key: 'agree',
  default: {
    isAllowingMarketing: false,
    isPersonalInfoConsented: false,
    isTermsOfServiceAccepted: false
  }
});

export const profileImgState = atom<File>({
  key: 'profileImg',
  default: undefined
});

export const phoneNumberState = atom<string>({
  key: 'phoneNumber',
  default: undefined
});
export const sexState = atom<string>({
  key: 'sex',
  default: 'MAN'
});

export const nicknameState = atom<string>({
  key: 'nickname',
  default: undefined
});

export const birthDateState = atom<string>({
  key: 'birthDate',
  default: ''
});

export const registrationFormState = selector<RegistrationRequest>({
  key: 'registrationForm',

  get: ({ get }) => {
    const profileImg = get(profileImgState);
    const nickname = get(nicknameState);
    const phoneNumber = get(phoneNumberState);
    const sex = get(sexState);
    const birthDate = get(birthDateState);
    const agree = get(agreeState);

    return {
      profileImg,
      nickname,
      birthDate,
      sex,
      phoneNumber,
      ...agree
    };
  }
});

export const updateFormState = selector<MyProfileUpdateRequest>({
  key: 'updateFormState',

  get: ({ get }) => {
    const profileImg = get(profileImgState);
    const nickname = get(nicknameState);
    const sex = get(sexState);
    const phoneNumber = get(phoneNumberState);
    const birthDate = get(birthDateState);

    return {
      profileImg,
      nickname,
      birthDate,
      sex,
      phoneNumber
    };
  }
});
