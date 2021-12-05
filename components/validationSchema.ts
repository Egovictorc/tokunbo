import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name should be of minimum 2 characters length")
    .required("Name is required"),
  file: Yup.string().required("Car image is required"),
});

export default validationSchema;
