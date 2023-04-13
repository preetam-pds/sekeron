import { Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ImageAssets from 'src/assets';
import CustomAvatar from 'src/components/common/avatar/MuiAvatar';
import styles from './EventsVerticalCard.module.css'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { EventTypeEnum, strings } from '@sekeron/domain';
import { useNavigate } from 'react-router-dom';
import routesNames from 'src/routes/RouteNames';
import ImageSlider from 'src/components/common/image-slider/ImageSlider';

interface IEventsVerticalCard {
    event: any
    eventIndex: number
    handleChangeInEventCard: any
    handleClickOnNoOfAdmirations: any
    handleClickOnSharePost: any
    handleOpenDialog: any
}

const EventsVerticalCard = ({ event, eventIndex, handleChangeInEventCard, handleClickOnSharePost, handleClickOnNoOfAdmirations, handleOpenDialog }: IEventsVerticalCard) => {

    const navigate = useNavigate();

    const [activeStep, setActiveStep] = useState(0);
    const [eventsVertical, setEventVertical] = useState(event);
    const [mode, setmode] = useState(event?.eventMode);

    useEffect(() => {
        setEventVertical(event)
        setmode(event?.eventMode)
    }, [])

    const { noOfAdmirations, noOfComments, eventImages, eventTime, eventLocation, eventHoster, eventsHeader, imageAvatars, isNotified, isAdmired, eventMode, eventType } = eventsVertical;

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    const routeToViewEventPage = () => {
        navigate(routesNames.viewEvent, { state: { mediaIndex: eventIndex, viewEvent: eventsVertical } })
    }


    const eventSliderSettings: any = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        adaptiveHeight: false,
    }

    return (
        <Grid container className={styles['vertical-container']} >
            <Grid container style={{ display: 'inline-block' }}>
                <ImageSlider settings={eventSliderSettings} isShowBackground={false}>
                    {eventImages?.map((event: any, mediaIndex: number) => {
                        return (
                            <Grid container gap={2} key={mediaIndex} sx={{ position: 'relative' }}>
                                <img src={event.imgPath} alt={event.label} className={styles['carousel-image']} />
                                <span className={styles['buzzer-notification']} onClick={() => handleChangeInEventCard(eventIndex, 'notification')}  >
                                    <img src={isNotified ? ImageAssets.ic_active_buzzer_notification : ImageAssets.ic_inactive_buzzer_notification} className='buzzer-notification-icon' alt='ic_buzzer_notification' />
                                </span>
                            </Grid>
                        )
                    })}
                </ImageSlider>
            </Grid>
            <div className={styles['event-details']}>
                <div className={styles['events-header-container']} >
                    <div className={styles['header-container']} onClick={routeToViewEventPage} >
                        <span className={styles['events-header']}>{eventsHeader}</span>
                        <span className={styles['events-hosted-by']}>Hosted By {eventHoster}</span>
                    </div>
                    <div className={styles['events-posted-time']}>3d</div>
                </div>

                <div className={styles['horizontal-divider']}></div>

                <div className={styles['events-avatar-container']} >
                    <div className={styles['events-type']}>
                        <div className={styles['photowalk']}>{eventType}</div>
                        <div className={mode === EventTypeEnum.free.toLocaleLowerCase() ? styles['free'] : styles['paid']} >{eventMode}</div>
                    </div>
                    <div className={styles['events-avatars']}>
                        <CustomAvatar numberOfAvatars={4} variant={'circular'} imageAvatars={imageAvatars}
                            sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '30px', height: '30px', backgroundColor: 'white' }}
                            className={styles['avatar-font-color']} />
                    </div>
                </div>

                <div className={styles['date-time-container']}>
                    <div className={styles['date-time']}>
                        <img src={ImageAssets.ic_date_picker} className={styles['ic_date-picker']} />
                        <span className={styles['event-date-and-time']} >{eventTime}</span>
                    </div>
                    <div className={styles['location']}>
                        <LocationOnIcon sx={{ color: 'var(--quaternary-grey-color)', fontSize: '34px', m: '0px 10px 0px 0px' }} />
                        <span className={styles['event-location']}>{eventLocation}</span>
                    </div>
                </div>

                <div className={styles['horizontal-divider']}></div>

                <div className={styles['interaction-container']}>
                    <div className={styles['admire-and-comment']}>
                        <div className={styles['admire']} onClick={() => handleChangeInEventCard(eventIndex, 'admire')}>
                            <img src={isAdmired ? ImageAssets.ic_active_admire : ImageAssets.ic_admire_inactive} className={styles['admire-icon']} />
                            <span className={styles['strings']}  >{strings.admire}</span>
                        </div>
                        <div className={styles['comment']} onClick={handleOpenDialog} >
                            <img src={ImageAssets.ic_comment_inactive} className={styles['comment-icon']} />
                            <span className={styles['strings']} >{strings.comment}</span>
                        </div>
                    </div>
                    <div className={styles['share-icon-div']}>
                        <img src={ImageAssets.ic_send_inactive} className={styles['share-icon']} onClick={handleClickOnSharePost} />
                    </div>
                </div>

                <div className={styles['horizontal-divider']}></div>


                <div className={styles['comments-and-admirations']}>
                    <span className={styles['admirations']} onClick={() => handleClickOnNoOfAdmirations('', 1)} >{noOfAdmirations} {strings.admirations}</span>
                    <span className={styles['comments']} onClick={handleOpenDialog}>{strings.viewAll} {noOfComments} {strings.comments}</span>
                </div>

            </div>
        </Grid>
    )
}

export default EventsVerticalCard;