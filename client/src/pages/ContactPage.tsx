import React from 'react';
import { useLocation } from 'react-router-dom';

// Styles
import { Breadcrumbs, Link } from '@mui/material';
import Typography from '@mui/material/Typography';
import { Capitalize } from '../utilities';

const ContactPage: React.FC = () => {
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
        <h1>We Would Love To Hear From You</h1>
        <h2>We are ready to answer all your questions!</h2>
        <h5>Our customer services guarantee you:</h5>
        <ul>
          <li className="listItem">
            A response within 2 business days
          </li>
          <li className="listItem">
            Assistance by a responsible and emphatic specialist
          </li>
          <li className="listItem">
            A follow-up email with your summarized plan of action
          </li>
        </ul>
        <br />
        <h5>To better help you, you can give us a call:</h5>
        <ul>
          <li className="listItem">+1 123-987-7411</li>
          <li className="listItem">+1 123-987-7412</li>
          <li className="listItem">+1 123-987-7413</li>
        </ul>
        <br />
        <span>OR</span>
        <br />
        <br />
        <p>
          Send us an email at:{' '}
          <a className="dark" href="mailto:hello@smarhomes.ca">
            hello@smarhomes.ca
          </a>
        </p>
        <h3>We are here for you.</h3>
        <ul>
          <li>Monday-Friday: 11:00AM-12:AM</li>
          <li>Saturday -Sunday- 10:00AM-9:00AM</li>
        </ul>
      </div>
    </div>
  );
};

export default ContactPage;
