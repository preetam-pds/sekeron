import React from 'react';
import { MuiAccordianWrapper } from './MuiAccordian.style';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

interface IMuiAccordian {
    header: any
    children: React.ReactNode
}

const MuiAccordian = (props: IMuiAccordian) => {

    const { header, children }: any = props;
    
    return (
        <MuiAccordianWrapper>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ArrowDropDownRoundedIcon sx={{ fontSize: '84px', color: '#3b404c' }} />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{header}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    {children}
                </AccordionDetails>
            </Accordion>
        </MuiAccordianWrapper>
    )
}

export default MuiAccordian