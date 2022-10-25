import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';


export default function SimpleAccordion() {
  return (
   



    
    <div>
      
      <Accordion>
        <AccordionSummary
          
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Historial Academica</Typography>
        </AccordionSummary> 
        <AccordionDetails>
          <Typography>
            Aqui va la Informacion del @User
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Cusros Inscritos</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Aqui va la Informacion del @User
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
           
        </AccordionSummary>
      </Accordion>
    </div>
  );
}