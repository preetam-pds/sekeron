import { Grid, Stack, styled, Typography } from '@mui/material'
import React, { Fragment, useEffect, useState } from 'react'
import ImageAssets from 'src/assets'
import styles from './ViewEvent.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { constants, DailogBoxTypeEnum, EventTypeEnum, FeedsEnum, strings } from '@sekeron/domain';
import CustomAvatar from 'src/components/common/avatar/MuiAvatar';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { MuiStyledButton } from 'src/components/common/button/MuiButton';
import SessionCard from '../session-card/SessionCard';
import MoreLikeThisCard from '../more-like-this-card/MoreLikeThisCard';
import MuiMenu from 'src/components/common/menu/Menu';
import { useNavigate } from 'react-router-dom';
import routesNames from 'src/routes/RouteNames';
import CommonDialog from 'src/components/common/dailog/common-dialog/CommonDialog';
import AdmirationsScreen from 'src/pages/home/admiration-screen/AdmirationsScreen';
import { useLocation } from 'react-router-dom';
import CustomSuccessDailog from 'src/components/common/dailog/success-dailog/MuiSuccessDailog';
import EventAttendDialog from '../event-attend-dialog/EventAttendDialog';
import ImageSlider from 'src/components/common/image-slider/ImageSlider';

const ViewEvent = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const menuData = [
        {
            id: '1',
            menuName: 'Invite',
            value: 'invite'
        },
        {
            id: '1',
            menuName: 'Share',
            value: 'share'
        }
    ]

    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const [openAdmirationDialog, setOpenAdmirationDialog] = useState(false);
    const [popUpType, setPopUpType] = useState(FeedsEnum.admirationDialog);
    const [viewEvents, setViewEvents] = useState(location.state.viewEvent);
    const [mode, setMode] = useState('');
    const [isClickedOnEventType, setIsClickedOnEventType] = useState(false);
    const [menuName, setMenuName] = useState(null);
    const [openEventDialog, setOpenEventDialog] = useState(false)

    const isOpenMenu = Boolean(anchorEl);

    const { description, eventHostedTime, eventHoster, eventImages, eventLocation, eventMode, eventTime, eventsHeader,
        eventType, heading1, imageAvatars, links, noOfAdmirations, noOfComments, eventCost, eventsQuestions } = viewEvents

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        setViewEvents(location.state.viewEvent)
        setMode(location.state.viewEvent.eventMode)
    }, [])

    const handleClick = (event: React.MouseEvent<HTMLElement>, name) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (value: any) => {
        setAnchorEl(null);
        setMenuName(value)
        if (value == 'share') {
            setOpenAdmirationDialog(true)
        }
    };


    // below all functions are related to dialog
    const handleClickOnNoOfAdmirations = (feed: any, index: number) => {
        setOpenAdmirationDialog(true)
        setPopUpType(FeedsEnum.admirationDialog)
    }

    const handleCloseAdmirationDialog = () => {
        setOpenAdmirationDialog(false)
    }

    const handleClickOnSharePost = () => {
        setPopUpType(FeedsEnum.commentDialog)
        setOpenAdmirationDialog(true)
    }
    // up to here

    const handleClickEventTypeDialog = (value: any) => {
        if (value == EventTypeEnum.paid.toLowerCase() || value == EventTypeEnum.free.toLowerCase()) {
            const data = { ...viewEvents, eventMode: EventTypeEnum.applied.toLowerCase() }
            setViewEvents(data);
            setIsClickedOnEventType(true)
        }
    }

    const handleCloseEventTypeDialog = () => {
        setIsClickedOnEventType(false)
    }

    const handleOpenEventAttendDialog = () => {
        setOpenEventDialog(true)
    }

    const handleCloseEventAttendDialog = () => {
        setOpenEventDialog(false)
    }


    const renderSharePostScreenView = () => {
        return (
            <div className={styles['share-post-profile-and-text-area']}>
                <img alt='profile-image' className={styles['share-post-profile-image']} src={ImageAssets.ic_artist_image} />
                <textarea cols={50} placeholder={strings.writeMessage} className={styles['write-message-text-field']} />
            </div>
        )
    }

    const MenuItemStyles = styled('div') <any>`
            font-family: "Comfortaa-Light";
            color: var(--nonary-grey-color);
            font-size: 2rem;
            text-align: center;
            padding: 15px;
    `

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
        <Fragment>

            <div>
                {<CommonDialog open={openAdmirationDialog} title={popUpType == FeedsEnum.admirationDialog ? constants.admirations : renderSharePostScreenView()} onClose={handleCloseAdmirationDialog} >
                    <AdmirationsScreen popUpType={popUpType} />
                </CommonDialog>}
            </div>

            <div>
                {<CommonDialog open={openEventDialog} title={''} onClose={handleCloseEventAttendDialog} >
                    <EventAttendDialog eventCost={eventCost} eventsQuestions={eventsQuestions} onClose={handleCloseEventAttendDialog} />
                </CommonDialog>}
            </div>

            <div>
                <CustomSuccessDailog varient={DailogBoxTypeEnum?.successDailogWithCheckMark} handleDailogClose={handleCloseEventTypeDialog} open={isClickedOnEventType} eventSuccessIcon={true}  >
                    <div className={styles['dialog-succes-message']} >
                        {mode == EventTypeEnum.paid.toLowerCase() ?
                            <span>{strings.youHaveAppliedForThisEvent} {eventTime} for Rs. {eventCost}.</span>
                            :
                            <span>{strings.youHaveAppliedForThisEvent} {eventTime}.</span>
                        }
                    </div>
                </CustomSuccessDailog>
            </div>


            <Grid key={location.state.mediaIndex} container className={styles['view-event-container']} gap={3} sx={{ pb: '100px' }}>
                <div className={styles['header-container']}>
                    <span className={styles['header']} onClick={() => navigate(routesNames.events)} >
                        <ArrowBackIosIcon className={styles['previous-button']} />
                        <span className={styles['header-text']} >{eventsHeader}</span>
                    </span>
                    <img src={ImageAssets.ic_more} alt={'ic-more'}
                        id="menu-button"
                        className={styles['ic-more']}
                        aria-controls={isOpenMenu ? 'fade-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={isOpenMenu ? 'true' : undefined}
                        onClick={(event: any) => handleClick(event, 'feeds?.artistName')}
                    />
                    <MuiMenu open={isOpenMenu} anchorEl={anchorEl} handleClose={handleClose} selectedMenuOption={'dark'}>
                        {menuData?.map((menu: any, menuIndex: number) => {
                            return (
                                <div key={menuIndex} className={menuIndex == menuData.length - 1 ? '' : 'border-style'}>
                                    <MenuItemStyles className='menu-items' onClick={() => handleClose(menu.value)}>
                                        {menu.menuName}
                                        {menuIndex == 2 && <span className='profile-name'> {'profileName'}</span>}
                                    </MenuItemStyles>
                                </div>
                            )
                        })}
                    </MuiMenu>
                </div>
                <Grid item container gap={2}>

                    <Grid container style={{ display: 'inline-block' }}>
                        <ImageSlider settings={eventSliderSettings} isShowBackground={false}>
                            {eventImages?.map((event: any, mediaIndex: number) => {
                                return (
                                    <Grid container gap={2} key={mediaIndex} sx={{ position: 'relative' }}>
                                        <img src={event.imgPath} alt={event.label} className={styles['carousel-image']} />
                                        <span className={styles['buzzer-notification']} >
                                            <img src={false ? ImageAssets.ic_active_buzzer_notification : ImageAssets.ic_inactive_buzzer_notification} className={styles['buzzer-notification-icon']} alt='ic_buzzer_notification' />
                                        </span>
                                        <span className={styles['online']}>
                                            <span className={styles['online-text']}>{strings.online}</span>
                                        </span>
                                    </Grid>
                                )
                            })}
                        </ImageSlider>
                    </Grid>

                    <Grid container className={styles['details']} gap={1}>
                        <div className={styles['event-title']}>
                            <span className={styles['title-container']} >
                                <span className={styles['title']} >
                                    <span className={styles['event-title-text']} >{eventsHeader}</span>
                                    <span className={styles['events-hosted-by']} >Hosted by {eventHoster}. <span className={styles['event-hosted-time']} >{eventHostedTime}</span> </span>
                                </span>
                                <span className={styles['event-cost-detail']} >
                                    <span className={styles['photowalk']} >{eventType}</span>
                                    <span className={mode == EventTypeEnum.paid.toLowerCase() ? styles['paid'] : styles['free']} onClick={() => handleClickEventTypeDialog(eventMode)} >{eventMode}</span>
                                </span>
                            </span>
                            <span className={styles['event-avatar-share']} >
                                <CustomAvatar numberOfAvatars={4} variant={'circular'} imageAvatars={imageAvatars} className={styles['avatar-font-color']} sx={{ width: '25px', height: '25px' }}
                                />
                                <img src={ImageAssets.ic_send_inactive} className={styles['share-icon']} onClick={() => handleClickOnSharePost()} />
                            </span>
                            <span className={styles['share-icon-container']}>
                                <img src={ImageAssets.ic_send_inactive} className={styles['share-icon']} onClick={() => handleClickOnSharePost()} />
                            </span>
                        </div>
                        <span className={styles['event-avatar-share-for-mobile']} >
                            <CustomAvatar numberOfAvatars={4} variant={'circular'} imageAvatars={imageAvatars}
                                sx={{
                                    display: 'flex', justifyContent: 'center', alignItems: 'center', width: { xs: '20px', sm: '20px', md: '25px' },
                                    height: { xs: '20px', sm: '20px', md: '25px' }, backgroundColor: 'var(--white-color)'
                                }} />
                            <span >
                                <span className={styles['photowalk']} >{eventType}</span>
                                <span className={mode == EventTypeEnum.paid.toLowerCase() ? styles['paid'] : styles['free']} onClick={() => handleClickEventTypeDialog(eventMode)}>{eventMode}</span>
                            </span>
                        </span>

                        <div className={styles['date-and-location']}>
                            <span>
                                <span className={styles['align-contents']} >
                                    <img src={ImageAssets.ic_date_picker} className={styles['ic_date-picker']} />
                                    <span className={styles['event-date-and-time']} >{eventTime}</span>
                                </span>
                                <span className={styles['align-contents']}>
                                    <LocationOnIcon sx={{ color: 'var(--quaternary-grey-color)', fontSize: '34px', p: '0px 10px 0px 0px' }} />
                                    <span className={styles['event-location']}>{eventLocation}</span>
                                </span>
                            </span>
                            <span className={styles['event-confirmation']}>
                                {eventCost != 0 ?
                                    <span className={styles['event-attend']}>
                                        <span className={styles['event-cost']} >Rs.{eventCost}</span>
                                        <MuiStyledButton onClick={handleOpenEventAttendDialog} >{strings.payAnd} {strings.attend}</MuiStyledButton>
                                    </span>
                                    :
                                    <MuiStyledButton onClick={handleOpenEventAttendDialog} >{strings.attend}</MuiStyledButton>
                                }
                            </span>
                        </div>

                        <div className={styles['horizontal-divider']}></div>

                        <div className={styles['interaction-container']}>
                            <span className={styles['comment-and-admire']} >
                                <span className={styles['align-contents']}>
                                    <img className={styles['ic-admire']} alt='admire' src={ImageAssets.ic_admire_inactive} />
                                    <span className={styles['strings']}>{strings.admire}</span>
                                </span>
                                <span className={styles['align-contents']}>
                                    <img className={styles['ic-comment']} alt='comment' src={ImageAssets.ic_comment_inactive} />
                                    <span className={styles['strings']}>{strings.comment}</span>
                                </span>
                            </span>
                            <span className={styles['comments-and-admirations']}>
                                <span className={styles['admirations']} onClick={() => handleClickOnNoOfAdmirations('', 1)} >{noOfAdmirations} {strings.admirations}</span>
                                <span className={styles['comments']} >{strings.viewAll} {noOfComments} {strings.comments}</span>
                            </span>
                        </div>
                    </Grid>

                    <Stack className={styles['details']} gap={2} flexDirection={'column'} >
                        <span className={styles['session']} >Description</span>
                        <Stack rowGap={2} direction={'column'} >
                            <div className={styles['description-details']}>
                                <span className={styles['description-details-tag']} >{'SPARKS '}</span>{description}</div>
                        </Stack>
                    </Stack>

                    <Stack className={styles['details']} gap={2} flexDirection={'column'} >
                        <span className={styles['tag']} >Heading 1</span>
                        <div className={styles['description-details']}>{heading1}</div>
                    </Stack>

                    <Stack className={styles['details']} gap={2} flexDirection={'column'} >
                        <span className={styles['tag']} >Links</span>
                        <Stack direction={'column'} rowGap={1}>
                            {links?.map((link: any, index: number) => {
                                return (
                                    <a key={index} className={styles['links']} >{link?.link}</a>
                                )
                            })}
                        </Stack>
                    </Stack>


                    <Stack direction={'column'} gap={4} className={styles['details']}>
                        <span className={styles['session']} >Session</span>
                        <Grid container gap={5} justifyContent={'space-between'} >
                            <SessionCard />
                        </Grid>
                    </Stack>

                    <div className={styles['horizontal-divider']}></div>

                    <Stack direction={'row'} gap={4} flexDirection={'row'} className={styles['details']}>
                        <div className={styles['interaction-container']}>
                            <span className={styles['comment-and-admire']} >
                                <span className={styles['align-contents']}>
                                    <img className={styles['ic-admire']} alt='admire' src={ImageAssets.ic_admire_inactive} />
                                    <span className={styles['strings']}>{strings.admire}</span>
                                </span>
                                <span className={styles['align-contents']}>
                                    <img className={styles['ic-comment']} alt='comment' src={ImageAssets.ic_comment_inactive} />
                                    <span className={styles['strings']}>{strings.comment}</span>
                                </span>
                            </span>
                            <span className={styles['comments-and-admirations']}>
                                <span className={styles['admirations']} onClick={() => handleClickOnNoOfAdmirations('', 1)} >{noOfAdmirations} {strings.admirations}</span>
                                <span className={styles['comments']} >{strings.viewAll} {noOfComments} {strings.comments}</span>
                            </span>
                        </div>
                    </Stack>

                    <Stack flexDirection={'row'} justifyContent={'space-between'} alignItems={'center'} className={styles['details']} sx={{ pt: '20px' }}>
                        <span className={styles['session']} >{strings.moreLikeThis}</span>
                        <span className={styles['see-all-text']} >{strings.seeAll}</span>
                    </Stack>

                    <Stack className={styles['details']}>
                        <Grid container gap={2.5} >
                            <MoreLikeThisCard />
                            <MoreLikeThisCard />
                            <MoreLikeThisCard />
                        </Grid>
                    </Stack>

                </Grid>
            </Grid>
        </Fragment >
    )
}

export default ViewEvent;