import * as React from "react";
import { Checkbox, CheckboxProps, FormControlLabel, useTheme } from "@mui/material";
interface CustomCheckboxProps extends CheckboxProps {
  checked: boolean;
  name?: string;
  uncheckedIcon: any;
  checkedicon: any;
  label: string;
}

const MuiCheckbox = (props: any) => {
  const { checkedicon, uncheckedIcon, label, checked } = props
  const theme = useTheme()
  return (
    <FormControlLabel
      value="start"
      control={<Checkbox
        disableRipple
        checkedIcon={
          <img
            alt="checked"
            src={checkedicon} />
        }
        icon={
          <img
            alt="unchecked"
            src={uncheckedIcon}
          />
        }
        inputProps={{ "aria-label": "Checkbox demo" }}
        {...props}
      />}
      sx={{
        color: checked ? theme.palette.common.white : theme.palette.grey[400],
        '& .MuiSvgIcon-root': { fontSize: 28 },
        '&.Mui-checked': {
          color: "red",
        },
        '& .MuiTypography-root': {
          fontFamily: 'Comfortaa-Light',
          fontSize: '1.4rem'
        }
      }}
      label={label}
      labelPlacement="end"
    />

  );
}
export { MuiCheckbox }
