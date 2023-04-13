import React, { useEffect } from 'react';
import { Stack, TextField, Typography, useTheme } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { styled, SxProps } from '@mui/material';
import { ErrorMessage, useField } from "formik";
import ImageAssets from '../../../assets';
import { InputStyles, StyledStaticDatePicker } from './MuiDatepicker.style'
import theme from '../../../mui-themes/SekeronTheme'
import dayjs, { Dayjs } from "dayjs";
import Badge from "@mui/material/Badge";
import { PickersDay } from "@mui/x-date-pickers/PickersDay";
import { CalendarPickerSkeleton } from "@mui/x-date-pickers/CalendarPickerSkeleton";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";
interface IMuiDatePickerProps {
  name: string
  maxdate?: any
  label: string
  inputformat: string
  value: any
  onChange: (newValue: any) => void
  mindate?: any
  onBlur?: any
  disablefuture?: string
  formik?: any
  inputProps?: any
  isFormikDropDown?: boolean;
  errorMessage?: string
}
interface IItem {
  sekeronTheme: any
}

const Item = styled("div") <IItem>`
  margin-top: 0px !important;
  padding:  ${({ sekeronTheme }) => sekeronTheme.spacing(0.5)};
  text-align : 'center';
`
const Wrapper = styled("div") <any>`

@media(min-width: 320px) and (max-width: 376px) {
    .error-message-container{
    position: relative!important;
  }
}
`
const popperSx: SxProps = {
  "& .MuiPickersPopper-root ": {
    // position: 'absolute',
    // inset: 'auto auto 0px 25px'
  },
  "& .MuiPaper-root": {
    borderRadius: '11.6px',
    backgroundColor: "red",
    backgroundImage: "linear-gradient(316deg, #2ebbaf, #3e6be3)",
    fontFamily: 'Comfortaa-Regular',
  },
  "& .MuiPickersDay-root ": {
    color: '#d7d7d7',
    background: 'transparent',
    fontFamily: 'Comfortaa-Regular',
    fontSize: '1.59rem'
  },
  "& .MuiTypography-root ": {
    color: theme.palette.common.white,
    textAlign: 'center',
    background: 'transparent',
    fontFamily: 'Comfortaa-Regualar',
    fontSize: '1.6rem',
  },
  "& .MuiSvgIcon-root": {
    color: theme.palette.common.white,
    fontSize: "2rem",
    '@media (min-width:320px)  and (max-width:840px)': {
      fontSize: "1.6rem",
    }
  },
  "& .MuiInputAdornment-root ": {
    color: 'white',
    fontSize: '4.6rem !important',
    "&&& .MuiButtonBase-root": {
      ".MuiSvgIcon- root": {
        fontSize: "8rem"
      }
    },
  },
  "& .MuiPickersCalendarHeader-root  ": {
    color: theme.palette.common.white,
    textAlign: 'center',
    background: 'transparent',
    fontFamily: 'Comfortaa-Regular ',
    fontSize: '2.6rem',
    fontWeight: 'bold',
    "& .MuiPickersCalendarHeader-label ": {
      color: theme.palette.common.white,
      textAlign: 'center',
      background: 'transparent',
      fontFamily: 'Comfortaa-Regular ',
      fontSize: '1.8rem',
    }
  },
  "& .PrivatePickersYear-yearButton ": {
    color: theme.palette.common.white,
    textAlign: 'center',
    background: 'transparent',
    fontSize: '2rem',
    fontFamily: "Comfortaa-Regular"
  },
  "& .MuiCalendarPicker-root ": {
    backgroundImage: "linear-gradient(281deg, #4fd8cc, #5c88ff)",
    fontFamily: 'Comfortaa-Regular ',
    borderRadius: '16px',
  }
}

