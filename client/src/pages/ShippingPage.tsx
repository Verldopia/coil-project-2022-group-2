import React from 'react';
import { Capitalize } from '../utilities';
import { useLocation } from 'react-router-dom';

// Styles
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Breadcrumbs, Link } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export interface IShippingPageProps {}

const ShippingPage: React.FC<IShippingPageProps> = (props) => {
  const fullTitle = useLocation();
  const title = fullTitle.pathname.split('/');

  return (
    <div className="box">
      <div className="container--box">
        <Breadcrumbs
          className="bread--box"
          separator="›"
          aria-label="breadcrumb"
        >
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">
            {Capitalize(title[1])}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="container--info__images larger">
        <h1 className="margin title">Shipping and Delivery</h1>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Shipping</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Products offered through Smarthomes.com can only be
              delivered to addresses in Canada. All of our products
              are shipped through FedEx. You will receive a FedEx
              tracking number in your order confirmation email.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              Shipping Cost, Delivery & Duration
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The shipping cost of your package depends on the
              shipping type selected and the price of the order.
            </Typography>
            <TableContainer component={Paper} className="margin">
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>
                      Order Amount <br />
                      (before Tax)
                    </TableCell>
                    <TableCell>
                      Standard Shipping <br />
                      (8-9 Business Days)
                    </TableCell>
                    <TableCell>
                      Priority Shipping <br />
                      (2-3 Business Days)
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow
                    key="$0-$75"
                    sx={{
                      '&:last-child td, &:last-child th': {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      $0-$75
                    </TableCell>
                    <TableCell>$12.99</TableCell>
                    <TableCell>$18.99</TableCell>
                  </TableRow>
                  <TableRow
                    key="$0-$75"
                    sx={{
                      '&:last-child td, &:last-child th': {
                        border: 0,
                      },
                    }}
                  >
                    <TableCell component="th" scope="row">
                      over $76
                    </TableCell>
                    <TableCell>$10.99</TableCell>
                    <TableCell>$15.99</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>
            <Typography>
              Note: SmartHome is not responsible for any damage, loss,
              theft after the delivery. The risk to any of the
              products passes to you upon the shipper’s delivery.
            </Typography>
            <br />
            <Typography>
              The estimated arrival of your items will be available as
              soon as you order. If there are any changes in the
              expected delivery date, we will notify you via email.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Changing Your Shipping Address</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You cannot change the shipping address after the item
              has shipped. To cancel your order, you will need to wait
              until the delivery has been refused and sent back to the
              warehouse.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default ShippingPage;
