import React from "react";
import { useField } from "formik";
import "./AuthorizationTextInput.scss";

interface FieldProps {
  name: string;
  [props: string]: string;
}

export const AuthorizationTextInput = ({
  name,
  ...props
}: FieldProps): JSX.Element => {
  const [field, meta] = useField(name);

  return (
    <div className="textInput">
      <input {...field} {...props} />
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </div>
  );
};
