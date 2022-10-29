import { ERRORS } from '../../../constants';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { CategoryData, ProductsData } from '../../../interfaces';

// Styles
import { TextField, Button } from '@mui/material';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import styles from './AdminContentInputForm.module.css';
import { Capitalize } from '../../../utilities/TextTransform';
import {
  CREATE_PRODUCT,
  GET_ALL_PRODUCTS,
} from '../../../graphql/products';
import { useMutation, useQuery } from '@apollo/client';

type Props = {
  catData: CategoryData | undefined;
};

const AdminContentInputForm = ({ catData }: Props) => {
  // Fetch products
  const { data } = useQuery<ProductsData>(GET_ALL_PRODUCTS, {
    fetchPolicy: 'cache-first',
  });
  // Check duplicate products, then create a new one
  function checkDuplicateProduct() {
    const duplicateTitle = data?.Items.find(
      (prod) => prod.title === formik.values.title
    );
    // If title already exists, throw error.
    if (duplicateTitle) {
      alert('This product already exists');
    }
  }

  const [createProduct] = useMutation(CREATE_PRODUCT);
  const formik = useFormik({
    initialValues: {
      title: 'testk',
      categoryId: 1,
      adminId: 1,
      price: Math.floor(Math.random() * 500),
      popularity: Math.floor(Math.random() * 100),
      archived: false,
      approved: false,
      stock: Math.floor(Math.random() * 100),
      type: 'test',
      description: '',
      mainImage: '',
    },
    validationSchema: Yup.object({
      title: Yup.string()
        .min(5, ERRORS.TITLE_TOO_SHORT)
        .required(ERRORS.TITLE_REQUIRED),
      categoryId: Yup.number().required(),
      price: Yup.number().required(ERRORS.PRICE_REQUIRED),
      stock: Yup.number().required(ERRORS.STOCK_REQUIRED),
      type: Yup.string().required(ERRORS.TYPE_REQUIRED),
      mainImage: Yup.string().required(ERRORS.IMG_REQUIRED),
      description: Yup.string()
        .min(50, ERRORS.DESC_TOO_SHORT)
        .required(ERRORS.DESC_REQUIRED),
    }),
    onSubmit: (values) => {
      checkDuplicateProduct();
      createProduct({ variables: { input: values } });
      window.location.reload();
    },
  });

  return (
    <form
      className="admin-form-container"
      onSubmit={formik.handleSubmit}
    >
      <div className="admin-form-box">
        <h2 className="form-title">Content uploader</h2>
        {/* // Content title box */}
        <div className="admin-form-box">
          <TextField
            className="form-input"
            id="title"
            name="title"
            type="text"
            size="small"
            variant="outlined"
            label="Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title ? (
            <p className={styles.errorMessage}>
              {formik.errors.title}
            </p>
          ) : null}
        </div>

        {/* // Content category selector box */}
        <div className="admin-form-box selector">
          <select
            name="categoryId"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {catData?.categories.map((cat) => (
              <option id="categoryId" key={cat.id} value={cat.id}>
                {Capitalize(cat.title)}
              </option>
            ))}
          </select>
        </div>

        {/* // Content flex box */}
        <div className="admin-form-box--flex">
          {/* // Content type input box */}
          <div className="admin-form-box">
            <TextField
              className="form-input"
              id="type"
              name="type"
              type="text"
              size="small"
              variant="outlined"
              label="Sub-category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.type}
            />
            {formik.touched.type && formik.errors.type ? (
              <p className={styles.errorMessage}>
                {formik.errors.type}
              </p>
            ) : null}
          </div>

          {/* // Content price box */}
          <div className="admin-form-box">
            <TextField
              className="form-input"
              id="price"
              name="price"
              type="number"
              size="small"
              variant="outlined"
              label="Price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.touched.price && formik.errors.price ? (
              <p className={styles.errorMessage}>
                {formik.errors.price}
              </p>
            ) : null}
          </div>

          {/* // Content stock box */}
          <div className="admin-form-box">
            <TextField
              className="form-input"
              id="stock"
              name="stock"
              type="number"
              size="small"
              variant="outlined"
              label="Stock"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.stock}
            />
            {formik.touched.stock && formik.errors.stock ? (
              <p className={styles.errorMessage}>
                {formik.errors.stock}
              </p>
            ) : null}
          </div>
        </div>

        {/* // Content description box */}
        <div className="admin-form-box">
          <TextField
            className="form-input"
            id="description"
            name="description"
            type="text"
            size="medium"
            variant="outlined"
            label="Description"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description ? (
            <p className={styles.errorMessage}>
              {formik.errors.description}
            </p>
          ) : null}
        </div>

        {/* // Content image uploader box */}
        {/* <p>Upload images</p> */}
        <div className="admin-form-box">
          {/* <TextField
            className="form-input"
            id="mainImage"
            name="mainImage"
            size="medium"
            variant="outlined"
            type="file"
            onChange={(e) => {
              formik.setFieldValue('mainImage', e.target.value);
            }}
            onBlur={formik.handleBlur}
            value={formik.values.mainImage}
          /> */}
          <TextField
            className="form-input"
            id="mainImage"
            name="mainImage"
            type="text"
            size="small"
            variant="outlined"
            label="Image URL"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.mainImage}
          />
          {formik.touched.mainImage && formik.errors.mainImage ? (
            <p className={styles.errorMessage}>
              {formik.errors.mainImage}
            </p>
          ) : null}
        </div>

        {/* // Content submit button */}
        <div className="form-btn">
          <Button
            type="submit"
            variant="contained"
            color="success"
            startIcon={<VpnKeyOutlinedIcon />}
          >
            Upload
          </Button>
        </div>
      </div>
    </form>
  );
};

export default AdminContentInputForm;
