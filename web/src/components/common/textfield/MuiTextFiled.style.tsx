import { styled } from "@mui/material";

interface ICustomTextFieldProps {
  error?: any;
  value?: string;
  isErrorThere?: boolean;
}

export const MuiStyledWrapper = styled("div")<ICustomTextFieldProps>(
  ({ theme, error, value, isErrorThere }) => ({
    width: "100%",
    ".input-error": {
      color: theme.palette.error.main,
      marginTop: "0px !important",
      fontFamily: "Comfortaa-Regular"
    },

    ".success-message": {
      color: theme.palette.success.main,
      fontFamily: "Comfortaa-Regular"
    },

    label: {
      color: error || isErrorThere ? theme.palette.error.main : theme.palette.grey[100],
      fontSize: '1.6rem',
      fontFamily: "Comfortaa-Regular"
    },

    "& label.Mui-focused": {
      color: error || isErrorThere ? theme.palette.error.main : theme.palette.grey[300],
      fontFamily: "Comfortaa-Regular",
      fontSize: '1.6rem',
    },

    "&& .MuiInputBase-input": {
      padding: '14px'
    },
    "& .MuiOutlinedInput-root": {
      color: error || isErrorThere ? theme.palette.error.main : theme.palette.common.white,
      fontSize: '1.6rem',
      fontFamily: "Comfortaa-Regular",
      // backgroundColor: theme.palette.primary[400],
      borderRadius: "21px",
      "& fieldset": {
        borderRadius: "21px",
        borderColor: error || isErrorThere
          ? theme.palette.error.main
          : value
            ? theme.palette.secondary.main
            : theme.palette.grey[100],
      },

      "&:hover fieldset": {
        borderColor: error || isErrorThere
          ? theme.palette.error.main
          : theme.palette.secondary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: error || isErrorThere
          ? theme.palette.error.main
          : theme.palette.secondary.main,
      },
    },

  })
);
