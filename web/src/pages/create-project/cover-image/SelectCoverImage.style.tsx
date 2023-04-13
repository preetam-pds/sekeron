import { Modal, styled } from "@mui/material";

export const StyledModal = styled(Modal) <any>`

backdrop-filter: blur(5px);
background: none;
-webkit-backdrop-filter: blur(2px);
.MuiBox-root{
    position: absolute;
    left:50%;
    transform: translate(-50%, -50%);
    width: 400px;
    height: 60%;
    background-color: var(--secondary-theme-color);
    padding: 40px;
    top:50%;
    border-radius: 20px;
}
.modal-container{
height: 100%;
position:relative;
justify-content: space-between;
}

   .upload-media {
       height: 80px;
       border: 2px solid var(--white-color);
       display: flex;
       text-align: center;
       align-items: center;
       justify-content: center;
       width: 80px;
       cursor: pointer;
  }

  .add-icon{
      font-size: 60px;
      fill: var(--white-color);
    }

  .choose-cover-image{
      font-size: 1.6rem;
      font-weight: 300;
      color: var(--septanary-blue-color);
      font-family: "Comfortaa-Regular";
  }

   .menu-items{
       max-width: 80px;
       height: 80px;
       padding: 0;
       min-width: 80px;
  }

  .selected-default-image{
       max-width: 80px;
       height: 80px;
       padding: 0;
       min-width: 80px;
       border: 3px solid var(--primary-success-color);
  }

   .selected-image{
       height: 200px;
       width: 300px;
    }

   .media-container{
       width: 100%;
}

  .preview-project {
      width: 300px;
      border-radius: 18px;
      background-image: linear-gradient(288deg, var(--primary-success-color), var(--secondary-blue-color));
      font-family: "Comfortaa-Regular";
      font-size: 1.6rem;
      font-weight: bold;
      text-align: center;
      color: var(--white-color);
      padding: 13px;
      margin: 0px auto;
      height: 50px;
      text-transform: capitalize;
  }

  .close-icon{
      cursor: pointer;
      font-size: 30px;
      position: absolute;
      top: -12%;
      right: -16%;
      fill: var(--nonary-lite-grey-color);
  }

   .selected-media-container{
       overflow-x: auto;
       width: calc(100% - 100px);
    }

    .image{
        width: 100%;
        height: 100%;
        cursor: pointer;
    }

 @media screen and (max-width:840px) {
     .MuiBox-root {
         bottom:0%;
         top: auto;
         width:calc(100% - 20px);
         padding: 20px;
         border-top-left-radius: 30px;
         border-top-right-radius: 30px;
         transform: translate(-50%, 0%);
    }

  .close-icon {
      cursor: pointer !important;
      font-size: 25px;
      position: absolute;
      top: 0%;
      right: 0%;
      fill: var(--nonary-lite-grey-color);
  }

  .preview-project {
      width: 250px;
      font-size: 1.4rem;
      
  }

     .upload-media {
       border: 1px solid var(--white-color);
  }

  .add-icon{
      font-size: 45px;
    }
}

 @media (min-width:640px) and (max-width:1024px) {
  /* &&& .MuiPaper-root {
    min-width: 60%;
    border-radius: 18px;
  } */
  }
` 