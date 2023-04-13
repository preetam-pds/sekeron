import { Box, Grid, List, ListItem, styled, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import ImageAssets from 'src/assets';
import MuiMenu from 'src/components/common/menu/Menu';
import { SearchBar } from 'src/components/common/search-bar/SearchBar';
import styles from './ViewBlog.module.css';
import MenuIcon from '@mui/icons-material/Menu';
import NorthIcon from '@mui/icons-material/North';
import { strings } from '@sekeron/domain';
import SimilarBlogs from '../similar-blogs-card/SimilarBlogs';
import { useLocation } from 'react-router-dom';


const ViewBlog = () => {

    const location = useLocation().state

    const { blogHeader, publicUrl, similarBlogs, blogDetailDescription } = location.blog

    const menuData = [
        {
            id: '1',
            menuName: 'Switch to Light mode',
            value: 'light'
        },
        {
            id: '1',
            menuName: 'Add to favourite',
            value: 'favourite'
        },
        {
            id: '1',
            menuName: 'Share blog',
            value: 'share'
        },
    ]

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [isMenu, setIsMenu] = useState(false);
    const [selectedMenuOption, setSelectedMenuOption] = useState('dark')
    const [blogMenuData, setBlogMenuData] = useState([])

    const isOpenMenu = Boolean(anchorEl);

    useEffect(() => {
        setBlogMenuData(menuData)
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    const handleClickOnMenu = () => {
        setIsMenu(!isMenu)
    }

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (value: any) => {
        if (value == 'light') {
            let menuItems = [...blogMenuData];
            menuItems[0].menuName = 'Switch to Dark mode';
            menuItems[0].value = 'dark';
            setBlogMenuData(menuItems)
        }
        if (value == 'dark') {
            let menuItems = [...blogMenuData];
            menuItems[0].menuName = 'Switch to Light mode';
            menuItems[0].value = 'light';
            setBlogMenuData(menuItems)
        }
        setSelectedMenuOption(value)
        setAnchorEl(null);
    };

    const handleClickScroll = (scrollId: string) => {
        const element = document.getElementById(scrollId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    };

    const MenuItemStyles = styled('div') <any>`
            font-family: "Comfortaa-Light";
            color: var(--nonary-grey-color);
            font-size: 2rem;
            text-align: center;
            padding: 15px;
            text-align: right;
    `


    return (
        <Fragment>
            <Grid container className={styles['complete-view-container']} gap={3} >
                <Grid container justifyContent={'flex-end'}>
                    <span className={styles['search-bar']}>
                        <SearchBar />
                    </span>
                </Grid>
                <Grid container justifyContent={"space-between"}>
                    <span className={styles['view-header']} >{blogHeader}</span>
                    <span className={styles['menu']}>
                        <img alt='more_icon' src={ImageAssets.ic_more}
                            id="menu-button"
                            aria-controls={isOpenMenu ? 'fade-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={isOpenMenu ? 'true' : undefined}
                            onClick={(event: any) => handleClick(event)}
                            style={{ cursor: 'pointer' }}
                        />
                        <MuiMenu open={isOpenMenu} anchorEl={anchorEl} handleClose={handleClose} selectedMenuOption={selectedMenuOption}>
                            {blogMenuData?.map((menu: any, menuIndex: number) => {
                                return (
                                    <div key={menuIndex}>
                                        <MenuItemStyles className='menu-items' onClick={() => handleClose(menu?.value)}>
                                            {menuIndex == 0 ? menu.menuName : menu.menuName}
                                        </MenuItemStyles>
                                    </div>
                                )
                            })}
                        </MuiMenu>
                    </span>
                </Grid>

                <Grid container className={selectedMenuOption == 'dark' ? styles['view-image-in-dark'] : styles['view-image-in-light']} gap={4}>
                    <div style={{ width: '100%' }}>
                        <img className={styles['blog-image']} src={publicUrl} />
                        <div className={styles['view-header-text']} >
                            <div>{blogHeader}</div>
                            {!isMenu ? <div onClick={handleClickOnMenu} ><MenuIcon className={styles['menu-icon']} /></div> :
                                <div className={styles['image-menu-div']}>
                                    <span><NorthIcon className={styles['above-icon']} onClick={handleClickOnMenu} /></span>
                                    <Box sx={{
                                        width: { xs: 200, sm: 320 },
                                        maxHeight: 180,
                                        minHeight: 140,
                                        backgroundColor: selectedMenuOption == 'dark' ? 'var(--quaternary-theme-color)' : 'var(--white-color)'
                                    }}>
                                        <List sx={{
                                            overflowY: 'scroll', maxHeight: 160,
                                        }} >
                                            {blogDetailDescription?.map((list: any, index: number) => {
                                                return (
                                                    <ListItem key={index} className={styles[selectedMenuOption == 'dark' ? 'list-items-in-dark' : 'list-items-in-light']} onClick={() => handleClickScroll(list.title)}>
                                                        {list.title}
                                                    </ListItem>
                                                )
                                            })}
                                        </List>
                                    </Box>
                                </div>}
                        </div>
                    </div >

                    <Typography className={styles[selectedMenuOption == 'dark' ? 'description-header-in-dark' : 'description-header-in-light']} >
                        “Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an.”
                    </Typography>

                    <Typography className={styles[selectedMenuOption == 'dark' ? 'description-text-in-dark' : 'description-text-in-light']}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy textever since the 1500s,
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                    </Typography>

                    {blogDetailDescription?.map((item, index) => {
                        return (
                            <Grid container gap={4}>
                                <Typography className={styles[selectedMenuOption == 'dark' ? 'description-tag-dark' : 'description-tag-light']} id={item?.title}>{item?.title}</Typography>

                                <Typography className={styles[selectedMenuOption == 'dark' ? 'elaborate-text-in-dark' : 'elaborate-text-in-light']}>{item?.description1}</Typography>

                                <img alt={''} className={styles['description-image']} src={item?.publicUrl} />

                                <Typography id="section-2" className={styles[selectedMenuOption == 'dark' ? 'elaborate-text-in-dark' : 'elaborate-text-in-light']} sx={{ pb: '50px' }}>{item?.description2}</Typography>
                            </Grid>
                        )
                    })}
                </Grid >

                <Grid container className={styles['similar-blogs-text']} >{strings.similarBlogs}</Grid>
                <Grid container gap={3} sx={{ pb: '70px', pl: '10px' }}>

                    <SimilarBlogs similarBlogStories={similarBlogs} />

                </Grid>
            </Grid >
        </Fragment >
    )
}

export default ViewBlog