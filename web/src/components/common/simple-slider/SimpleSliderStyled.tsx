import { styled } from "@mui/material";
import { ISimpleStyledSlider } from "./SimpleSliderInterface";

export const CorrouselStyled = styled('div') <ISimpleStyledSlider>`

.slick-dots li {
    background-color:${({ theme }) => theme.palette.grey[100]};
    border-radius: 50%;
    width: 10px;
    height:10px;
}
.slick-dots li.slick-active{
    background-color: ${({ theme }) => theme.palette.secondary.main};
    width: 35px;
    height:8px;
    border-radius: 12px;
}

.slick-dots{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
}

.slick-dots li button:before{
    width: 0;
    height: 0;
    font-size: 0;
}

.slider-image-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
}

.slider-image{
    height: 100%;
    width: 100%;
    object-fit: contain;
    min-height: 415px;
    min-width: 515;
    max-width: 450px;;
}

.main-label-container{
    margin-top: 13%;
}

.label-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.slider-main-label{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Comfortaa-Regular';
    font-size: 2.8rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${({ theme }) => theme.palette.secondary.light};
}

.slider-sub-label{
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Comfortaa-Regular';
    font-size: 2.0rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: ${({ theme }) => theme.palette.grey[100]};
}

.simple-slider-main-container{
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (min-width:320px) and (max-width:768px) {
    .main-label-container{
        margin-top: 8%;
    }
}

@media (min-width:320px) and (max-width:768px) {
    .main-label-container{
        margin-top: 8%;
    }
}

@media screen and (min-width:1320px) {
    .main-label-container{
        margin-top: 8%;
    }
}

.slick {
    .slick-track {
        display: flex;
        .slick-slide {
            display: flex;
            height: auto;
            width:200px;
            height: 100%;
        }
    }
}
`
