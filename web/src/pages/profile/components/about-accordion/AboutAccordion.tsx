import * as React from 'react';
import {AccordionSummary, AccordionDetails } from "@mui/material";
import {
  MuiAboutSubHeading,
  MuiDarkAccordion,
  MuiAboutText,
  MuiBasicDescription,
  MuiAboutIcon,
} from "../mui-styled-components";
import ReadMoreLess from "../read-more-less/ReadMoreLess";
import ExpandIcon from "../expand-icon/ExpandIcon";
import styles from './AboutAccordion.module.css'

type Props = {
  objArray:
     { icon: string; type?: string; platform?: string; detail: string }[]
    | [];
  strArray: string[] | [];
  basicInfo:
     {
        profileName: string;
        fullName: string;
        skills: string;
        description: string;
        website: string;
      }
    | {};
  title: string;
  category: string;
  expanded: string | false;
  setExpanded: (value: string | false) => void;
};

const AboutAccordion = (props: Props) => {
  const {
    objArray,
    strArray,
    title,
    category,
    basicInfo,
    expanded,
    setExpanded,
  } = props;

  const handleAccordionChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <MuiDarkAccordion
      expanded={expanded === category}
      onChange={(event, isExpanded) =>
        handleAccordionChange(isExpanded, category)
      }
    >
      <AccordionSummary
        expandIcon={<ExpandIcon thisExpanded={expanded === category} />}
        sx={{ padding: 0 }}
      >
        <MuiAboutSubHeading variant={expanded === category ? "active" : ""}>
          {title}
        </MuiAboutSubHeading>
      </AccordionSummary>
      <AccordionDetails sx={{ padding: 0 }}>
        {objArray.length !== 0 && (
          <div>
            {objArray.map((content, index) => {
              return (
                <div key={index} className={styles['accordion-detail-row']}>
                  <div className={styles['accordion-icon-container']}> 
                    <MuiAboutIcon
                      src={content.icon}
                    /> 
                  </div>                 
                  <MuiAboutText className={`${category  === 'social_media' && styles['social_media']}`}>{content.detail}</MuiAboutText>
                </div>
              );
            })}
          </div>
        )}
        {strArray.length !== 0 && (
          <div className={styles['skills-container']}>
            {strArray.map((content, index) => {
              return (
                <MuiAboutText key={index} variant="skill">
                  {content}
                </MuiAboutText>
              );
            })}
          </div>
        )}
        {Object.keys(basicInfo).length > 0 && (
          <div>
            {Object.entries(basicInfo).map((value, index) =>
              value[0] !== "description" ? (
                <MuiBasicDescription
                  key={index}
                  variant={value[0] === "website" ? "weblink" : ""}
                >
                  {value[1]}
                </MuiBasicDescription>
              ) : (
                <ReadMoreLess key={index}>{value[1]}</ReadMoreLess>
              )
            )}
          </div>
        )}
      </AccordionDetails>
    </MuiDarkAccordion>
  );
};

export default AboutAccordion;
