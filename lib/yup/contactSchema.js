import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name must be at least 2 characters")
    .required("First Name is Required"),
  lastName: Yup.string()
    .min(2, "Last Name must be at least 2 characters")
    .required("Last Name is Required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  message: Yup.string()
    .min(8, "Your message should have at least 8 characters")
    .required("Your message is required"),
});
