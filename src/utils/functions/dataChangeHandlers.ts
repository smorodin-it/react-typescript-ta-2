import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const inputChangeHandler = <T>(
  event: ChangeEvent<HTMLInputElement>,
  setSubmitObject: Dispatch<SetStateAction<T>>
) => {
  setSubmitObject((prevState) => ({
    ...prevState,
    [event.target.name]: event.target.value,
  }));
};
