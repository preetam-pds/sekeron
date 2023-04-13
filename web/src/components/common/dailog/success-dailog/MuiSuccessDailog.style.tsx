import { Dialog, styled } from "@mui/material";

interface CustomSuccessDailogStyleProps {
  varient: string;
}

export const CustomStyledSuccessDailog = styled(Dialog) <CustomSuccessDailogStyleProps>`
  -webkit-backdrop-filter: blur(17px);
  backdrop-filter: blur(17px);
  background-color: rgba(0, 0, 0, 0.7);

  & .MuiDialog-paper {
    border-radius: 49px;
    padding: 30px;
    width: 25%;
    height: 20%;
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 14px;
    background-color: #151518;
}

  @media screen and (max-width:640px) {
  & .MuiDialog-paper {
   width: 100%;
   height:20%;
   margin:20px
  }
  }
  @media (min-width:640px) and (max-width:1024px) {
  & .MuiDialog-paper {
    width: 60%;
    height:20%;
  }
  }
  .success-message {
    color:  ${({ theme }) => theme.palette.success.main};
    text-align: center;
    width:350px;
   
  }
`