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

  let placeholder: string = name.slice(1);
  placeholder = name[0].toUpperCase() + placeholder;

  return (
    <div className="textInput">
      <input {...field} type={props.type || name} placeholder={placeholder} />
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
    </div>
  );
};
