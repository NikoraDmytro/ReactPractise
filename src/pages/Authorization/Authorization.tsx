import React from "react";
import { CenteredDiv } from "../../components/CenteredDiv/CenteredDiv";
import { Formik, Form } from "formik";
import "./Authorization.scss";
import {
  AuthorizationTextInput,
  AuthorizationPasswordInput,
} from "./components/AuthorizationTextInput";
import { LogInFormValidationSchema } from "./../../utils/validation/LogInFormValidation";
import { onFormSubmit } from "./../../utils/functions/onFormSubmit";
import { useHistory } from "react-router-dom";

interface FormStatus {
  status: { serverError?: string; userToken?: string };
}
interface FormValues {
  email: string;
  password: string;
}

const initialValues: FormValues = {
  email: "",
  password: "",
};

export const Authorization = (): JSX.Element => {
  const history = useHistory();

  const ServerError = ({ status }: FormStatus): JSX.Element | null => {
    if (status && status.serverError)
      return (
        <h3 className="serverError">
          <strong>{status.serverError}</strong>
        </h3>
      );
    else return null;
  };

  return (
    <CenteredDiv>
      <h2>Log in</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={LogInFormValidationSchema}
        onSubmit={onFormSubmit}
      >
        {({ status }) => (
          <Form className="LogInForm">
            {status && status.userToken ? history.push(status.userToken) : null}

            <AuthorizationTextInput name="email" />
            <AuthorizationPasswordInput name="password" type="text" />

            <ServerError status={status} />
            <button type="submit">Log In</button>
          </Form>
        )}
      </Formik>
    </CenteredDiv>
  );
};
