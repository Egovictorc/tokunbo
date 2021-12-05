import React, { useRef, useState } from "react";

import { useFormik } from "formik";
import validationSchema from "./validationSchema";
import { Stack, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { IData } from "./types";
import CarImage from "./CarImage";

const CarForm: React.FC<{
  setData: React.Dispatch<React.SetStateAction<IData>>;
}> = ({ setData }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [{ alt, src }, setImg] = useState({
    src: "/car_100px.png",
    alt: "Upload an Image",
  });

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      let url = URL.createObjectURL(files[0]);
      setImg({
        src: URL.createObjectURL(files[0]),
        alt: files[0].name,
      });
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      file: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setIsSubmitting(true);
      setTimeout(() => {
        setIsSubmitting(false);
        setData({
            show: true,
            name: values.name,
            alt,
            src
        })
      }, 2000);
    },
  });


  return (
    <Stack
      component="form"
      noValidate
      onSubmit={formik.handleSubmit}
      spacing={3}
      alignItems="start"
    >
  
  <CarImage src={src} alt={alt} />
      <TextField
        required
        fullWidth
        variant="outlined"
        name="name"
        label="Your name"
        onChange={formik.handleChange}
        value={formik.values.name}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        required
        fullWidth
        variant="outlined"
        type="file"
        label="Car Image"
        name="file"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          formik.handleChange(e);
          handleFileChange(e);
        }}
        InputLabelProps={{ shrink: true }}
        value={formik.values.file}
        error={formik.touched.file && Boolean(formik.errors.file)}
        helperText={formik.touched.file && formik.errors.file}
      />
      <LoadingButton
        loading={isSubmitting}
        variant="outlined"
        type="submit"
      >
        Upload
      </LoadingButton>
    </Stack>
  );
};

export default CarForm;
