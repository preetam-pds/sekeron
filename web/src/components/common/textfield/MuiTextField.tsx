import React, { ChangeEvent, ReactNode, Fragment } from "react";
import {
  BaseTextFieldProps,
  Stack,
  TextField,
  styled,
  Typography
} from "@mui/material";
import { MuiStyledWrapper } from "./MuiTextFiled.style";
import { ErrorMessage, useField } from "formik";
import ImageAssets from "../../../assets";
import CustomAvatar from "../avatar/MuiAvatar";
import { strings } from "@sekeron/domain";

export interface IMuiTextFieldProps extends BaseTextFieldProps {

  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  InputProps?: { [key: string]: ReactNode };
  label: string;
  type?: string;
  maxLength?: number;
  name: string;
  isErrorThere?: boolean;
}

const Item = styled("div") <any>`
  margin-top: 0px !important;
  padding:  ${({ theme }) => theme.spacing(0.5)};
  text-align : 'center';
  color:var(--white-color);
`
const Wrapper = styled("div") <any>`
.error-message-container{
  font-size: 1.6rem;
}

@media screen and (max-width: 376px) {
    .error-message-container{
    position: relative !important;
  }
}
`

const MuiTextField = (props: any) => {
  const { maxLength, name, errorMessage } = props;

  return (
    <MuiStyledWrapper
      // error={props.error}
      value={props.value}
      isErrorThere={errorMessage !== ""}
    >
      <TextField
        autoComplete={"off"}
        size="medium"
        inputProps={{ maxLength: maxLength ? maxLength : '' }}
        {...props}
      />
      <Wrapper>
        {errorMessage !== "" ? (
          <Stack
            data-testid="error-message"
            className="error-message-container"
            flexDirection={"row"}
            alignItems={"center"}
            spacing={0.5}
            sx={{ background: "none" }}
          >
            <Item ><img alt="error" src={ImageAssets.ic_error_info} /></Item>
            <Item >
              <Typography className="input-error">{errorMessage}</Typography>
            </Item>
          </Stack>
        ) : <div style={{ visibility: "hidden", height: "27px" }}></div>}
      </Wrapper>
    </MuiStyledWrapper>
  );
}

export { MuiTextField }
