import React from "react";
import { CenteredDiv } from "../../component/CenteredDiv";
import { Formik, Form } from "formik";
import "./Authorization.scss";
import { AuthorizationTextInput } from "./components/AuthorizationTextInput";
import { LogInFormValidationSchema } from "./../../utils/validation/LogInFormValidation";
import { onFormSubmit } from "./../../utils/functions/onFormSubmit";
import { useHistory } from "react-router-dom";

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
            <AuthorizationTextInput name="password" type="text" />
            {status && status.serverError ? (
              <h3 className="serverError">
                <strong>{status.serverError}</strong>
              </h3>
            ) : null}
            <button type="submit">Log In</button>
          </Form>
        )}
      </Formik>
    </CenteredDiv>
  );
};
