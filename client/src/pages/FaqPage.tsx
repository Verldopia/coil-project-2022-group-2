import React from 'react';
import { Uppercase } from '../utilities';
import { useLocation } from 'react-router-dom';
import { ROUTES } from '../constants';

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

export interface IFaqPageProps {}

const FaqPage: React.FC<IFaqPageProps> = (props) => {
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
            {Uppercase(title[1])}
          </Typography>
        </Breadcrumbs>
      </div>
      <div className="container--info__images larger">
        <h1 className="margin title">Getting Started</h1>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Why should I buy from from SmartHomes.com?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              SmartHomes.com is one of the biggest home security providers in Canada.
              SmartHomes.com provides high quality products at an affordable price, all over Canada.
              Our product catalogue offers everything needed to keep your home safe and secured.
              Don’t see something? Just
              ask us! We will try everything we can to get you the
              products you need.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Why Us?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              SmartHomes.com gives you products that eliminate the 
              worry about what might happen while you are away. 
              Explore the latest items and shop for your
              every need from the comfort of your home.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <h2 className="margin title">My Order</h2>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How can I track my parcel?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Every order is given a tracking number for easy access.
              Please allow up to 48 hours to receive any tracking updates.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>I can’t find my tracking number.</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Your tracking number is given to you in your confirmation
              email. If you can’t find your confirmation email, please
              check your spam folder. For any other problems,
              please{' '}
              <a href={ROUTES.CONTACT} className="dark">
                contact us
              </a>
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Where does SmartHomes deliver?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We ship to all Canadian provinces and
              territories. For more details, please see our Shipping
              page.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>When can I expect my order?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We offer both Standard and Priority shipping options. Please see the
              table below for shipping details and options
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
              For more information about shipping, please check out our Shipping page.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <h2 className="margin title">Payment</h2>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>What payment methods does SmartHomes.com support?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We accept Debit, Credit, E-Transfer or Paypal.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              Can I pay for my order in installments?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We currently do not support payment with installments.
              We require customers to pay the full amount at checkout.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <h2 className="margin title">Promotions and Offers</h2>

        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              How do SmartHomes.com promo codes work?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can use SmartHomes promo codes to get a discount
              on your order.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Where can I enter the promo code?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              On the checkout page, you can enter your promo code under Discounts.
              The discount amount will be automatically reduced from the total.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <h2 className="margin title">Return/Exchange</h2>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              How can I return or exchange a product?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To return or exchange an item, please{' '}
              <a href={ROUTES.CONTACT} className="dark">
                contact us
              </a>
              . After speaking with customer service,
              a shipping label will be sent to your email.
              You can ship the product back to us at any post office and 
              a refund will be issued when we receive the product.
            </Typography>
            <br />
            <Typography>
              Note: We only accept returns and exchanges within 30
              days of purchase.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              When can I expect the refund amount to appear on my
              card?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              A refund will be issued within 4-5 business days upon
              arrival of the returned product.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Can I return a damaged product?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Damaged products are subject to a reduction of 50% of the total refund amount.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>How can I track my return?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can track your return through your local post office. Our
              shipping labels do not have return tracking, but you can add this on when shipping the return.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <h2 className="margin title">Other</h2>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              Can I purchase a product from SmartHomes.com in store?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We currently do not have any in store
              locations.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              How can I check if delivery is available in my area?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We deliver our products all over Canada.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              I would like to speak to the customer service. How can I
              contact them?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can speak to our customer service representatives on
              the phone or through email. For more information, please
              view the{' '}
              <a href={ROUTES.CONTACT} className="dark">
                {' '}
                contact
              </a>{' '}
              page.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default FaqPage;
