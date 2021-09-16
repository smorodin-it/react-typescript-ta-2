import { Dispatch, SetStateAction } from "react";

export enum SignUpFormFields {
  NAME = "name",
  EMAIL = "email",
  PHONE = "phone",
  LANG = "lang",
}

export type SubmitObject = {
  [key in SignUpFormFields]: string;
};

export type ErrorObject = {
  [key in keyof SubmitObject | string]?: string | string[] | undefined;
};

export interface SignUpFormProps {
  onSubmit: () => void;
  submitObject: SubmitObject;
  setSubmitObject: Dispatch<SetStateAction<SubmitObject>>;
}
