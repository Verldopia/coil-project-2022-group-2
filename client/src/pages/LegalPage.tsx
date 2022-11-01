import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Breadcrumbs, Link } from '@mui/material';
import { Capitalize } from '../utilities';
import { useLocation } from 'react-router-dom';

export interface ILegalPageProps {}

const LegalPage: React.FC<ILegalPageProps> = (props) => {
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
        <h1 className="padding title">
          SmartHomes provides home security to around 2,007,000 homes
          in Canada.
        </h1>
        <h2 className="padding title">
          The All-In-One commerce company to make your Home Safe and
          Secure.
        </h2>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>What is SmartHomes.com?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              SmartHomes.com (ABC Private Limited) is Canada’s largest
              home security and control system provider. With our
              catalog, you will find everything you are looking for.
              We have automated door locks, cameras, sensors,
              touchpads, and thermostats; you name it and we have it
              all.
            </Typography>
            <br />
            <Typography>
              We give you multiple options to choose from in every
              category, the best quality available at an affordable
              price. Select your items and your order will be
              delivered right to your doorstep, anywhere in Canada.
            </Typography>
            <br />
            <Typography>We guarantee the best quality!</Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Why Us?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              SmartHomes.com gives you products that help you to leave
              your home without worrying about break-ins, gas leaks,
              or fires. Explore the latest items and shop for your
              every need from the comfort of your home or office. No
              more getting worried about theft, leaky water pipes or
              fire; get everything you need, when you need, right at
              your doorstep.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Our story</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              SmartHome is the first commerce platform in Canada to
              make homes a safe place for homeowners. SmartHome.com,
              founded in 2009 by a group of international students,
              Ben Richards, Harry Evans and Priya Sharma. When they
              came to Toronto, they found a gap in the market for home
              security and monitoring. Over the last five years,
              SmartHomes.com has been a leader in home security
              products, expanding throughout the country and offering
              a wide variety of home-protection items. They are
              launching the latest items to help people live a relaxed
              and stress-free life in Canada.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Our Vision</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We aim to offer consistency that focuses on our
              customer’s needs and delivering leading-edge products.
              We take our security products and innovation seriously,
              we hope to generate a new era of smart connected devices
              that will enhance privacy and give customers the
              opportunity to protect their home, their way.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default LegalPage;
