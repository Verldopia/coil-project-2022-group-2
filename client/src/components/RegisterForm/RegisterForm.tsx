import React from 'react';
import { TextField, Button } from '@mui/material';
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { ROUTES } from '../../constants/routes';

export const RegisterForm: React.FC = () => {
  return (
    <form className="form-container" action="">
      <div className="form-box">
        <h2 className="form-title">Register</h2>
        <div className="form-box-s">
          <TextField
            required
            className="form-input"
            size="small"
            variant="outlined"
            label="Username"
            type="text"
          />
        </div>
        <div className="form-box-s">
          <TextField
            required
            className="form-input"
            size="small"
            variant="outlined"
            label="Email"
            type="email"
          />
        </div>
        <div className="form-box-s">
          <TextField
            required
            className="form-input"
            size="small"
            variant="outlined"
            label="Password"
            type="password"
          />
        </div>
        <div className="form-btn">
          <Button
            variant="contained"
            startIcon={<CheckOutlinedIcon />}
            href={ROUTES.LOGIN}
          >
            Register
          </Button>
          <Button
            variant="outlined"
            startIcon={<VpnKeyOutlinedIcon />}
            href={ROUTES.LOGIN}
          >
            Login
          </Button>
        </div>
      </div>
    </form>
  );
};
