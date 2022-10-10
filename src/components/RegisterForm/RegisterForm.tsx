import React from 'react';
import styles from './RegisterForm.module.css';
import { TextField, Button } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

export const RegisterForm: React.FC = () => {
  return (
    <form action="">
      <div className="form-container">
        <h2 className="form-title">Register</h2>
        <div className="form-box">
          <TextField
            className="form-input"
            size="small"
            variant="outlined"
            label="Username"
            type="text"
          />
        </div>
        <div className="form-box">
          <TextField
            className="form-input"
            size="small"
            variant="outlined"
            label="Email"
            type="email"
          />
        </div>
        <div className="form-box">
          <TextField
            className="form-input"
            size="small"
            variant="outlined"
            label="Password"
            type="password"
          />
        </div>
        <div className="form-btn">
          <Button
            variant="outlined"
            startIcon={<CheckOutlinedIcon />}
          >
            Register
          </Button>
        </div>
      </div>
    </form>
  );
};
