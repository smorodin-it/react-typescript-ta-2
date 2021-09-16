export enum SignUpFormFields {
  NAME = "name",
  EMAIL = "email",
  PHONE = "phone",
  LANG = "lang",
}

export type SubmitObject = {
  [key in SignUpFormFields]: string;
};

// export interface SubmitObject {
//   name: string;
//   email: string;
//   phone: string;
//   lang: string;
//   confirmTerms: boolean;
// }

export type ErrorObject = {
  [key in keyof SubmitObject | string]?: string | string[] | undefined;
};
