import { ColorPicker } from "@mantine/core";
import styled from '@emotion/styled';
import { Fade, MenuItem, Stack, Menu, Grid, Popper } from '@mui/material';
import Popover from '@mui/material/Popover';

export const StyledColorPicker = styled(ColorPicker)`
width:100%;
 & .mantine-ColorPicker-saturation {
    display:none;
  }

 & .mantine-ColorSwatch-root {
    margin-top:23px;
    border: 1px solid;
    background-image:none !important;
    display:none;
  }

  & .mantine-ColorSwatch-alphaOverlay{
    background-image: none !important;
  }

  & .mantine-ColorPicker-thumb{
    width: 12px !important;
    height: 22px !important;
    border-radius: 0px !important; 
    margin-top: -10px !important;
    cursor: pointer !important;
  }

  & .mantine-ColorPicker-slider{
    height: 7px !important;
    width: 100%;
  }

  & .mantine-ColorPicker-body{
    height: 100%;
  }

  & .mantine-ColorPicker-sliders{
    display: grid;
  }

  &&& .mantine-ColorPicker-wrapper {
    width: 100% !important;
  }

  &&& .mantine-ColorPicker-sliderOverlay{
    background-image: none;
    cursor: pointer !important;

  }
`;

export const StyledPopper = styled(Popper)`

background-color: var(--tertiary-lite-grey-color);
border-radius: 0px !important;
& .old-color-container{
   width: 100%;
   border-bottom-right-radius: 10px;
   border-bottom-left-radius: 10px;
   height: 60px;
   position:relative ;
  }

& .new-color-container{
  width: 100%;
   border-top-right-radius: 10px;
   border-top-left-radius: 10px;
   position:relative ;
   height: 60px;
}

& .old-color-container p{
  color:white;
  position: absolute;
  bottom: 0%;
  font-size: 1rem;
  font-family: "Comfortaa-Regular";
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  background-color: rgba(0, 0, 0, 0.33);
  align-items: center;
  height: 30%;
}

& .new-color-container p{
  color:white;
  position: absolute;
  top: 0%;
  font-size: 1rem;
  font-family: "Comfortaa-Regular";
  width: 100%;
  display: flex;
  justify-content: center;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: rgba(0, 0, 0, 0.33);
  align-items: center;
  height: 30%;
}

& .selected-colors-container{
  width: 65px;
  height: 120px; 
  border: 1px solid var(--tertiary-lite-grey-color);
  border-radius: 10px;
  margin-left: 10px;
  border: 1px solid var(--white-color);
}

.MuiPaper-root{
  background-color:var(--tertiary-lite-grey-color);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  width: 330px;
  height: 140px;
}

.MuiList-root{
  width:95%;
  margin: auto;
}
`;