import React from "react";
import {
  Select,
  FormControl,
  MenuItem,
  ListItemText,
  InputLabel,
  ThemeProvider,
  Stack,
  styled,
  Typography
} from "@mui/material";
import ImageAssets from "../../../../assets";
import { StyleWrapper, PaperStyles } from "./MuiDropdown.style";
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

const Item = styled("div")(({ theme }) => ({
  marginTop: "0px",
  padding: theme.spacing(0.5),
  textAlign: 'center',
}));

const Wrapper = styled("div") <any>`
.error-message-container{
  /* position: absolute; */
}

@media(min-width: 320px) and (max-width: 376px) {
    .error-message-container{
    position: relative!important;
  }
}
`
const MuiDropdown = (props: any) => {
  const { menuitems, compo, fieldid, value, fieldvalue, onChange, errorMessage } = props;

  return (
    <StyleWrapper
      value={props.value}
      error={!props.value && errorMessage !== ""}
      isDailogOpen={props.isDailogOpen}
    >
      <ThemeProvider theme={PaperStyles}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-helper-label" >
            {props.label}
          </InputLabel>
          <Select
            labelId="demo-simple-select-helper-label"
            id="demo-simple-select-helper"
            fullWidth
            style={{ width: "100% !important" }}
            {...props}
            onChange={onChange}
            IconComponent={ArrowDropDownRoundedIcon}
          // dropdownmenuprops={dropDownMenuProps}
          >
            {menuitems
              ? menuitems.map((item: any, index: number) => {
                return (
                  <MenuItem
                    key={index}
                    value={item.id}
                  >
                    <ListItemText primary={item[fieldvalue]} primaryTypographyProps={{ fontSize: '1.6rem', fontFamily: "Comfortaa-Regular" }} />
                  </MenuItem>
                )
              })
              : null}
          </Select>

          <Wrapper>
            {!props.value && errorMessage !== "" ? (
              <Stack
                className="error-message-container"
                flexDirection={"row"}
                alignItems={"center"}
                spacing={0.5}
                sx={{ background: "none", position: "relative", fontSize: '1.6rem' }}
              >
                <Item>
                  <img alt="error" src={ImageAssets.ic_error_info} />
                </Item>
                <Item>
                  <Typography className="input-error">{errorMessage}</Typography>
                </Item>

              </Stack>
            ) : <div style={{ visibility: "hidden", height: "27px" }}></div>}
          </Wrapper>
        </FormControl>
      </ThemeProvider>
    </StyleWrapper>
  )
}

export { MuiDropdown }