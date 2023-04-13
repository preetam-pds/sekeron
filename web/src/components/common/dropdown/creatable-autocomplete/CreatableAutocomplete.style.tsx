import React from "react";
import { createTheme, Grid, styled } from "@mui/material";
import ImageAssets from "../../../../assets";
import sekeronTheme from "../../../../mui-themes/SekeronTheme";

interface CustomTextFieldProps {
  error?: any;
  hasIcon?: string;
  value: any[];
}

export const PaperStyles = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: sekeronTheme.palette.primary[100],
          borderRadius: "20px",
          marginTop: "-28px",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        listbox: {
          marginTop: "28px",
          color: sekeronTheme.palette.secondary[100],
          fontFamily: "Comfortaa-Regular",
          fontSize: '1.6rem'
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          backgroundColor: sekeronTheme.palette.secondary.dark,
          width: "12px",
          height: "1px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "13.5px",
        },
      },
    },
    MuiChip: {
      defaultProps: {
        deleteIcon: (
          <Grid>
            <img alt="delete" src={ImageAssets.ic_close} />
          </Grid>
        ),
      },
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "flex-start",
          backgroundColor: sekeronTheme.palette.secondary.main,
          border: "none",
          width: "150px",
          height: "35px",
          color: sekeronTheme.palette.common.white,
          borderRadius: "13.5px",
          fontFamily: "Comfortaa-Regular",
          fontSize: '1.1rem',
        },
        label: {
          padding: "initial",
          margin: "10px 90px 10px 10px",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap",
          overflow: "hidden",
        },
        deleteIcon: {
          color: sekeronTheme.palette.primary.dark,
          borderRadius: "20px",
        },
      },
    },
  },
});

export const CreatableAutocompleteWrapper = styled("div")<CustomTextFieldProps>(
  ({ theme, error, value }) => ({
    position: "relative",
    ".input-error": {
      color: theme.palette.error.main,
      marginTop: "0px !important",
      fontFamily: "Comfortaa-Regular",
      fontSize: '1.6rem'
    },
    '.create-custom': {
      color: theme.palette.secondary[100],
    },
    "&&& .MuiFormLabel-root": {
      color: error ? theme.palette.error.main : theme.palette.grey[100],
      zIndex: 2001,
      fontFamily: "Comfortaa-Regular",
      fontSize: '1.6rem'
    },
    "& .MuiFormLabel-root .MuiInputLabel-root .Mui-focused": {
      color: error ? theme.palette.error.main : theme.palette.grey[300],
      zIndex: 2001,
      fontFamily: "Comfortaa-Regular",
      fontSize: '1.6rem'
    },
    "& .MuiOutlinedInput-root": {
      color: error ? theme.palette.error.main : theme.palette.common.white,
      borderRadius: "20px",
      zIndex: 2000,
      background: theme.palette.primary.main,
      fontFamily: "Comfortaa-Regular",
      fontSize: '1.6rem',
      "& fieldset": {
        borderRadius: "24px",
        fontFamily: "Comfortaa-Regular",
        fontSize: '1.6rem',
        borderColor: error
          ? theme.palette.error.main
          : value
            ? theme.palette.secondary.main
            : theme.palette.grey[100],
        zIndex: 2000,
      },
      "&:hover fieldset": {
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.secondary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: error
          ? theme.palette.error.main
          : theme.palette.secondary.main,
      },
      "&&& .MuiButtonBase-root": {
        backgroundColor: "white",
      },
    },
    "&& .is-invalid .MuiInputBase-root": {
      border: "1px solid blue !important",
    },

    "&& .MuiAutocomplete-listbox": {
      marginTop: "28px",
      color: theme.palette.secondary[100],
    },
    "&&& .MuiAutocomplete-root ": {
      "&& .MuiPaper-root": {
        background: theme.palette.primary[100],
        borderRadius: "20px",
        marginTop: "-28px",
      },
      "& .MuiAutocomplete-tag ": {
        width: "30%",
        height: "32px",
      }
    },
    "& .MuiChip-root ": {
      display: 'flex !important',
      justifyContent: 'space-between',
      "& .MuiChip-labelMedium ": {
        margin: '0px',
        padding: '5px'
      },
      '& .MuiChip-deleteIcon': {
        margin: '0px'
      },
    },
    "& .MuiChip-deleteIcon  ": {
      borderRadius: '50% !important',
      padding: '16px',
    }
  })
);
