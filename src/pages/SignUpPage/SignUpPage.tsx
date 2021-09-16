import React, { FC, useState } from "react";
import { LayoutCentredStyled } from "../../components/layouts/styled/LayoutCentredStyled";
import { SignUpForm } from "../../components/forms/SignUpForm";
import {
  SignUpFormFields,
  SubmitObject,
} from "../../components/forms/SignUpForm/types";
import { SignUpFormWrapper } from "./styled/SignUpFormWrapper";

const SignUpPage: FC = () => {
  const [submitObject, setSubmitObject] = useState<SubmitObject>({
    [SignUpFormFields.NAME]: "",
    [SignUpFormFields.EMAIL]: "",
    [SignUpFormFields.PHONE]: "",
    [SignUpFormFields.LANG]: "",
  });

  const onSubmitFormHandler = () => {
    alert(JSON.stringify(submitObject));
  };

  return (
    <LayoutCentredStyled>
      <SignUpFormWrapper>
        <SignUpForm
          submitObject={submitObject}
          setSubmitObject={setSubmitObject}
          onSubmit={onSubmitFormHandler}
        />
      </SignUpFormWrapper>
    </LayoutCentredStyled>
  );
};

export default SignUpPage;
