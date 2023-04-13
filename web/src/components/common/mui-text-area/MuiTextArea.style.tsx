import { styled } from "@mui/material";

interface ICustomTextFieldProps {
    error?: any;
    value?: string;
    isErrorThere?: boolean;
}

export const MuiStyledWrapper = styled("div")<ICustomTextFieldProps>(
    ({ theme, error, value, isErrorThere }) => ({
        position: 'relative',
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

        "& .MuiOutlinedInput-root": {
            color: error || isErrorThere ? theme.palette.error.main : theme.palette.common.white,
            fontSize: '1.6rem',
            fontFamily: "Comfortaa-Regular",
            "& fieldset": {
                borderRadius: "24px",
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


interface ISliderWrapper {
    value: any
    maxLength: any
}

export const SliderWrapper = styled('div') <ISliderWrapper>`

    position: absolute;
    bottom: 0px;
    left: 2px;
    width: 100%;

    & .MuiSlider-root {
        padding: 0px;
        height:18px;
        border-radius: ${({ value, maxLength }: any) => value >= maxLength ? '0px 0px 24px 24px' : '0px 0px 0px 24px'};
    }

    & .MuiSlider-thumb {
        display: none;
    }

    & .MuiSlider-track{
        background-color: #5c88ff;
        border: none;
    }

    & .MuiSlider-rail {
        color: transparent;
    }
`
