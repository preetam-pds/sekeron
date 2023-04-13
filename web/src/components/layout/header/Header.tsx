import React, { Fragment, useEffect, useState } from 'react';
import { Stack, InputBase, Toolbar, Box, Typography } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import ImageAssets from '../../../assets';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import styles from '../Layout.module.css'
import { webHeaderMenu } from '../../../core/json/HeaderMenuJson';
import UploadTooltip from 'src/pages/upload/upload-tooltip/UploadTooltip';
import NotificationTooltip from 'src/pages/notifications/notification-tooltip/NotificationTooltip';
import NotificationContent from 'src/pages/notifications/notification-tooltip/NotificationContent';
import routesNames from 'src/routes/RouteNames';
import { useDispatch, useSelector } from 'react-redux';
import { searchRedux } from '@sekeron/domain/dist/redux/search-redux/SearchRedux';
import CloseIcon from '@mui/icons-material/Close';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: alpha(theme.palette.primary.dark, 1),
    '&:hover': {
        backgroundColor: alpha(theme.palette.primary.dark, 0.8),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '26px',
    borderRadius: "15px",
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(3),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    width: "20px",
    paddingLeft: "20px",
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        height: '26px',
        fontSize: "1.5rem",
        fontWeight: 300,
        fontFamily: "Comfortaa-Regular",
        color: 'var(--tertiary-grey-color)',
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        width: '100%',
        [theme.breakpoints.up('md')]: {

            width: "30ch",
        },
        [theme.breakpoints.up('lg')]: {
            width: "45ch",
        },
        [theme.breakpoints.up('xl')]: {
            width: "65ch",
        },
        border: '1px solid var(--quaternary-grey-color)',
        borderRadius: '12px'
    },
}));

const Header = () => {

    const location: any = useLocation();
    const navigate = useNavigate();
    const searchState = useSelector((state: any) => state.searchRedux);

    const [selectedPath, setSelectedPath] = useState('')

    useEffect(() => {
        if (location.pathname == '/upload') {
            setSelectedPath('Upload')
        }
        if (location.pathname == '/notifications') {
            setSelectedPath('Notifications')
        }
    }, [])

    const actionDispatch = ((dispatch: any) => ({
        setSearchState: (data: any) => dispatch(searchRedux.actions.setSearchState(data)),
    }))

    const { setSearchState } = actionDispatch(useDispatch())

    const handleMenuPath = (event: any, label: string) => {
        if (label == 'Upload' || label == 'Notifications') {
            setSelectedPath(label)
        } else {
            setSelectedPath('')
        }
    }

    const handleChangeSearch = (searchKey: any) => {
        setSearchState({
            key: 'searchKey', value: searchKey
        })
    }

    return (
        <AppBar sx={{ display: 'flex' }} className={styles["appbar"]} >
            <Toolbar component="nav" sx={{ justifyContent: "space-between", pr: { md: 0 }, maxHeight: { xs: "50px", md: "61px" } }}>
                <Box
                    sx={{
                        mr: { sm: 0, md: 0, lg: 0, xl: 2 },
                    }}
                >
                    <img src={ImageAssets.ic_sekeron_logo} style={{ width: "155px" }} />
                </Box>
                <Box sx={{
                    display: { xs: 'none', sm: "none", md: 'block' },
                }}>
                    <Search onClick={() => navigate(routesNames.search)} >
                        <SearchIconWrapper>
                            <img src={ImageAssets.ic_search_header} className={styles["search-icon"]} />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search for a project, artist or blog"
                            inputProps={{
                                'aria-label': 'search',
                                type: 'search',
                                // startAdornment: <CloseIcon />,
                            }}
                            value={searchState?.searchKey}
                            onChange={(event: any) => handleChangeSearch(event.target.value)}
                        />
                    </Search>
                </Box>
                <Box sx={{
                    flexGrow: { md: 1, lg: 1 }
                }} />
                <Box sx={{
                    display: { xs: 'none', sm: "none", md: 'block' },
                    width: { xs: "41%" },
                    mr: { sm: "0%", md: "0%", lg: "2%" }
                }}>
                    <Stack rowGap={5}
                        sx={{
                            justifyContent: { xs: 'space-between' },
                            alignItems: { xs: "center" },
                            width: { md: "100%", lg: "90%", xl: "90%" },
                        }}
                    >
                        {
                            webHeaderMenu.map((item: any, index: number) => {
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
                                                {selectedPath === 'Notifications' ?
                                                    <>
                                                        <NotificationTooltip selectedPath={selectedPath} label={item.label} setSelectedPath={setSelectedPath} title={<NotificationContent />} >
                                                            <span onClick={(event: any) => handleMenuPath(event, item.label)}>
                                                                <img
                                                                    className={styles["nav-menu-icons"]}
                                                                    src={isActive || location === item.path ? item.activeIcon : item.icon}
                                                                    alt="nav-menu-icons"
                                                                />
                                                                {isActive ? <Typography className={styles["list-item-text"]}>{item.label}</Typography> : null}
                                                            </span>
                                                        </NotificationTooltip>
                                                    </>
                                                    :
                                                    <>
                                                        <span onClick={(event: any) => handleMenuPath(event, item.label)} >
                                                            <img
                                                                className={styles["nav-menu-icons"]}
                                                                src={isActive || location === item.path ? item.activeIcon : item.icon}
                                                                alt="nav-menu-icons"
                                                            />
                                                            {isActive ? <Typography className={styles["list-item-text"]}>{item.label}</Typography> : null}
                                                        </span>
                                                    </>
                                                }
                                            </Fragment>
                                        )}
                                    />
                                )
                            })
                        }
                    </Stack >
                    {selectedPath == 'Upload' &&
                        <Stack sx={{ position: 'absolute', right: { md: '10%', lg: '16%', xl: '21.5%' } }} >
                            <UploadTooltip setSelectedPath={setSelectedPath} isMobile={false} />
                        </Stack>
                    }

                </Box >
            </Toolbar >
        </AppBar >
    );
}

export default Header