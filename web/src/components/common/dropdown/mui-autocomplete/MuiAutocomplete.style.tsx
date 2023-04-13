import React from "react";
import { createTheme, Grid, styled } from "@mui/material";
import ImageAssets from "../../../../assets";
import sekeronTheme from "../../../../mui-themes/SekeronTheme";
import createPalette from "@mui/material/styles/createPalette";

interface CustomTextFieldProps {
    error?: any;
    hasIcon?: string;
    value?: any[];
}

export const PaperStyles = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: sekeronTheme.palette.primary[100],
                    borderBottomLeftRadius: "20px",
                    borderBottomRightRadius: "20px",
                },
            },
        },
        MuiAutocomplete: {
            defaultProps: {
                noOptionsText: 'Not found',
            },
            styleOverrides: {
                noOptions: {
                    color: sekeronTheme.palette.common.white,
                    fontFamily: "Comfortaa-Regular",
                    fontSize: '1.6rem'
                },
                listbox: {
                    color: sekeronTheme.palette.common.white,
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
                    backgroundColor: sekeronTheme.palette.secondary.main,
                    border: "none",
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

export const CreatableAutocompleteWrapper = styled("div")<any>(
    ({ theme, error, value, backgroundColor, borderRadius }) => ({
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

        "&& .MuiFormControl-root": {
            height: "60px",
            overflowY: "auto",
            [theme.breakpoints.down('sm')]: {
                height: "50px",
            },
        },

        "&&& .MuiInputBase-root": {
            paddingRight: "0px"
        },

        "& .MuiOutlinedInput-root": {
            color: theme.palette.common.white,
            borderRadius: borderRadius ? borderRadius : "0px",
            fontWeight: 300,
            background: backgroundColor ? backgroundColor : "#151518",
            fontFamily: "Comfortaa-Bold",
            fontSize: '1.8rem',
            padding: "9px",
            [theme.breakpoints.down('sm')]: {
                padding: "4px",
            },
            "& fieldset": {
                fontFamily: "Comfortaa-Regular",
                fontSize: '1.6rem',
                border: "none",
            },
            "&:hover fieldset": {
                border: "none"
            },
            "&.Mui-focused fieldset": {
                border: "none"
            },
            "&&& .MuiButtonBase-root": {
                backgroundColor: "white",
            },
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
                width: "150px",
                height: "32px",
                [theme.breakpoints.down('sm')]: {
                    width: "100px",
                },
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
