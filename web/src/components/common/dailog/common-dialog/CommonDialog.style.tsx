import { Dialog, styled } from "@mui/material";

export const CommonDialogStyle = styled(Dialog) <any>`

  -webkit-backdrop-filter: blur(17px);
  backdrop-filter: blur(17px);

&&& .MuiDialogContent-root {
    padding:0px
}

&&& .MuiPaper-root {
    background-color: var(--quaternary-theme-color);
    min-width: 45vw;
    border-radius: 18px;
    max-height: 80vh;
    min-height: 45vh;
}

 &&& .title-text{
    font-size: 2rem;
    font-family: 'Comfortaa-Bold';
    font-size: 2.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--white-color);
    padding: 10px 0px 10px 20px;
 }

 @media screen and (max-width:640px) {
  &&& .MuiPaper-root {
    background-color: var(--quaternary-theme-color);
    min-width: 90%;
    border-radius: 18px;
    min-height: 90vh;
  }

   &&& .title-text{
    padding: 0px;
 }
}

 @media (min-width:640px) and (max-width:1024px) {
  &&& .MuiPaper-root {
    min-width: 60%;
    border-radius: 18px;
    min-height: 93.5vh;
  }
  }
` 