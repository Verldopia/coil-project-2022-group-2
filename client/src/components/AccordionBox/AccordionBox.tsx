import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccordionAddress from '../AccordionAddress/AccordionAddress';
import AccordionPayment from '../AccordionPayment/AccordionPayment';

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
      {/* // Shipping address */}
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
            Shipping address
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <AccordionAddress />
        </AccordionDetails>
      </Accordion>

      {/* // Shipping method */}
      <Accordion
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography sx={{ width: '33%', flexShrink: 0 }}>
            Shipping method
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
            Integer sit amet egestas eros, vitae egestas augue. Duis
            vel est augue.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* // Payment details */}
      <Accordion
        expanded={expanded === 'panel4'}
        onChange={handleChange('panel4')}
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
