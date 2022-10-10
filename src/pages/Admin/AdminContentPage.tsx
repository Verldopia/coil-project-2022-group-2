import { Button, TextField } from '@mui/material';
import React from 'react';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { ROUTES } from '../../constants/routes';

const AdminContentPage: React.FC = () => {
  return (
    <>
      <form className="admin-form-container" action="">
        <div className="admin-form-box">
          <h2 className="form-title">Content uploader</h2>
          <div className="admin-form-box">
            <TextField
              className="form-input"
              size="small"
              variant="outlined"
              label="Title"
              type="text"
            />
          </div>
          <div className="admin-form-box selector">
            <select>
              <option value="0">Select category</option>
              <option value="1">Camera</option>
              <option value="2">Sensor</option>
              <option value="3">Touchpad</option>
              <option value="4">Thermostat</option>
            </select>
          </div>
          <div className="admin-form-box">
            <TextField
              className="form-input"
              size="medium"
              variant="outlined"
              label="Description"
              type="text"
            />
          </div>
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
          <p>Upload images</p>
          <div className="admin-form-box">
            <TextField
              className="form-input"
              size="medium"
              variant="outlined"
              type="file"
            />
          </div>
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