const MuiDatepicker = (props: any) => {

  const theme = useTheme()
  const { maxdate, inputformat, mindate, disablefuture, value, isFormikDropDown, errorMessage } = props;
  return (
    <InputStyles error={!value && errorMessage !== ""} theme={theme}
      value={value}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3} >
          <DesktopDatePicker
            {...props}
            value={value}
            onChange={props.onChange}
            // onBlur={props.onBlur}
            inputFormat={inputformat}
            maxDate={maxdate ? maxdate : null}
            minDate={mindate}
            // disableFuture={disablefuture == 'true' ? true : false}
            renderInput={(params: any) => {
              return (
                <TextField {...params}
                  size="medium" onChange={console.log("its in onchange")} onBlur={console.log("its in onBlur")} />
              )
            }}
            components={{
              OpenPickerIcon: CalendarMonthIcon
            }}
            PopperProps={{
              sx: popperSx
            }}
          />
        </Stack>
      </LocalizationProvider>
      <Wrapper>
        {!value && errorMessage !== "" ? (
          <Stack
            className="error-message-container"
            flexDirection={"row"}
            alignItems={"center"}
            spacing={0.5}
            sx={{ background: "none" }}
          >
            <Item sekeronTheme={theme}>
              <img src={ImageAssets.ic_error_info} />
            </Item>
            <Item sekeronTheme={theme}>
              <Typography className="input-error">{errorMessage}</Typography>
            </Item>
          </Stack>
        ) : <div style={{ visibility: "hidden", height: "27px" }}></div>}
      </Wrapper>
    </InputStyles>
  );
}

const MuiStaticDatePicker = () => {
  const initialValue = dayjs("2022-04-07");
  const requestAbortController = React.useRef<AbortController | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [highlightedDays, setHighlightedDays] = React.useState([]);
  const [value, setValue] = React.useState<Dayjs | null>(initialValue);
  const [datesToBeHoglighted, setdatesToBeHoglighted] = React.useState([
    22,
    25
  ]);

  function getRandomNumber(min: number, max: number) {
    console.log("min", min, max);
    if (min < max) {
      return min;
    }
  }

  function fakeFetch(date: Dayjs, { signal }: { signal: AbortSignal }) {
    return new Promise<{ daysToHighlight: number[] }>((resolve, reject) => {
      const timeout = setTimeout(() => {
        const daysInMonth = date.daysInMonth();
        const daysToHighlight = datesToBeHoglighted.map((item: any) =>
          getRandomNumber(item, daysInMonth)
        );
        resolve({ daysToHighlight });
      }, 500);

      signal.onabort = () => {
        clearTimeout(timeout);
        reject(new DOMException("aborted", "AbortError"));
      };
    });
  }

  const fetchHighlightedDays = (date: Dayjs) => {
    console.log("fetchHighlightedDays", date);
    const controller = new AbortController();
    fakeFetch(date, {
      signal: controller.signal
    })
      .then(({ daysToHighlight }) => {
        console.log("daysToHighlight", daysToHighlight);
        setHighlightedDays(daysToHighlight);
        setIsLoading(false);
      })
      .catch((error) => {
        // ignore the error if it's caused by `controller.abort`
        if (error.name !== "AbortError") {
          throw error;
        }
      });

    requestAbortController.current = controller;
  };

  useEffect(() => {
    fetchHighlightedDays(initialValue);
    // abort request on unmount
    return () => requestAbortController.current?.abort();
  }, []);

  const handleMonthChange = (date: Dayjs) => {
    console.log("dadatedatedatete", date);
    if (requestAbortController.current) {
      // make sure that you are aborting useless requests
      // because it is possible to switch between months pretty quickly
      requestAbortController.current.abort();
    }

    setIsLoading(true);
    setHighlightedDays([]);
    setdatesToBeHoglighted([1, 5]);
    fetchHighlightedDays(date);
  };

  console.log('its is innn render', value)
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StyledStaticDatePicker>
        <StaticDatePicker
          value={value}
          loading={isLoading}
          displayStaticWrapperAs="desktop"
          // openTo="month"
          onChange={(newValue) => {
            console.log("its is innn newValue", newValue)
            setValue(newValue);
          }}
          onMonthChange={handleMonthChange}
          // onYearChange={handleMonthChange}
          renderInput={(params) => <TextField {...params} />}
          renderLoading={() => <CalendarPickerSkeleton />}
          renderDay={(day, _value, DayComponentProps) => {
            const isSelected =
              !DayComponentProps.outsideCurrentMonth &&
              highlightedDays.indexOf(day.date()) >= 0;

            return (
              <Badge
                variant="dot"
                invisible={!isSelected}
                key={day.toString()}
                overlap="circular"
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: theme.palette.common.white,
                  }
                }}
              >
                <PickersDay  {...DayComponentProps} />
              </Badge>
            );
          }}
        />
      </StyledStaticDatePicker>
    </LocalizationProvider>
  );
}

export { MuiDatepicker, MuiStaticDatePicker }