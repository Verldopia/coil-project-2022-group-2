import { Button, TextField } from '@mui/material';
import React from 'react';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { GET_ALL_CATEGORIES } from '../../graphql/categories';
import { CategoryData } from '../../interfaces';
import { useQuery } from '@apollo/client';
import { Capitalize } from '../../utilities/TextTransform';

const AdminContentPage: React.FC = () => {
  // Fetch categories
  const { loading, error, data } = useQuery<CategoryData>(
    GET_ALL_CATEGORIES,
    { fetchPolicy: 'cache-first' }
  );
  if (loading) return <p>Loading...</p>;
  if (error) return <p>There are no categories</p>;

  return (
    <>
      <form className="admin-form-container" action="">
        <div className="admin-form-box">
          <h2 className="form-title">Content uploader</h2>

          {/* Content title box */}
          <div className="admin-form-box">
            <TextField
              className="form-input"
              size="small"
              variant="outlined"
              label="Title"
              type="text"
            />
          </div>

          {/* Content category selector box */}
          <div className="admin-form-box selector">
            <select>
              <option key="0" value="0">
                Select category
              </option>
              {data?.categories.map((item, i) => (
                <option key={item.id} value={item.id}>
                  {Capitalize(item.title)}
                </option>
              ))}
            </select>
          </div>

          {/* Content description box */}
          <div className="admin-form-box">
            <TextField
              className="form-input"
              size="medium"
              variant="outlined"
              label="Description"
              type="text"
            />
          </div>

          {/* Content price box */}
          <div className="admin-form-box--flex">
            <div className="admin-form-box">
              <TextField
                className="form-input"
                size="small"
                variant="outlined"
                label="Price"
                type="number"
              />
            </div>

            {/* Content stock box */}
            <div className="admin-form-box">
              <TextField
                className="form-input"
                size="small"
                variant="outlined"
                label="Stock"
                type="number"
              />
            </div>
          </div>

          {/* Content image uploader box */}
          <p>Upload images</p>
          <div className="admin-form-box">
            <TextField
              className="form-input"
              size="medium"
              variant="outlined"
              type="file"
            />
          </div>

          {/* Content submit button */}
          <div className="form-btn">
            <Button
              variant="contained"
              color="success"
              startIcon={<VpnKeyOutlinedIcon />}
            >
              Upload
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminContentPage;
