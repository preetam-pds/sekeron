import styled from "@emotion/styled";

interface IInputStyles {
    error?: any;
    value?: string;
    theme?: any;
}

export const InputStyles = styled("div") <IInputStyles>`
width:100%;
    & .MuiTextField-root {
        width: 100%;
        font-size: 1.6rem;
        font-family: 'Comfortaa-Regular';
    }
    & .input-error {
        color: ${({ theme }: any) => theme.palette.error.main};
        margin-top : 0px !important;
        font-size : 1.6rem;
        font-family : "Comfortaa-Regular";
    }
    & .MuiFormLabel-root {
        color: ${({ theme, error }: any) => error ? theme.palette.error.main : theme.palette.grey[100]} !important;
        font-size: 1.6rem;
        font-family: "Comfortaa-Regular";
    }
    &&& .Mui-focused .MuiFormLabel-root  {
        color: ${({ theme, error }: any) => error ? theme.palette.error.main : theme.palette.grey[300]};
        font-size: 1.6rem;
        font-family: "Comfortaa-Regular";
        background-color: red;
    }

    &&& .MuiInputBase-root, .MuiOutlinedInput-root, .Mui-error, .MuiOutlinedInput-notchedOutline{
        border-color: red !important;
    } 

    & .MuiOutlinedInput-root {
        color: ${({ theme, error }: any) => error ? theme.palette.error.main : theme.palette.common.white};
        & .MuiOutlinedInput-notchedOutline  {
            border-radius: 21px;
            border-color: ${({ theme, error, value }: any) => error ? theme.palette.error.main : value ? theme.palette.secondary.main : theme.palette.grey[100]} !important;
            font-size: 1.6rem;
            font-family: "Comfortaa-Regular";
        }

        &:hover .MuiOutlinedInput-notchedOutline  {
            border-color: ${({ theme, error }: any) => error ? theme.palette.error.main : theme.palette.secondary.main} ;
            font-size: 1.6rem;
            font-family: "Comfortaa-Regular";
        }
        &&&.Mui-focused  .MuiOutlinedInput-notchedOutline {
            border-color: ${({ theme, error }: any) => error ? theme.palette.error.main : theme.palette.secondary.main} ;
            font-size: 1.6rem;
            font-family: "Comfortaa-Regular";
        }
        & .MuiIconButton-root {
            color: #ffffff;
            font-size: 1.6rem;
            font-family: "Comfortaa-Regular";
        }
    }
    & .MuiPickersPopper-root {
        inset: auto auto 0px 25px;
    }
    & .error-message {
        display: flex;
        flex-direction: row
    }
    & .MuiInputBase-input {
        font-size: 1.6rem;
        font-family: "Comfortaa-Regular";
    }
    &&& .MuiSvgIcon-root {
        font-size: 2.5rem;
    }
    @media only screen and (max-width:840px){
    &&& .MuiSvgIcon-root {
        font-size: 2.3rem;
    }
    }
`

export const StyledStaticDatePicker = styled("div") <IInputStyles>`
height: 450x;
width: 100%;
   .MuiPickerStaticWrapper-content {
       border-radius: 11.6px;
       background:none;
   }

   .MuiPickersFadeTransitionGroup-root{
    height: calc(100% - 75px);
    padding: 10px;
   }

   .MuiCalendarPicker-root div{ 
    height: 100%;
   }

    &&& .MuiCalendarPicker-root {
        background-image: linear-gradient(315deg, #2ebbaf, #3e6be3);
        width:100%;
        border-radius: 11.6px;
        height: 450px;
        max-height: 450px;
    };

    &&& .MuiButtonBase-root {
        background:none;
        color: white;
        font-size:1.8rem;
        font-family: "Comfortaa-Regular";
    };

    &&& .MuiTypography-root {
        color: white;
        font-family: "Comfortaa-Regular";
        font-size:1.6rem;
    };

    &&& .MuiPickersCalendarHeader-label {
        color: white;
        font-size:1.8rem;
        font-family: "Comfortaa-Regular";
    };

    &&& .MuiYearPicker-root {
        color: white;
        font-family: "Comfortaa-Regular";
        max-height:100%;
    };

    &&& .Mui-selected {
        background-color: rgba(42, 56, 53, 0.66) 
    };

    &&& .MuiSvgIcon-root {
        font-size: 2.5rem;
        font-family: "Comfortaa-Regular";
    }

    &&& .PrivatePickersSlideTransition-root{
        justify-content: space-around;
        height: calc(100% - 50px) !important;
    }

    .MuiCalendarOrClockPicker-root .css-epd502{
        width: 100%;
        max-height: 450px;
    }

    .MuiDayPicker-weekContainer{
        justify-content:space-around
    }

    .MuiDayPicker-header{
        justify-content:space-around;
        height: 50px !important;
    }

    .MuiDayPicker-monthContainer{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .PrivatePickersYear-root{
        height: 50px !important;
    }

    .PrivatePickersYear-yearButton{
        font-size: 1.7rem;
        font-family: "Comfortaa-Regular";
    }

    @media screen and (max-width:640px){
    &&& .MuiCalendarPicker-root {
        height: 400px;
        max-height: 400px;
    };
    }
`