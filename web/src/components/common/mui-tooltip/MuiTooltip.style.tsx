import { createTheme } from "@mui/material";
import SekeronTheme from "src/mui-themes/SekeronTheme";

export const tooltTipTheme = createTheme({
    components: {
        MuiTooltip: {
            styleOverrides: {
                tooltip: {
                    background: "#000000",
                    border: '1px solid #484848',
                    maxWidth: '420px',
                    '@media (min-width:320px) and (max-width:475px)': {
                        maxWidth: '275px',
                        padding: '0px',
                    },
                    '&&& .MuiTooltip-arrow:Before ': {
                        border: '1px solid #484848',
                    },
                    borderRadius: "16px",
                    marginTop: "15px"
                },
                arrow: {
                    color: "#000000",
                    fontSize: "30px",
                },
            },
        },
        MuiPopper: {
            defaultProps: {
                sx: {
                    '&&&': {
                        minWidth: '420px',
                        "& .MuiTooltip-tooltip ": {
                            '@media (min-width:320px) and (max-width:475px)': {
                                marginLeft: "8px"
                            },
                        },
                        '@media (min-width:320px) and (max-width:475px)': {
                            minWidth: '280px',
                        },
                        zIndex: 3000
                    },
                },
            },
        }
    },
});