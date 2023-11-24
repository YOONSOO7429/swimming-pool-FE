import { atom } from "recoil";

// user 정보 1. identification
export const identificationStr = atom<string>({
  key: "identificationState",
  default: "",
});

// user 정보 2. password
export const passwordStr = atom<string>({
  key: "passwordState",
  default: "",
});

// user 정보 3. name
export const nameStr = atom<string>({
  key: "nameState",
  default: "",
});

// user 정보 4. type
export const typeStr = atom<string>({
  key: "typeState",
  default: "",
});

// user 정보 5. gender
export const genderStr = atom<string>({
  key: "genderState",
  default: "",
});
