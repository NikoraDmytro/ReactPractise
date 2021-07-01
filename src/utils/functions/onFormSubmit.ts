import { FormikHelpers } from "formik";
import axios from "axios";

interface FormValues {
  email: string;
  password: string;
}

export const onFormSubmit = async (
  values: FormValues,
  { setSubmitting, setStatus }: FormikHelpers<FormValues>
) => {
  try {
    const response = await axios.post(
      "https://wlapi.goally.co/v1/api/auth/login",
      values
    );
    const userToken = response.data.token;

    setStatus({ userToken: userToken });
    setSubmitting(false);
  } catch (err) {
    const errorMessage = err.response.data.message;

    setStatus({ serverError: errorMessage });
  }
};
