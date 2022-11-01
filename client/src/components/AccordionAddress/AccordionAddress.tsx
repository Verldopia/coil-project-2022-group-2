import React from 'react';
import { ERRORS } from '../../constants';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// Styles
import styles from '../Admin/AdminContentInputForm/AdminContentInputForm.module.css';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function AccordionAddress() {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address1: '',
      address2: '',
      city: '',
      zip: '',
      country: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required(ERRORS.FIELD_REQUIRED),
      lastName: Yup.string().required(ERRORS.FIELD_REQUIRED),
      address1: Yup.string()
        .min(15, ERRORS.FIELD_TOO_SHORT)
        .required(ERRORS.FIELD_REQUIRED),
      address2: Yup.string().required(ERRORS.FIELD_REQUIRED),
      city: Yup.string().required(ERRORS.FIELD_REQUIRED),
      zip: Yup.string().required(ERRORS.FIELD_REQUIRED),
      country: Yup.string().required(ERRORS.FIELD_REQUIRED),
    }),
    onSubmit: (values) => {
      console.log('🚀 - values', values);
    },
  });

  return (
    <form
      className="admin-form-container"
      onSubmit={formik.handleSubmit}
    >
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            size="small"
            autoComplete="given-name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          {formik.touched.firstName && formik.errors.firstName ? (
            <p className={styles.errorMessage}>
              First name {formik.errors.firstName}
            </p>
          ) : null}
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            size="small"
            autoComplete="given-name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.lastName}
          />
          {formik.touched.lastName && formik.errors.lastName ? (
            <p className={styles.errorMessage}>
              Last name {formik.errors.lastName}
            </p>
          ) : null}
        </Grid>

        <Grid item xs={12}>
          <TextField
            required
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            size="small"
            autoComplete="shipping address-line1"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address1}
          />
          {formik.touched.address1 && formik.errors.address1 ? (
            <p className={styles.errorMessage}>
              Address {formik.errors.address1}
            </p>
          ) : null}
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            size="small"
            autoComplete="shipping address-line2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.address2}
          />
        </Grid>
        <Grid item xs={8} sm={4}>
          <TextField
            required
            id="city"
            name="city"
            label="City"
            fullWidth
            size="small"
            autoComplete="shipping address-level2"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.city}
          />
          {formik.touched.city && formik.errors.city ? (
            <p className={styles.errorMessage}>
              City {formik.errors.city}
            </p>
          ) : null}
        </Grid>
        <Grid item xs={8} sm={4}>
          <TextField
            required
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            size="small"
            autoComplete="shipping postal-code"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.zip}
          />
          {formik.touched.zip && formik.errors.zip ? (
            <p className={styles.errorMessage}>
              Zip {formik.errors.zip}
            </p>
          ) : null}
        </Grid>
        <Grid item xs={8} sm={4}>
          <TextField
            required
            id="country"
            name="country"
            label="Country"
            fullWidth
            size="small"
            autoComplete="shipping country"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.country}
          />
          {formik.touched.country && formik.errors.country ? (
            <p className={styles.errorMessage}>
              Country {formik.errors.country}
            </p>
          ) : null}
        </Grid>
      </Grid>
    </form>
  );
}
