import React, { FC } from "react";
import { Card } from "../../cards/Card";
import { Bold34Font, Regular16Font } from "../../fonts/Fonts";
import { Input } from "../../inputs/Input";
import { Select } from "../../inputs/Select";
import { languagesOptionsList } from "../../../utils/constants/languages";
import { Checkbox } from "../../inputs/Checkbox";
import { Button } from "../../buttons/Button";

export const SignUpForm: FC = () => {
  return (
    <Card>
      <Bold34Font>Регистрация</Bold34Font>
      <Regular16Font>
        Уже есть аккаунт?{" "}
        <a href="#">
          <Regular16Font>Войти</Regular16Font>
        </a>
      </Regular16Font>
      <Input
        type="text"
        name="name"
        label="Имя"
        placeholder="Введите Ваше имя"
      />
      <Input
        type="email"
        name="email"
        label="Email"
        placeholder="Введите Ваш email"
      />
      <Input
        type="tel"
        name="phone"
        label="Номер телефона"
        placeholder="Введите номер телефона"
      />
      <Select
        onChange={() => null}
        options={languagesOptionsList}
        label="Язык"
        placeholder="Язык"
      />
      <Checkbox setChecked={() => null}>
        Принимаю <a href="#">условия</a> использования
      </Checkbox>
      <Button wide={false} onClick={() => null}>
        Зарегистрироваться
      </Button>
    </Card>
  );
};
