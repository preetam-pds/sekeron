import React from "react";
import { createTheme, styled } from "@mui/material";
import sekeronTheme from "../../../../mui-themes/SekeronTheme";

export const dropDownMenuProps = {
  // IconComponent: () => <ArrowDropDownRoundedIcon />,
  dropdownStyle: {
    // marginTop: "28px",
    color: sekeronTheme.palette.secondary[100],
  },
};
export const PaperStyles = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: sekeronTheme.palette.primary[100],
          // position: 'relative',
          // height: '90px',
          // backgroundColor: '#F66969',
          // borderRadius: '0px',
          // "::before": {
          //   content: '""',
          //   position: "absolute",
          //   backgroundColor: "transparent",
          //   height: "50px",
          //   width: "100%",
          //   borderTopRightRadius: "25px",
          //   boxShadow: "0 -25px 0 0 white",
          //   transform: "rotate(180deg)",
          //   bottom: '100px',
          //   borderTopLeftRadius: "25px",
          // },
          // borderRadius: "-60px -60px 0 0 !important",
          // left: "0",
          // right: "0",
          // marginTop: "-28px",

          // position: "absolute",
          // content: '""',
          // bottom: "-25px",
          // height: "200px",
          // borderRadius: "50%",

          // borderRadius: "20px",
          // borderTopLeftRadius: "30%",
          // borderTopRightRadius: "30%",
          // userSelect: "none",
          // position: "absolute",

          //   position: absolute;
          //   height: 80px;
          //   left: -10 %;
          //   right: -10 %;
          // bottom: -25px;
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        list: {
          // marginTop: "28px",
          color: sekeronTheme.palette.secondary[100],
        },
      },
    },
  },
});

export const StyleWrapper = styled("div")<any>(
  ({ theme, error, value, isdailogopen }) => ({
    ".input-error": {
      color: theme.palette.error.main,
      fontFamily: "Comfortaa-Regular",
      fontSize: '1.6rem'
    },
    "&&& label:focused": {
      color: error ? theme.palette.error.main : theme.palette.grey[300],
      fontSize: '1.6rem',
      fontFamily: "Comfortaa-Regular"
    },

    "&&& .MuiFormControl-root": {
      visibility: isdailogopen ? "hidden" : "show",
    },
    "&&& .MuiFormLabel-root": {
      color: error ? theme.palette.error.main : theme.palette.grey[100],
      // zIndex: 2001,
      fontSize: '1.6rem',
      fontFamily: "Comfortaa-Regular"
    },
    "& .MuiFormLabel-root .MuiInputLabel-root .Mui-focused": {
      color: error ? theme.palette.error.main : theme.palette.grey[300],
      // zIndex: 2001,
      fontSize: '1.6rem',
      fontFamily: "Comfortaa-Regular"
    },
    "& .MuiOutlinedInput-root": {
      color: error ? theme.palette.error.main : theme.palette.common.white,
      borderRadius: "20px",
      position: "relative",
      // background: theme.palette.primary.dark,
      // zIndex: 1301,
      "& fieldset": {
        borderRadius: "20px",
        borderColor: error
          ? theme.palette.error.main
          : value
            ? theme.palette.secondary.main
            : theme.palette.grey[100],
        fontFamily: "Comfortaa-Regular",
        fontSize: '1.6rem',
      },
      "&:hover fieldset": {
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.secondary.main,
        fontSize: '1.6rem',
        fontFamily: "Comfortaa-Regular"
      },
      "&.Mui-focused fieldset": {
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.secondary.main,
        fontSize: '1.6rem',
        fontFamily: "Comfortaa-Regular"
      },
      "&&& .MuiButtonBase-root": {
        backgroundColor: theme.palette.common.white,
      },
    },

    "&&& .MuiSelect-select": {
      padding: value ? "11.5px 19px" : "16.5px 19px",
    },

    "&&& .MuiSvgIcon-root": {
      fill: theme.palette.common.white,
      fontSize: "50px"
    },
    "& .MuiInputBase-input ": {
      fontSize: '1.6rem',
      fontFamily: "Comfortaa-Regular"
    },
    "& .MuiTypography-root": {
      fontSize: '1.6rem'
    }
  }),
);
