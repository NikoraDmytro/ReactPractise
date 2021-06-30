import React from "react";
import { CenteredDiv } from "../../component/CenteredDiv";
import { Formik, FormikHelpers, Form } from "formik";
import "./Authorization.scss";
import { AuthorizationTextInput } from "./components/AuthorizationTextInput";
import { LogInFormValidationSchema } from "./../../utils/validation/LogInFormValidation";

interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

export const Authorization = (): JSX.Element => {
  return (
    <CenteredDiv>
      <h2>Log in</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={LogInFormValidationSchema}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ): void => {
          setSubmitting(false);
        }}
      >
        <Form className="LogInForm">
          <AuthorizationTextInput name="email" />
          <AuthorizationTextInput name="password" type="text" />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </CenteredDiv>
  );
};
