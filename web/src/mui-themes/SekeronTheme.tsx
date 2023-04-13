import { createTheme, Icon, responsiveFontSizes } from "@mui/material";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

let sekeronTheme = createTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 640,
      md: 840,
      lg: 1024,
      xl: 1680,
    },
  },
  palette: {
    primary: {
      main: "#0d0d0d",
      light: "#101113",
      dark: "#000000",
      100: "#191c22",
      200: "#20252f",
      300: "#20252f",
      400: "#151518"
    },
    secondary: {
      main: "#5c88ff",
      light: "#526aab",
      dark: "#487aff",
      100: "#5f7fd5",
    },
    grey: {
      100: "#576078",
      200: "#4e5567",
      300: "#a8aebc",
      400: "#7a7e88",
      500: "#8891a9",
      600: "#9fa6b9",
      
    },
    success: {
      main: "#7aeacd",
    },
    error: {
      main: "#ff7e98",
    },
    info: {
      main: "#f3a100",
    },
    common: {
      white: "#ffffff",
    },

    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
  typography: {
    fontFamily: '"Comfortaa-Regular", "Comfortaa-Medium", "Comfortaa-Light"',
  },
  shape: {
    borderRadius: 7,
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: "small",
        variant: "outlined",
        disableRipple: true,
        disableFocusRipple: true,
        disableElevation: true,
        disableTouchRipple: true,
      },
    },
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
        disableTouchRipple: true,
      },
    },
    MuiTypography: {
      defaultProps: {
        fontSize: "1rem"
      },
    },
    MuiStack: {
      defaultProps: {
        direction: "row",
      },
    },
    // MuiCheckbox: {
    //   defaultProps: {
    //     color: "default",
    //     icon: <Icon><img src={ImageAssets.ic_checkbox_unchecked} /> </Icon>,
    //     checkedIcon: <Icon><img src={ImageAssets.ic_checkbox_checked} /> </Icon>,
    //   },
    // },

  },
});

export default sekeronTheme = responsiveFontSizes(sekeronTheme);
