import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Breadcrumbs, Link } from '@mui/material';
import { Capitalize } from '../utilities';
import { useLocation } from 'react-router-dom';

const LegalPage: React.FC = () => {
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
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>ABC Private Limited</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              For SmartHomes.com (ABC Private Limited), the privacy of
              your information is our priority. This notice describes
              the personal information we will be collecting.We care
              about your rights and choices, please read the following
              legal notice and feel free to contact us with any
              questions.
            </Typography>
            <br />
            <Typography>
              Please read this Privacy Notice before using any of our
              products and/or services. We use collected information
              for:
            </Typography>
            <br />
            <ul>
              <Typography>
                Delivery of products/services and communication
              </Typography>
              <br />
              <Typography>
                Providing you with great deals, personalized services
                and recommendations to improve your experience.
              </Typography>
              <br />{' '}
              <Typography>
                Keeping you informed about marketing and promotional
                campaigns based on your profile
              </Typography>
              <br />
              <Typography>
                Preventing fraud, monetary loss, illegal activity,
                harm, and any other legal or information security
                risks.
              </Typography>
            </ul>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Information to Third Parties</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We do not believe in selling, trading or otherwise
              sharing or transferring your personal Information to
              third parties. Although, accumulated data might be
              shared to third parties for marketing, advertising, or
              other purposes. These services are not allowed to use
              your Personal Information except for the purposes
              described in this Privacy Policy.
            </Typography>
            <br />
            <Typography>
              The personal information we will be using for different
              purposes will be accurate, complete, and up to date. To
              review your information and details, you may request
              access by contacting us. In situations where your
              information has been shared with a third party, we will
              refer you to that party and you have the right to
              challenge the accuracy and completeness of your own
              data. You may also access, correct and modify your
              information by logging in to your account on our
              website.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography>Copyright and Trade-mark License </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              The information on this website including the text,
              graphics, logos, button icons, images, audio clips,
              digital downloads, data compilations, are protected by
              ABC Private Limited copyright and trademark laws.
              SmartHomes is registered under the trademarks of ABC
              Private Limited. Without the prior express written
              consent of ABC, you can not modify, copy, reproduce,
              republish, upload, post, transmit, or distribute any
              portion of the Information. If you feel, any
              information, content or text appearing on our website
              constitutes a copyright infringement of another parties’
              rights, please contact us immediately at
              legal@smarthomes.com.
            </Typography>
            <br />
            <Typography>
              For non-commercial use, you can print or download
              portions of the materials from various areas, however
              you agree that you will not change or delete any
              copyright notices from the materials or modify any
              registered mark. SmartHomes hereby grants license to
              distribute, display and promote the Information solely
              for the purpose of advertising, promoting and selling
              the products, provided you agree not to change or delete
              any copyright materials, or modify any registered mark.
              Dealers can not change any information without written
              permission of SmartHomes.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
};

export default LegalPage;
