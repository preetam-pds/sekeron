import React, { ChangeEvent, ReactNode, Fragment } from "react";
import {
    BaseTextFieldProps,
    Stack,
    TextField,
    styled,
    Typography,
    Slider
} from "@mui/material";
import { MuiStyledWrapper, SliderWrapper } from "./MuiTextArea.style";
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
  position: absolute;
  font-size: 1.6rem;
}

@media screen and (max-width: 376px) {
    .error-message-container{
    position: relative !important;
  }
}
`
const MuiTextArea = (props: any) => {
    const { maxLength, name } = props;

    const SliderComp = (props: any) => {

        return (
            <SliderWrapper value={props.value.length} maxLength={props?.max}>
                <Slider
                    value={props.value.length}
                    min={1}
                    step={0}
                    max={props?.max}
                    valueLabelDisplay="auto"
                    aria-labelledby="non-linear-slider"
                    size="medium"
                />
            </SliderWrapper>
        )
    }

    return (
        <Fragment>
            <MuiStyledWrapper
                value={props.value}
                isErrorThere={!props.value && props.errorMessage !== ""}
            >
                <TextField
                    autoComplete={"off"}
                    multiline
                    rows={4}
                    maxRows={4}
                    size="medium"
                    inputProps={{ maxLength: maxLength ? maxLength : '' }}
                    {...props}
                />
                <SliderComp value={props.value} max={props.maxLength} />
                <Wrapper>
                    {!props.value && props.errorMessage !== "" ? (
                        <Stack
                            data-testid="error-message"
                            className="error-message-container"
                            flexDirection={"row"}
                            alignItems={"center"}
                            spacing={0.5}
                            sx={{ background: "none" }}
                        >
                            <Item ><img alt="error" src={ImageAssets.ic_error_info} /></Item>
                            <Item><Typography className="input-error">{props.errorMessage}</Typography></Item>
                        </Stack>
                    ) : null}
                </Wrapper>
            </MuiStyledWrapper>
        </Fragment>
    );
}

export { MuiTextArea }