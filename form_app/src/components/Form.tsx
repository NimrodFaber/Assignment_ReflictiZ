import {
  Box,
  Button,
  Divider,
  Paper,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import formikValidateUsingJoi from "../utils/frormikValidate";
import Joi from "joi";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";

function Form() {
  const validationSchema = yup.object({
    firstName: yup.string().min(2, "Too Short!").required("required"),
    lastName: yup.string().min(2, "Too Short!").required("required"),
    streetAddress: yup.string().min(2, "Too Short!").required("required"),
    city: yup.string().min(2, "Too Short!").required("required"),
    state: yup.string().min(2, "Too Short!").required("required"),
    zipCode: yup.string().min(2, "Too Short!").required("required"),
    email: yup.string().email().min(2, "Too Short!").required("required"),
    phone: yup
      .string()
      .min(11, "Too Short you need your country code!")

      .required("required "),
  });

  const form = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstName: "",
      lastName: "",
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      email: "",
      phone: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log({ values });
      alert("hey");
      axios.post("http://localhost:3000/checkout", values).then(() => {
        console.log("done");
      });
    },
  });
  return (
    <Paper sx={{ padding: 5 }}>
      <Stack spacing={3} display={"flex"}>
        {/* <form noValidate autoComplete="off" onSubmit={form.handleSubmit}> */}
        <Typography variant="h6" fontWeight="bold" align="left">
          Ship to
        </Typography>
        <Divider />
        <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
          <TextField
            id="firstName"
            label="First Name"
            name="firstName"
            value={form.values.firstName}
            onChange={form.handleChange}
            className={
              form.errors.firstName && form.touched.firstName
                ? "input-error"
                : ""
            }
            error={form.touched.firstName && Boolean(form.errors.firstName)}
            helperText={form.errors.firstName}
          />
          <TextField
            id="outlined-Last Name-error"
            label="Last Name"
            name="lastName"
            value={form.values.lastName}
            onChange={form.handleChange}
            error={form.touched.lastName && Boolean(form.errors.lastName)}
            helperText={form.errors.lastName}
          />
        </Box>
        <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
          {" "}
          <TextField
            id="outlined-Street Address"
            label="Street Address"
            name="streetAddress"
            value={form.values.streetAddress}
            onChange={form.handleChange}
            error={
              form.touched.streetAddress && Boolean(form.errors.streetAddress)
            }
            helperText={form.errors.streetAddress}
          />
          <TextField
            id="outlined-City"
            label="City"
            name="city"
            value={form.values.city}
            onChange={form.handleChange}
            error={form.touched.firstName && Boolean(form.errors.city)}
            helperText={form.errors.city}
          />
        </Box>

        <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
          <TextField
            id="outlined-State"
            label="State"
            name="state"
            value={form.values.state}
            onChange={form.handleChange}
            error={form.touched.state && Boolean(form.errors.state)}
            helperText={form.errors.state}
          />
          <TextField
            id="outlined-Zip-Code"
            label="Zip-Code"
            name="zipCode"
            value={form.values.zipCode}
            onChange={form.handleChange}
            error={form.touched.zipCode && Boolean(form.errors.zipCode)}
            helperText={form.errors.zipCode}
          />
        </Box>

        <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
          <TextField
            id="outlined-Email"
            label="Email"
            name="email"
            value={form.values.email}
            onChange={form.handleChange}
            error={form.touched.email && Boolean(form.errors.email)}
            helperText={form.errors.email}
          />
          <TextField
            id="outlined-Phone"
            label="Phone"
            name="phone"
            value={form.values.phone}
            onChange={form.handleChange}
            error={form.touched.phone && Boolean(form.errors.phone)}
            helperText={form.errors.phone}
          />
        </Box>
        <Box display={"flex"} sx={{ justifyContent: "space-evenly" }}>
          <Button
            onClick={() => form.handleSubmit()}
            type="submit"
            variant="contained"
            endIcon={<AttachMoneyIcon />}
          >
            Send
          </Button>
        </Box>
        {/* </form> */}
      </Stack>
    </Paper>
  );
}

export default Form;
