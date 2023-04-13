import styles from './NotificationTooltip.module.css'
import React, { useState } from 'react'
import { NotificationTabEnumUtils, strings } from '@sekeron/domain'
import { Stack, Typography } from '@mui/material'
import { FilledTabSwitcher } from 'src/components/common/tab-switcher/TabSwitcher'
import ImageAssets from 'src/assets'
import { MuiButton } from 'src/components/common/button/MuiButton'
import { notifications } from 'src/core/json/NotificationJson'
import { Link, useNavigate } from 'react-router-dom'
import routesNames from 'src/routes/RouteNames'

const NotificationContent = () => {

    const navigate = useNavigate()

    const [tabValue, setTabValue] = useState<any>(0);

    const handleTabValue = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const renderTabContent = (tabValue: number) => {
        if (tabValue === 0) {
            return (
                <>{notifications?.map((notification, notificationIndex) => {
                    return (
                        <Stack gap={2} key={notificationIndex}>
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
                            <MuiButton className={styles['mui-button']} >{'Explore'} </MuiButton>
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
                        <MuiButton className={styles['mui-button']}>{strings.createPost} </MuiButton>
                    </Link>
                </div>
            )
        } else if (tabValue === 2) {
            return (
                <div className={styles['tab-button']}>
                    <Link to={routesNames.profile} className={styles['link']} >
                        <MuiButton className={styles['mui-button']}>{strings.createProject} </MuiButton>
                    </Link>
                </div>
            )
        }
    }

    return (
        <Stack className={styles['content-container']} gap={3} >
            <div className={styles['notifications']} >{strings.notifications}</div>
            <div className={styles['tab-switcher']} >
                <FilledTabSwitcher tabvalue={tabValue} handletabvalue={handleTabValue} tabdata={NotificationTabEnumUtils.getNotificatoinTabEnums()} />
            </div>
            <Stack gap={3} sx={{ minHeight: '380px', maxHeight: "400px", overflowY: 'scroll' }}>
                {renderTabContent(tabValue)}
            </Stack>
        </Stack>
    )
}

export default NotificationContent;