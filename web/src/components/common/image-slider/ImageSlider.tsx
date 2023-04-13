import Slider from "react-slick";
import React from "react";
import { styled } from "@mui/material";

interface IImageSliderProps {
    settings: any
    children: any
    isShowBackground?: boolean
}

const ImageSliderStyles = styled('div') <any>`

.slick-list{
    width: 100%;
}

.slick-track:before{
    height: 200px;
}
.slick-track{
    display: flex;
    justify-content: center;
    align-items:center;
    object-fit: contain;
    width: 100%;
    height: auto;
    background-color: ${({ isShowBackground }: any) => isShowBackground ? 'var(--quaternary-theme-color)' : ''};
}

.slider-container{
    display: flex;
    justify-content: center;
    align-items: center;
}

.slick-dots li {
    width: ${({ isShowBackground }: any) => isShowBackground ? '5px' : '3px'};
    height: 5px;
    border-radius: 50%;
    background-color: var(--white-color);
    margin-left: ${({ isShowBackground }: any) => isShowBackground ? '20px' : '5px'};
    opacity: 0.43;
    padding: 2.5px;
}
.slick-dots li.slick-active{
    width: ${({ isShowBackground }: any) => isShowBackground ? '25px' : '15px'};
    height: 5px;
    border-radius: 18px;
    background-color: var(--white-color);
    margin-left: ${({ isShowBackground }: any) => isShowBackground ? '20px' : '5px'};
    transition: width 0.5s;
    padding: ${({ isShowBackground }: any) => isShowBackground ? '2.5px' : '1px'};
    background-color: white;
    opacity: 1;
}

.slick-dots{
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;

    position: absolute;
    bottom: ${({ isShowBackground }: any) => isShowBackground ? '-22px' : '10px'};

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
    height: auto;
    width: 100%;
    object-fit: contain;
}

.slick-prev {
    position: absolute;
    left: 10%;
    z-index: 2;
}

.slick-disabled{
    z-index: 10;
}

.slick-next{
    position: absolute;
    right: 10%;
    z-index: 2;
}



`

const ImageSlider = (imageSliderProps: IImageSliderProps) => {

    const { settings, children, isShowBackground } = imageSliderProps;

    return (
        <ImageSliderStyles isShowBackground={isShowBackground}>
            <Slider {...settings} className='slider-container'>
                {children}
            </Slider>
        </ImageSliderStyles>
    )
}

export default ImageSlider