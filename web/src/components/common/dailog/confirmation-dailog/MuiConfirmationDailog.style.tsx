import { Dialog, styled } from "@mui/material";

interface IConfirmationDailogProps {
  variant: string;
}

export const ConfirmationDailogWrapper = styled(Dialog) <IConfirmationDailogProps>`
     -webkit-backdrop-filter: blur(10px);
     backdrop-filter: blur(5px);

   .MuiDialog-paper {
     background-color: var(--secondary-theme-color);
     border-radius: 49px;
     width: 430px;
     height:250px;
     display: flex;
     align-items: center;
     justify-content: center;
     padding: 20px;

  }

  .confirmation-header {
    color: var(--white-color);
    text-align: center;
  }

  .confirmation-message {
    color:var(--quinary-grey-color);
    text-align: center;
    // width: "50%",
    // height: "10%"
  }

  .cancel {
     width: 150px;
     padding: 13px;
     border-radius: 18px;
     border: solid 2px var(--primary-error-color);
     font-family: "Comfortaa-Regular";
     font-size: 1.6rem;
     font-weight: bold;
     text-align: center;
     color: var(--primary-error-color);
  }

  .save {
     width: 150px;
     border-radius: 18px;
     background-image: linear-gradient(288deg, #4fd8cc, #5c88ff);
     font-family: "Comfortaa-Regular";
     font-size: 1.6rem;
     font-weight: bold;
     text-align: center;
     color: #fff;
     padding: 10px;
  }

  .confirmation-message{
    width: 90%;
  }
  @media screen and (max-width:640px) {
  & .MuiDialog-paper {
    height:200px;
    margin:5px;
    width: 90%;
  }
   .cancel {
     width: 100px;
  }

    .save {
     width: 100px;
  }
  }
  @media (min-width:640px) and (max-width:1024px) {
  & .MuiDialog-paper {
    height:250px;
    width: 60%;
  }
  }

`
