import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Breadcrumbs, Link } from '@mui/material';
import { Capitalize } from '../utilities';
import { useLocation } from 'react-router-dom';

export interface IAboutPageProps {}

const AboutPage: React.FC<IAboutPageProps> = (props) => {
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
          in Canada. The All-In-One home security company to make your home
          safe and secure.
        </h1>
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
              home security and control system provider. 
              We provide our customers with security products such as automated 
              door locks, cameras, sensors, touchpads, and thermostats.
            </Typography>
            <br />
            <Typography>
              SmartHomes.com gives you the best quality security products, at an affordable
              price. We deliver home security right to your doorstep, anywhere in Canada.
            </Typography>
            <br />
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
              SmartHomes.com gives you products that eliminate the 
              worry about what might happen while you are away. 
              Explore the latest items and shop for your
              every need from the comfort of your home.
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
              SmartHomes.com, was founded in 2009 by a group of international students,
              who noticed the need for a revolutionary home
              security and monitoring company. In the last five years,
              SmartHomes.com has become a leader in home security
              products, expanding to all provinces and offering
              a wide variety of home protection items.
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
              At SmartHomes.com, we aim to offer customer service and products that focus 
              on our customer’s needs.
              We take innovation seriously and
              we hope to generate a new era of smart connected devices
              that will help customers protect their home, their way.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default AboutPage;
