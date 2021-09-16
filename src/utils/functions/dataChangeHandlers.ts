import { ChangeEvent, Dispatch, SetStateAction } from "react";

export const inputChangeHandler = <T>(
  event: ChangeEvent<HTMLInputElement>,
  setSubmitObject: Dispatch<SetStateAction<T>>
  // validateFunction: (value: string) => void | undefined
) => {
  // if (validateFunction) {
  //   validateFunction(event.target.value);
  // }
  setSubmitObject((prevState) => ({
    ...prevState,
    [event.target.name]: event.target.value,
  }));
};
