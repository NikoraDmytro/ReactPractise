import React, { useState } from "react";
import { useField } from "formik";
import Eye from "../img/Eye.png";
import EyeSlash from "../img/EyeSlash.png";
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

export const AuthorizationPasswordInput = ({
  name,
}: FieldProps): JSX.Element => {
  const [visible, setVisible] = useState(false);
  const [field, meta] = useField(name);
  const toggleVisibility = () => setVisible(!visible);

  let placeholder: string = name.slice(1);
  placeholder = name[0].toUpperCase() + placeholder;

  const src = visible ? EyeSlash : Eye;
  const alt = visible ? "Show" : "Hide";
  const type = visible ? "text" : "password";

  return (
    <div className="textInput">
      <input {...field} type={type} placeholder={placeholder} />
      {meta.touched && meta.error ? (
        <span className="error">{meta.error}</span>
      ) : null}
      <img
        className="showPassword"
        src={src}
        alt={alt}
        onClick={toggleVisibility}
      />
    </div>
  );
};
