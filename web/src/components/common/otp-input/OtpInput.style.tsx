import { styled } from "@mui/material";

interface ICustomTextFieldProps {
  error: any;
  value: string;
}

export const OtpInputWrapper = styled("div")<ICustomTextFieldProps>(
  ({ theme, error, value }) => ({
    ".input-error": {
      color: theme.palette.error.main,
    },
    label: {
      color: theme.palette.grey[100],
    },
    "& label.Mui-focused": {
      color: theme.palette.grey[100],
    },

    "& .MuiOutlinedInput-root": {
      color: "white",
      borderRadius: "20px",
      "& fieldset": {
        borderColor: error
          ? theme.palette.error.main
          : value
          ? theme.palette.secondary.main
          : theme.palette.grey[100],
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
    },
  })
);
