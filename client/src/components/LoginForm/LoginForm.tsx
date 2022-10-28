import React from 'react';
import { ROUTES, ERRORS } from '../../constants';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Styles
import { TextField, Button, Tooltip } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import styles from './LoginForm.module.css';
import LoginUser from '../../hooks/LoginUser';
import { useQuery } from '@apollo/client';
import { User } from '../../interfaces';
import { GET_USER_LOGIN } from '../../graphql/users';

const LoginForm: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      password: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string().required(ERRORS.NAME_REQUIRED),
      password: Yup.string().required(ERRORS.PASS_REQUIRED),
    }),
    onSubmit: (values, { setSubmitting }) => {
      console.log(typeof values.userName, values.userName);
      setTimeout(() => {
        setSubmitting(false);
      }, 400);
    },
  });
  return (
    <form className="form-container" onSubmit={formik.handleSubmit}>
      <div className="form-box">
        <h2 className="form-title">Login</h2>
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
            disabled={formik.isSubmitting}
            type="submit"
            variant="contained"
            startIcon={<CheckOutlinedIcon />}
            // href={ROUTES.LANDING}
          >
            Login
          </Button>
          <Tooltip
            title="Register new account"
            arrow
            placement="bottom"
          >
            <Button
              variant="outlined"
              startIcon={<VpnKeyOutlinedIcon />}
              href={ROUTES.REGISTER}
            >
              Register
            </Button>
          </Tooltip>
          <Tooltip
            title="Don't have an account? Go to register"
            arrow
            placement="bottom"
          >
            <Button className="form-btn--password" variant="text">
              {<QuestionMarkOutlinedIcon />}
            </Button>
          </Tooltip>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
