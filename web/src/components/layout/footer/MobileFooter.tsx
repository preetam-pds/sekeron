import { ListItem, Stack, AppBar, Box, Toolbar, Typography } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import styles from '../Layout.module.css'
import { mobileFooterMenu } from 'src/core/json/FooterMenuJson';
import { Fragment, useEffect, useState } from 'react';
import React from 'react';
import UploadTooltip from 'src/pages/upload/upload-tooltip/UploadTooltip';
import { AppBarEnum } from '@sekeron/domain';

export const MobileFooter = () => {

    const location: any = useLocation()

    const [selectedPath, setSelectedPath] = useState('')

    const handleMenuPath = (event: any, label: string) => {
        if (label == AppBarEnum.post) {
            setSelectedPath(label)

        } else {
            setSelectedPath('')
        }
    }

    return (
        <AppBar position="fixed" sx={{ top: 'auto', bottom: 0 }} className={styles["mobile-footer"]}>
            <Toolbar disableGutters={true} >
                <Box sx={{
                    display: { xs: 'block', sm: "block", md: 'none', lg: "none", xl: "none" },
                    width: { xs: "90%" },
                    m: 'auto'
                }}>
                    <Stack rowGap={5}
                        sx={{
                            justifyContent: { xs: 'space-between' },
                            width: { xs: "100%" },
                        }}
                    >
                        {mobileFooterMenu.map((item: any, index: number) => {
                            return (
                                <NavLink
                                    key={index}
                                    to={item.path}
                                    className={({ isActive }) =>
                                        isActive || location === item.path
                                            ? styles["menu-item-active"]
                                            : styles["menu-item"]
                                    }
                                    children={({ isActive }) => (
                                        <Fragment>
                                            <img
                                                className={styles["nav-menu-icons"]}
                                                src={isActive ? item.activeIcon : item.icon}
                                                alt="nav-menu-icons"
                                                onClick={(event) => handleMenuPath(event, item.label)}
                                            />
                                        </Fragment>
                                    )}
                                />
                            )
                        })}
                    </Stack>
                    {selectedPath == AppBarEnum.post &&
                        <Stack sx={{ position: 'absolute', right: { xs: '20%', sm: '35%' }, top: '-130px' }} >
                            <UploadTooltip setSelectedPath={setSelectedPath} isMobile={true} />
                        </Stack>
                    }
                </Box>
            </Toolbar>
        </AppBar>
    );
}
