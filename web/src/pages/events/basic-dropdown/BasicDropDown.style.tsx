import { createTheme, styled } from "@mui/material";
import SekeronTheme from "src/mui-themes/SekeronTheme";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';
import React from "react";
import { fontFamily } from "html2canvas/dist/types/css/property-descriptors/font-family";

export const dropDownMenuProps = {
    IconComponent: () => <ArrowDropDownRoundedIcon />,
    dropdownStyle: {
        marginTop: "28px",
        color: SekeronTheme.palette.secondary[100],
    },
};

interface IBasicDropDownStyles {

}

export const BasicDropDownWrapper = styled('div') <IBasicDropDownStyles>`

width: 100%;

&&& .MuiFormControl-root {
    background-color: var(--quaternary-theme-color);
    border-radius: 12px;
}

&&& .MuiSelect-select {
    color: #5f636e;
    font-family: 'Comfortaa-Light';
    font-size: 2rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    min-width: 7vw;
}

&&& .MuiFormLabel-root{
    color: #5f636e;
    font-family: 'Comfortaa-Light';
    font-size: 2rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
}

&&& .MuiList-root  {
    background-color: var(--quinary-theme-color);
}

&&& .MuiOutlinedInput-notchedOutline{
    border:none
} 

&&& .MuiSvgIcon-root {
    color:#565a66;
    font-size: 32px;
    font-weight: lighter;
}
&&& .MuiSelect-icon{
    top: calc(100% - 3.5rem);
}

&&& .MuiMenuItem-root {
    font-size: 20px;
}

@media screen and (max-width:620px) {
    &&& .MuiSelect-select,.MuiFormLabel-root {
    font-size: 1.4rem;
    min-width: 25vw;
    }
}

@media (min-width:620px) and (max-width:1024px) {
    &&& .MuiSelect-select,.MuiFormLabel-root {
    font-size: 1.5rem;
    min-width: 15vw;
    }
}

@media screen and (min-width:1024px) {
    &&& .MuiSelect-select,.MuiFormLabel-root {
    font-size: 1.8rem;
    min-width: 10vw;
    }
}

`

export const PaperStyles = createTheme({
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    background: SekeronTheme.palette.primary[100],
                    borderRadius: "12px",
                    marginTop: "-4px",
                    position: "absolute",
                },
            },
        },
        MuiMenu: {
            styleOverrides: {
                list: {
                    marginTop: "10px",
                    color: SekeronTheme.palette.secondary[100],
                    maxHeight: '30vh'
                },
            },
        },
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    color: '#5f636e',
                    fontSize: '1.6rem',
                    fontFamily: 'Comfortaa-Light'
                }
            }
        }
    },
});