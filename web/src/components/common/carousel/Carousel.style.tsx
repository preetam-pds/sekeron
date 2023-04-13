import { styled } from "@mui/material"

interface ICarouselStyled {
}

interface ICardStyled {
    backgroundImage: any
}

export const CarouselStyled = styled("div") <ICarouselStyled>`
margin-bottom: 20px;

.carousel-container {
    object-fit: contain;
}

.dots-container{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
}

.active-dot{
    width: 25px;
    height: 7px;
    border-radius: 18px;
    background-color: var(--white-color);
    margin-left: 20px;
    transition: width 0.5s;
    padding: 2.5px;
}

.in-active-dots{
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: var(--white-color);
    margin-left: 20px;
    opacity: 0.43;
    padding: 2.5px;
}

& .artist-description{
    position: relative;
    left: 4%;
    top:15px;
    padding: 12px;
    border-radius: 19.8px;
    -webkit-backdrop-filter: blur(4.4px);
    backdrop-filter: blur(4.4px);
    background-color: rgba(0, 0, 0, 0.42);
    margin-bottom: 20px;
    z-index: 1;
}

& .artist-description-text{
    font-family: 'Comfortaa-Bold';
    font-size: 2.24rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--denary-grey-color);
    margin-bottom: 20px;
    z-index: 1;
}

`

export const CardStyles = styled("div") <ICardStyled>`

background-image: url(${({ backgroundImage }) => backgroundImage ? backgroundImage : 'transparent'});
object-fit: cover;
background-size: cover;
background-repeat: no-repeat;
border-radius: 18px;
position: relative;

& .banner-overlay{
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    background-image: radial-gradient(ellipse at 50% 2%, rgba(0, 0, 0), #000 50%);
    opacity: 0.5;
}

& .slider-container{
    display: flex;
    justify-content: space-between;
    align-items: center;
}

& .slider-previous-button {
    width:55px;
    height: 55px;
    padding: 5px;
    margin-left: 40%;
    z-index: 1;
    cursor: pointer;
}
& .slider-next-button{
    width:55px;
    height: 55px;
    padding: 5px;
    z-index: 1;
    cursor: pointer;
}

& .admiration-container{
    padding: 5px 20px 5px 20px;
    border-radius: 28px;
    -webkit-backdrop-filter: blur(3.5px);
    backdrop-filter: blur(3.5px);
    background-color: rgba(0, 0, 0, 0.42);
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
}

& .admiration-container-text{
    font-family: 'Comfortaa-Bold';
    font-size: 2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--quinary-blue-color);
}

& .artist-details-container{
    display: flex;
    flex-direction: column;
}

& .name{
    font-family: 'Comfortaa-Bold';
    font-size: 3.2rem;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--quinary-blue-color);
    z-index: 1;
}

& .profession{
    font-family: 'Comfortaa-Light';
    font-size: 1.8rem;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: var(--quinary-blue-color);
    z-index: 1;
}

@media screen and (max-width:840px) {
    & .slider-previous-button {
    width:40px;
    height: 40px;
    margin-left: 40%;
}
& .slider-next-button{
    width:40px;
    height: 40px;
}

& .artist-description{
    left: 3%;
    top:5px;
    padding: 5px 8px 5px 8px;
    border-radius: 19.8px;
    font-size: 2rem;
    margin-bottom: 10px;
}
& .admiration-container-text{
    font-size: 1.6rem;
}

& .profession{
    font-size: 1.6rem;
}

& .name{
    font-size: 2.6rem;
}

}
`