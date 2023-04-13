import { Grid } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ImageAssets from 'src/assets';
import routesNames from 'src/routes/RouteNames';
import styles from './FeatureBlogsCard.module.css'

const FeatureBlogsCard = ({ FeaturedBlogs }) => {

    const navigate = useNavigate()



    const handleClickOnReadNow = (blog, index) => {
        navigate(routesNames.viewBlogs, { state: { blog: blog, blogIndex: index } })
    }

    return (
        <Fragment>
            {FeaturedBlogs?.map((featuredBlog: any, featuredBlogIndex: number) => {
                console.log(featuredBlog, 'featuredBlog')
                return (
                    <Grid item key={featuredBlogIndex} xs={5.3} sm={3.6} md={3.6} lg={2.65} xl={2.65} className={styles['featured-blogs-card']} >
                        <div className={styles['blog-container']} onClick={() => handleClickOnReadNow(featuredBlog, featuredBlogIndex)}>
                            <span className={styles['blog-header']}>{featuredBlog.blogHeader}</span>
                            <span className={styles['blog-description']}>{featuredBlog.blogDescription}</span>
                        </div>
                        <img alt='proffesion' className={styles['blog-image']} src={featuredBlog.publicUrl} />
                        <img alt='favourite' className={styles['favourite']} src={featuredBlog?.isFavourite ? ImageAssets.ic_favourite_active : ImageAssets.ic_favourite_inactive}
                        // onClick={() => handleFeaturedBlogFavourite(featuredBlogIndex)} 
                        />
                    </Grid>
                )
            })}
        </Fragment>
    )
}

export default FeatureBlogsCard