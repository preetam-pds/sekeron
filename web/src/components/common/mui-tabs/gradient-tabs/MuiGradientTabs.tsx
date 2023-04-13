import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import styled from '@emotion/styled';

interface IMuiStyledTabs {
  isdashboardtabs?: boolean
}

const MuiStyledTabs = styled(Tabs) <IMuiStyledTabs>`
       button {
            color: #576078;
            font-size: 1.7rem;
            text-transform: capitalize;
          }
          .MuiButtonBase-root{
            min-width: 90px;
            padding: 12px 16px;
          }

     @media only screen and (max-width:840px) {
        button {
            font-size: 1.3rem;
          }

           .MuiButtonBase-root{
            min-width: 0px;
            padding: 8px 8px;
          }
      }
           button.Mui-selected {
            color: var(--octonary-blue-color);
            font-family: "Comfortaa-Bold";
          }

           .MuiTabs-flexContainer {
            border-bottom: 2px solid #4460a9;
            justify-content: ${({ isdashboardtabs }: any) => isdashboardtabs ? 'space-between' : 'space-around'};
          }

           .MuiTabs-indicator {
            border-style: solid;
            height: 0.08px;
            border-width: 0.1px;
            border-image-source: radial-gradient(circle at 55% 0, #f6f8ff, #4460a9 55%);
            border-image-slice: 0.6;
            width: 30% !important;
            margin-left: -10%;
          }
  `;

interface Props {
  tabValue: Number;
  handleTabChange: (event: React.SyntheticEvent, value: Number) => void;
  tabData: { id: number; name: string; value: string }[];
  isDashboardTabs?: any
}

const MuiGradientTabs = ({ tabData, handleTabChange, tabValue, isDashboardTabs }: Props) => {

  return (
    <Box sx={{ width: '100%', height: "50px" }}>
      <MuiStyledTabs
        value={tabValue}
        onChange={handleTabChange}
        aria-label="wrapped label tabs example"
        isdashboardtabs={isDashboardTabs}
      >
        {tabData.map((tab, index) => {
          return <Tab label={tab.name} key={index} />;
        })}
      </MuiStyledTabs>
    </Box >
  );
}
export default MuiGradientTabs