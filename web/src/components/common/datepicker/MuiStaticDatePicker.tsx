import { styled } from "@mui/system";
import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { createTheme } from "@mui/material";

const StaticDatePickerStyle = styled('div')`
   
   &&& .MuiPaper-root {
        background-color: transparent;
   }

   &&& .MuiPickerStaticWrapper-content {
        background-color: transparent;
   }

    &&& .MuiCalendarPicker-root  {
        border-radius: 6px;
        background-image: linear-gradient(315deg, #2ebbaf, #3e6be3);
    }

    &&& .MuiPickersCalendarHeader-labelContainer {
        font-family: 'Comfortaa-Bold';
        font-size: 1.35rem;
    }

    &&& .PrivatePickersYear-yearButton {
        font-family: 'Comfortaa-Bold';
        font-size: 1.45rem;

    }
    &&& .PrivatePickersYear-yearButton.Mui-selected {
        background-color: #414141;
    }
    &&& .MuiSvgIcon-root {
        font-size: 38px;
        color:var(--white-color);
        border-radius: 20px;
    }
    &&& .MuiTypography-root {
        font-family: 'Comfortaa-Bold';
        font-size: 1.45rem;
    }
    &&& .MuiButtonBase-root {
        background-color: transparent;
        font-size: 1.45rem;
        color: var(--white-color);
    }
    &&& .MuiButtonBase-root.Mui-selected {
        color: var(--primary-theme-color);
    }
    @media screen and (max-width:370px) {
    &&& .MuiPickerStaticWrapper-content {
        min-width: 300px;
    }
     &&& .PrivatePickersYear-yearButton {
        font-family: 'Comfortaa-Bold';
        font-size: 1.45rem;
    }
}
`;

const MuiStaticDatePicker = (props: any) => {

    const { maxate, mindate, handleChange, value } = props;

    return (
        <StaticDatePickerStyle>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <StaticDatePicker
                    displayStaticWrapperAs="desktop"
                    openTo="year"
                    value={value}
                    onChange={(newValue) => {
                        handleChange(newValue)
                    }}
                    maxDate={maxate}
                    minDate={mindate}
                    renderInput={(params) => <TextField {...params} />}
                />
            </LocalizationProvider>
        </StaticDatePickerStyle >
    );
}

export default MuiStaticDatePicker;

export const tooltTipCalendar = createTheme({
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    background: 'transparent',
                    '@media (min-width:320px) and (max-width:350px)': {
                        padding: '0px',
                    },
                    padding: '0px 30px'
                }
            }
        },
    }
});