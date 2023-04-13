import { Grid } from '@mui/material';
import React, { useState } from 'react';
import ImageAssets from 'src/assets';
import ImageSlider from 'src/components/common/image-slider/ImageSlider';
import styles from './Blogs.module.css';
import { BlogsTabEnumUtils, DailogBoxTypeEnum, strings } from '@sekeron/domain';
import { FilledTabSwitcher } from 'src/components/common/tab-switcher/TabSwitcher';
import { FeaturedBlogs, PopuleredBlogs } from 'src/core/json/BlogsJson';
import FeatureBlogsCard from './featured-blogs-card/FeatureBlogsCard';
import PopularOfThisWeekCard from './popular-of-this-week-card/PopularOfThisWeekCard';
import BlogStory from './blog-story/BlogStory';
import { useNavigate } from 'react-router-dom';
import routesNames from 'src/routes/RouteNames';
import CustomSuccessDailog from 'src/components/common/dailog/success-dailog/MuiSuccessDailog';
import { useSelector } from 'react-redux';

const Blogs = () => {

    const blogState = useSelector((state: any) => state.blogsRedux);

    const blogsSliderSettings: any = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        adaptiveHeight: false,
    }

    const navigate = useNavigate()

    const [tabValue, setTabValue] = useState<any>(0);
    const [openBlogSubscribe, setOpenBlogSubscribe] = useState(true);

    const handleCloseDialog = () => {
        setOpenBlogSubscribe(false)
    }

    const handleTabValue = (event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue);
    };

    const handleClickOnReadNow = (blog: any, blogIndex: number) => {
        console.log(blog, 'blog')
        navigate(routesNames.viewBlogs, { state: { blog: blog, blogIndex: blogIndex } })
    }


    return (
        <Grid container className={styles['blogs-container']} gap={{ xs: 4, sm: 5, md: 4, lg: 6, xl: 5 }}>

            {/* <CustomSuccessDailog varient={DailogBoxTypeEnum.successDailog} handleDailogClose={handleCloseDialog}
                open={openBlogSubscribe} eventSuccessIcon={false}>
                <span className={styles['blog-subscribing']} >
                    Thanks for Subscribing!
                    We will keep you updated with the latest blogs.
                </span>
            </CustomSuccessDailog> */}


            <Grid item container sx={{ display: 'inline-block' }}>
                <ImageSlider settings={blogsSliderSettings} isShowBackground={true}>
                    {blogState?.blogsData?.headerBlogs?.map((blogs: any, blogIndex: number) => {
                        return (
                            <div key={blogIndex} className={styles['blog-contents']}>
                                <div>
                                    <img alt='artist-post' className={styles['post-image']} src={blogs.publicUrl} />
                                </div>
                                <div className={styles['footer-content']}>
                                    <span className={styles['footer-text']}>{blogs.blogFooter}</span>
                                    <span className={styles['read-now']} onClick={() => handleClickOnReadNow(blogs, blogIndex)} >
                                        {strings.readNow}
                                        <img src={ImageAssets.ic_forward} alt={'forword-read-now'} className={styles['ic_forword']} />
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </ImageSlider>
            </Grid>

            <Grid container sx={{ width: { xs: '100%%', md: '90%', lg: '70%', xl: '35%' }, display: { xs: 'block', sm: 'none', md: 'block' } }}>
                <FilledTabSwitcher tabvalue={tabValue} handletabvalue={handleTabValue} tabdata={BlogsTabEnumUtils.getBlogsTabEnumUtils()} />
            </Grid>

            {tabValue == 0 && <Grid container justifyContent={'space-between'} gap={2.5}>
                <BlogStory similarBlogs={blogState?.blogsData?.similarBlogs} />
            </Grid>}

            <Grid item container className={styles['featured-blogs']}>{'Featured Blogs'}</Grid>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between' }} columnGap={2} rowGap={2} >
                <FeatureBlogsCard FeaturedBlogs={blogState?.blogsData?.featuredBlogs} />
            </Grid>

            <Grid container className={styles['popular-this-week']} >Popular this week</Grid>
            <Grid container sx={{ display: 'flex', justifyContent: 'space-between', pb: '80px' }} columnGap={{ xs: 0.3, sm: 1.5 }} rowGap={2} >
                <PopularOfThisWeekCard PopuleredBlogs={blogState?.blogsData?.popularBlogs} />
            </Grid>

        </Grid >
    )
}

export default Blogs