import { Stack,Typography } from '@mui/material';
import { NotificationTabEnumUtils, strings } from '@sekeron/domain';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ImageAssets from 'src/assets';
import { MuiButton } from 'src/components/common/button/MuiButton';
import { FilledTabSwitcher } from 'src/components/common/tab-switcher/TabSwitcher';
import { notifications } from 'src/core/json/NotificationJson';
import routesNames from 'src/routes/RouteNames';
import styles from './DrawerNotificationContent.module.css'
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const DrawerNotificationContent = ({ setOpenNotificationDrawer }) => {

    const navigate = useNavigate()

    const [tabValue, setTabValue] = useState<any>(0);

    const handleTabValue = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
        console.log('newValue', newValue)
        navigate(routesNames.dashboard)
    };

    const renderTabContent = (tabValue: number) => {
        if (tabValue === 0) {
            return (
                <>
                    {notifications?.map((notification, notificationIndex) => {
                        return (
                            <Stack gap={2} key={notificationIndex} flexDirection={'column'}>
                                <div className={styles['notification-time']} >{notification?.previousNotificationTime}</div>
                                {notification?.notifications?.map((notificationMessage, notificationMessageIndex) => {
                                    return (
                                        <div key={notificationMessageIndex} className={notificationMessage?.isNotificatiomRead ? styles['notification-content-read'] : styles['notification-content-un-read']} >
                                            <img className={styles['profile-image']} src={notificationMessage?.profileImage} alt={notificationMessage?.profileImage} />
                                            <span style={{ display: 'flex', flexDirection: 'column', padding: '0px 10px' }}>
                                                <span  >
                                                    <span className={styles['profileName']}>{notificationMessage?.profileName}</span>
                                                    <span className={styles['notification']}>{notificationMessage?.notification}</span>
                                                </span>
                                                <span className={styles['notifiedTime']} >{notificationMessage?.notifiedTime}</span>
                                            </span>
                                        </div>
                                    )
                                })}
                            </Stack>
                        )
                    })}
                </>
            )
        } else {
            return (
                <>
                    <div className={styles['tab-content']} >
                        <img src={tabValue === 1 ? ImageAssets.ic_notification_post : tabValue === 2 ? ImageAssets.ic_notification_project : ImageAssets.ic_notification_events}
                            className={styles['image']} alt={'notifications-icons'} />
                    </div>
                    <Typography className={styles['tab-content-text']} >
                        {tabValue === 1 ? strings.postNotificationMessage : tabValue === 2 ? strings.projectNotificationMessage : strings.eventNotificationMessage}
                    </Typography>
                    {renderButton(tabValue)}
                    <div className={styles['tab-button']}>
                        <Link to={routesNames.explore} className={styles['link']}>
                            <MuiButton className={styles['mui-button']} onClick={() => setOpenNotificationDrawer(false)} >{'Explore'} </MuiButton>
                        </Link>
                    </div>
                </>
            )
        }
    }

    const renderButton = (tabValue: number) => {
        if (tabValue === 1) {
            return (
                <div className={styles['tab-button']}>
                    <Link to={routesNames.createPost} className={styles['link']} >
                        <MuiButton className={styles['mui-button']} onClick={() => setOpenNotificationDrawer(false)}>{strings.createPost} </MuiButton>
                    </Link>
                </div>
            )
        } else if (tabValue === 2) {
            return (
                <div className={styles['tab-button']}>
                    <Link to={routesNames.profile} className={styles['link']} >
                        <MuiButton className={styles['mui-button']} onClick={() => setOpenNotificationDrawer(false)}>{strings.createProject} </MuiButton>
                    </Link>
                </div>
            )
        }
    }


    return (
        <>
            <div className={styles['content-container']}>
                <Stack gap={3} flexDirection={'column'} >
                    <div className={styles['notifications']} onClick={() => navigate(-1)} ><ArrowBackIosIcon sx={{ fontSize: '24px' }} />{strings.notifications}</div>
                    <div className={styles['tab-switcher']} >
                        <FilledTabSwitcher tabvalue={tabValue} handletabvalue={handleTabValue} tabdata={NotificationTabEnumUtils.getNotificatoinTabEnums()} />
                    </div>
                </Stack>
                <Stack gap={3} className={styles['tab-content-container']} flexDirection={'column'}  >
                    {renderTabContent(tabValue)}
                </Stack>
            </div>
        </>
    )
}

export default DrawerNotificationContent