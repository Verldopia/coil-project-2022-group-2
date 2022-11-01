import React from 'react';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { Tooltip } from '@mui/material';

export default function AccordionPayment() {
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Name on card"
            fullWidth
            autoComplete="cc-name"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="expDate"
            label="Expiry date"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
          />
        </Grid>
        <Tooltip
          title="Last three digits on signature strip"
          arrow
          placement="bottom"
        >
          <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVC"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid>
        </Tooltip>
      </Grid>
    </React.Fragment>
  );
}
