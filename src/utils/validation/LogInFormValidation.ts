import * as Yup from "yup";

export const LogInFormValidationSchema = Yup.object({
  email: Yup.string()
    .matches(/^.([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/, "Invalid email address!")
    .required("This field is required"),
  password: Yup.string()
    .matches(
      /(?=.*[A-Za-z])/,
      "At least one character [a - z] or [A - Z] required"
    )
    .matches(/(?=.*\d)/, "At least one numeral [0 - 9] required")
    .matches(
      /^[A-Za-z\d@$!%*#?&]+$/,
      "Can only contain these symbols: [a - z, A - Z, 0 - 9, @$!%*#?&]"
    )
    .min(8, "At least 8 characters required")
    .required("This field is required"),
});
