import React from 'react';
import { ROUTES, ERRORS } from '../../constants';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Styles
import { TextField, Button, Tooltip } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import styles from './RegisterForm.module.css';

const RegisterForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(15, ERRORS.NAME_TOO_LONG)
        .required(ERRORS.NAME_REQUIRED),
      email: Yup.string()
        .email(ERRORS.EMAIL_INVALID)
        .required(ERRORS.EMAIL_REQUIRED),
      password: Yup.string()
        .min(15, ERRORS.PASS_TOO_SHORT)
        .required(ERRORS.PASS_REQUIRED),
    }),
    onSubmit: (values) => {
      console.log(values);
      // formik.submitForm();
    },
  });

  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <div className="form-box">
        <h2 className="form-title">Register</h2>
        <div className="form-box-s">
          <TextField
            className="form-input"
            id="userName"
            name="userName"
            type="text"
            size="small"
            variant="outlined"
            label="Username"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.userName}
          />
          {formik.touched.userName && formik.errors.userName ? (
            <p className={styles.errorMessage}>
              {formik.errors.userName}
            </p>
          ) : null}
        </div>
        <div className="form-box-s">
          <TextField
            className="form-input"
            id="email"
            name="email"
            type="email"
            size="small"
            variant="outlined"
            label="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          {formik.touched.email && formik.errors.email ? (
            <p className={styles.errorMessage}>
              {formik.errors.email}
            </p>
          ) : null}
        </div>
        <div className="form-box-s">
          <TextField
            className="form-input"
            id="password"
            name="password"
            type="password"
            size="small"
            variant="outlined"
            label="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <p className={styles.errorMessage}>
              {formik.errors.password}
            </p>
          ) : null}
        </div>
        <div className="form-btn">
          <Button
            type="submit"
            variant="contained"
            startIcon={<CheckOutlinedIcon />}
            // href={ROUTES.LOGIN}
          >
            Register
          </Button>
          <Tooltip
            title="Login with an existing account"
            arrow
            placement="bottom"
          >
            <Button
              variant="outlined"
              startIcon={<VpnKeyOutlinedIcon />}
              href={ROUTES.LOGIN}
            >
              Login
            </Button>
          </Tooltip>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
