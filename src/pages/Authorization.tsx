import React from "react";
import { CenteredDiv } from "./../component/CenteredDiv";
import { Formik, FormikHelpers, Form, Field } from "formik";
import * as Yup from "yup";

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
      <h1>Log In</h1>
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object({
          email: Yup.string().required("Required"),
          password: Yup.string().required("Required"),
        })}
        onSubmit={(
          values: FormValues,
          { setSubmitting }: FormikHelpers<FormValues>
        ): void => {
          setSubmitting(false);
        }}
      >
        <Form>
          <Field name="email" type="email" placeholder="Email" />
          <Field name="password" type="password" placeholder="Password" />
          <button type="submit">Log In</button>
        </Form>
      </Formik>
    </CenteredDiv>
  );
};
