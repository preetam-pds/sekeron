
import { Avatar, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { CardStyles, CarouselStyled } from './Carousel.style';
import ImageAssets from 'src/assets';
import React from 'react';
import { carouselImages } from 'src/core/json/CorouselJson';

const Carousel = (CarouselProps: any) => {

    const [slideIndex, setSlideIndex] = useState(1);



    const onClickPrev = () => {
        if (slideIndex === 1) {
            setSlideIndex(carouselImages.length)
        } else if (slideIndex <= carouselImages.length) {
            setSlideIndex(slideIndex - 1)
        }

    }

    const onClickNext = () => {
        if (slideIndex === carouselImages.length) {
            setSlideIndex(1)
        } else if (slideIndex <= carouselImages.length) {
            setSlideIndex(slideIndex + 1)
        }
    }

    useEffect(() => {
        if (CarouselProps.isAutoPlay) {
            const timer = setInterval(autoPlay, 2500)
            return () => {
                clearTimeout(timer)
            }
        }
    }, [slideIndex])

    const autoPlay = () => {
        if (slideIndex === carouselImages.length) {
            setSlideIndex(1)
        } else if (slideIndex <= carouselImages.length) {
            setSlideIndex(slideIndex + 1)
        }
    }

    const onClickOnIndicators = (value: number) => {
        setSlideIndex(value)
    }

    return (
        <>
            <CarouselStyled>
                <div className='carousel-container'>
                    {carouselImages.map((item: any, index: number) => {
                        if (index + 1 === slideIndex) {
                            return (
                                <div key={index}>
                                    <CardStyles backgroundImage={item.imageLink}>

                                        <div className='banner-overlay'></div>

                                        <Grid container >
                                            <div className='artist-description'>
                                                <span className='artist-description-text'> {item.isArtistOfTheWeek ? 'Artist of the week' : 'Artist of the week'}</span>
                                            </div>
                                        </Grid>

                                        <Grid className='slider-container' container >
                                            <Grid item container xs={1} sm={1} md={1} lg={1} xl={1} justifyContent={'flex-start'} onClick={onClickPrev} >
                                                <img className='slider-previous-button' alt='ic_previous' src={ImageAssets.ic_left} />
                                            </Grid>

                                            <Grid item container xs={9} sm={8.5} md={10} lg={6.5} xl={5} justifyContent={{ xs: 'center' }} columnGap={2} alignItems={'center'} flexDirection={'row'}>
                                                <Grid item lg={4} md={2}  >
                                                    <Avatar
                                                        alt="Remy Sharp"
                                                        src={ImageAssets.ic_artist_image_2}
                                                        sx={{ width: { xs: 100, sm: 150 }, height: { xs: 100, sm: 150 }, border: '8px solid black' }}
                                                    />
                                                </Grid>
                                                <Grid item container justifyContent={{ xs: 'center' }} xs={12} md={12} lg={6}>
                                                    <div className='artist-details-container'>
                                                        <span className='name'>{item.artistName}</span>
                                                        <span className='profession'>{item.artistProfession}</span>
                                                    </div>
                                                </Grid>
                                            </Grid>

                                            <Grid item container xs={1} sm={1} md={1} lg={1} xl={1} justifyContent={{ xs: 'flex-end', sm: 'center' }} onClick={onClickNext} >
                                                <img className='slider-next-button' alt='ic_next' src={ImageAssets.ic_right} />
                                            </Grid>
                                        </Grid>

                                        <Grid container justifyContent={'center'} sx={{ padding: '10px' }} >
                                            <span className='admiration-container'>
                                                <img style={{ padding: '10px' }} height={'30px'} width={'30px'} src={ImageAssets.ic_admire_inactive} />
                                                <span className='admiration-container-text' >{item.noOfAdmirationsOfTheWeek}+ millions admirations of this weeks</span>
                                            </span>
                                        </Grid>

                                    </CardStyles>
                                </div>
                            )
                        }
                    })}
                </div>
                <div className='dots-container'>
                    {carouselImages.map((item: any, index: number) => {
                        if (index + 1 === slideIndex) {
                            return (
                                <span key={index} onClick={() => onClickOnIndicators(index + 1)} className='active-dot'></span>
                            )
                        } else {
                            return (
                                <span key={index} onClick={() => onClickOnIndicators(index + 1)} className='in-active-dots'></span>
                            )
                        }
                    })}
                </div>
            </CarouselStyled>
        </>
    )
}

export default Carousel;