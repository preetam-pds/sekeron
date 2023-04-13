import React from "react";
import { CorrouselStyled } from "./SimpleSliderStyled";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Grid } from "@mui/material";
import { ISimpleSliderProps } from "./SimpleSliderInterface";
import ImageAssets from "src/assets";

const SimpleSlider = (SimpleSliderProps: ISimpleSliderProps) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: true,
    }
    return (
        <CorrouselStyled>
            <Slider autoplay={SimpleSliderProps?.isAutoplay ? SimpleSliderProps?.isAutoplay : false} {...settings}>
                {SimpleSliderProps?.carouselImages?.map((item: any, index: number) => {
                    return (
                        <Grid container key={index} className='simple-slider-main-container'>
                            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} className='slider-image-container'>
                                <div>
                                    <img src={index % 2 == 0 ? ImageAssets.ic_growtogether : ImageAssets.ic_artist} className='slider-image'></img>
                                </div>
                            </Grid>
                            <Grid item className="main-label-container" >
                                <Grid container className="label-container" spacing={3}>
                                    <Grid item className="slider-main-label">
                                        <span>{item.labelHeader}</span>
                                    </Grid>
                                    <Grid item className="slider-sub-label">
                                        <span>{item.subLabelHeeader}</span>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    )
                })}
            </Slider>
        </CorrouselStyled >
    )
};

export default SimpleSlider;