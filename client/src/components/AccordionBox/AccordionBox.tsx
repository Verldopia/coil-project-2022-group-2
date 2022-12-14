import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionAddress from '../AccordionAddress/AccordionAddress';
import AccordionPayment from '../AccordionPayment/AccordionPayment';
import AccordionDiscount from '../AccordionDiscount/AccordionDiscount';

export default function AccordionBox() {
  const [expanded, setExpanded] = React.useState<string | false>(
    'panel1'
  );

  const handleChange =
    (panel: string) =>
    (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <>
      {/* // Discount box */}
      <Accordion
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Discount
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionDiscount />
        </AccordionDetails>
      </Accordion>

      {/* // Shipping address */}
      <Accordion
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
        id="step-13"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Shipping address
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionAddress />
        </AccordionDetails>
      </Accordion>

      {/* // Payment details */}
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
        id="step-14"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Payment
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionPayment />
        </AccordionDetails>
      </Accordion>
    </>
  );
}
