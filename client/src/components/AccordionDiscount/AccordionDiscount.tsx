import TextField from '@mui/material/TextField';
import { Button, InputAdornment, Tooltip } from '@mui/material';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ERRORS } from '../../constants';
import styles from '../Admin/AdminContentInputForm/AdminContentInputForm.module.css';

import { Discount } from '../../interfaces';
import { GET_DISCOUNT_CODE } from '../../graphql/discount';
import { useQuery } from '@apollo/client';
import { Uppercase } from '../../utilities';

export default function AccordionDiscount() {
  const formik = useFormik({
    initialValues: {
      discount: '',
    },
    validationSchema: Yup.object({
      discount: Yup.string().min(5, ERRORS.DISC_INVALID),
    }),
    onSubmit: () => {
      // Set discount code to sessionStorage
      data &&
        sessionStorage.setItem(
          'discountCode',
          data.getDiscount ? data.getDiscount.code : ''
        );
      window.location.reload();
    },
  });

  // Get discount code from provided text
  const { data } = useQuery<Discount>(GET_DISCOUNT_CODE, {
    variables: { code: Uppercase(formik.values.discount) },
    fetchPolicy: 'cache-first',
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <TextField
        InputProps={{
          endAdornment: (
            <Tooltip title="Optional" arrow placement="bottom">
              <InputAdornment position="end">
                <QuestionMarkOutlinedIcon />
              </InputAdornment>
            </Tooltip>
          ),
        }}
        className="form-input"
        id="discount"
        name="discount"
        type="text"
        size="small"
        variant="outlined"
        label="Discount"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.discount}
      />
      {formik.touched.discount && formik.errors.discount ? (
        <p className={styles.errorMessage}>
          {formik.errors.discount}
        </p>
      ) : null}
      <div className="form-btn">
        <Button type="submit" variant="contained" color="warning">
          Submit
        </Button>
      </div>
    </form>
  );
}
