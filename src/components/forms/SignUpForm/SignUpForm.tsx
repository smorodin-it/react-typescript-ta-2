import React, { ChangeEvent, FC, FormEvent, useRef, useState } from "react";
import { Card } from "../../cards/Card";
import { Bold34Font, Regular16Font } from "../../fonts/Fonts";
import { Input } from "../../inputs/Input";
import { Select } from "../../inputs/Select";
import { languagesOptionsList } from "../../../utils/constants/languages";
import { Checkbox } from "../../inputs/Checkbox";
import { Button } from "../../buttons/Button";
import {
  ErrorObject,
  SignUpFormFields,
  SignUpFormProps,
  SubmitObject,
} from "./types";
import { inputChangeHandler } from "../../../utils/functions/dataChangeHandlers";
import { FieldsetFlexStyled } from "../styled/FieldsetFlexStyled";
import {
  regexpEmail,
  regexpPhone,
  regexpUsername,
} from "../../../utils/constants/regexp";
import { OptionObject } from "../../inputs/Select/types";

export const SignUpForm: FC<SignUpFormProps> = ({
  onSubmit,
  submitObject,
  setSubmitObject,
}) => {
  const [isTermsConfirmed, setIsTermsConfirmed] = useState<boolean>(false);
  const [errors, setErrors] = useState<ErrorObject>({} as ErrorObject);
  const form = useRef<HTMLFormElement>(null);

  const removeError = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.name in errors) {
      setErrors((prevState) => {
        const errorCopy = { ...prevState };
        delete errorCopy[event.target.name];
        return errorCopy;
      });
    }
  };

  const onBlurValidateInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    let errorMessage: string = "Введено не корректное значение";
    switch (event.target.name) {
      case SignUpFormFields.NAME:
        if (regexpUsername.test(event.target.value)) {
          removeError(event);
          return;
        }
        // errorMessage = "custom error message"
        break;

      case SignUpFormFields.EMAIL:
        if (regexpEmail.test(event.target.value)) {
          removeError(event);
          return;
        }
        // errorMessage = "custom error message"
        break;

      case SignUpFormFields.PHONE:
        if (regexpPhone.test(event.target.value)) {
          removeError(event);
          return;
        }
        // errorMessage = "custom error message"
        break;

      default:
        break;
    }

    setErrors((prevState) => ({
      ...prevState,
      [event.target.name]: errorMessage,
    }));
  };

  const onChangeSelectHandler = (option: OptionObject) => {
    setSubmitObject((prevState) => ({
      ...prevState,
      [SignUpFormFields.LANG]: option.value,
    }));
  };

  const onSubmitFormHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit();
    }
  };

  return (
    <Card>
      <Bold34Font style={{ marginBottom: "8px" }}>Регистрация</Bold34Font>
      <Regular16Font style={{ marginBottom: "53px" }}>
        Уже есть аккаунт?{" "}
        <a href="/#">
          <Regular16Font>Войти</Regular16Font>
        </a>
      </Regular16Font>

      <form onSubmit={onSubmitFormHandler} ref={form}>
        <FieldsetFlexStyled>
          <Input
            type="text"
            name={SignUpFormFields.NAME}
            label="Имя"
            placeholder="Введите Ваше имя"
            style={{ marginBottom: "33px" }}
            // onChange={onChangeInputHandler}
            onChange={(event) =>
              inputChangeHandler<SubmitObject>(event, setSubmitObject)
            }
            onBlur={onBlurValidateInputHandler}
            value={submitObject.name}
            error={errors[SignUpFormFields.NAME]}
          />
          <Input
            type="email"
            name={SignUpFormFields.EMAIL}
            label="Email"
            placeholder="Введите Ваш email"
            style={{ marginBottom: "33px" }}
            onChange={(event) =>
              inputChangeHandler<SubmitObject>(event, setSubmitObject)
            }
            onBlur={onBlurValidateInputHandler}
            value={submitObject.email}
            error={errors[SignUpFormFields.EMAIL]}
          />
          <Input
            type="tel"
            name={SignUpFormFields.PHONE}
            label="Номер телефона"
            placeholder="Введите номер телефона"
            style={{ marginBottom: "33px" }}
            onChange={(event) =>
              inputChangeHandler<SubmitObject>(event, setSubmitObject)
            }
            onBlur={onBlurValidateInputHandler}
            value={submitObject.phone}
            error={errors[SignUpFormFields.PHONE]}
          />
          <Select
            onChange={onChangeSelectHandler}
            options={languagesOptionsList}
            label="Язык"
            placeholder="Язык"
            style={{ marginBottom: "33px" }}
          />
          <Checkbox
            onChange={() => setIsTermsConfirmed((prevState) => !prevState)}
            style={{ marginBottom: "33px" }}
            checked={isTermsConfirmed}
          >
            Принимаю <a href="/#">условия</a> использования
          </Checkbox>
          <Button
            type={"submit"}
            text="Зарегистрироваться"
            onClick={() => null}
            disabled={
              !isTermsConfirmed ||
              !!Object.keys(errors).length ||
              !!Object.values(submitObject).filter((el) => el === "").length
            }
          />
        </FieldsetFlexStyled>
      </form>
    </Card>
  );
};
