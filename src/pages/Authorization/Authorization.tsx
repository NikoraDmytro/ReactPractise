import React from "react";
import { CenteredDiv } from "../../component/CenteredDiv";
import { Formik, FormikHelpers, Form } from "formik";
import * as Yup from "yup";
import "./Authorization.scss";
import { AuthorizationTextInput } from "./components/AuthorizationTextInput";

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
        validationSchema={Yup.object({
          email: Yup.string().required("This field is required"),
          password: Yup.string().required("This field is required"),
        })}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ): void => {
          setSubmitting(false);
        }}
      >
        <Form className="LogInForm">
          <AuthorizationTextInput
            name="email"
            type="email"
            placeholder="Email"
          />
          <AuthorizationTextInput
            name="password"
            type="password"
            placeholder="Password"
          />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </CenteredDiv>
  );
};
