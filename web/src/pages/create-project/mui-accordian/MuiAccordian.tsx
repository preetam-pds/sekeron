import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordianStyledWrapper } from './MuiAccordian.style';
import { Stack } from '@mui/system';
import { strings } from '@sekeron/domain';
import { useSelector } from 'react-redux';

const ControlledAccordions = () => {
    const createProjectState = useSelector((state: any) => state.CreateProjectRedux)

    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange =
        (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
            setExpanded(isExpanded ? panel : false);
        };

    return (
        <div>
            <AccordianStyledWrapper>
                {
                    createProjectState.projectDetails.collaborators.artists.map((artistTypeData, index) => (
                        <Accordion style={{ marginBottom: "15px" }} expanded={expanded === `panel1+${index}`} onChange={handleChange(`panel1+${index}`)}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1bh-content"
                                id="panel1bh-header"
                            >
                                <Stack justifyContent={"space-between"} sx={{ width: "95%" }} alignItems="center">
                                    <Typography className="artist-type">{artistTypeData.artistType}</Typography>
                                    <Stack sx={{ columnGap: { xs: 2, sm: 2, md: 3, lg: 3, xl: 3 } }} columnGap={3} alignItems="center">
                                        <Typography className="required-artist">{strings.requiredArtist}</Typography>
                                        <div className="required-artists-container">
                                            <Typography className="number-of-required-artist">{artistTypeData.numberOfArtistRequired}</Typography>
                                        </div>
                                    </Stack>
                                </Stack>
                            </AccordionSummary>

                            <AccordionDetails>
                                <Stack direction="column" rowGap={2}>
                                    <hr className='line-break' />
                                    <Typography className="terms-header">{artistTypeData.artistType} Collaboration Terms</Typography>
                                    <Stack direction="column" rowGap={2}>
                                        {artistTypeData.projectRequirements.map((item) => (
                                            <Stack columnGap={2} alignItems="center">
                                                <div className='point'></div>
                                                <Typography className='terms'>{item.terms}</Typography>
                                            </Stack>
                                        ))}
                                    </Stack>
                                </Stack>

                            </AccordionDetails>
                        </Accordion>
                    ))
                }
               
            </AccordianStyledWrapper>

        </div>
    );
}

export default ControlledAccordions
