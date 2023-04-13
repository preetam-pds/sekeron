import { Grid } from '@mui/material';
import { strings } from '@sekeron/domain';
import React, { Fragment, useEffect, useState } from 'react';
import ImageAssets from 'src/assets';
import styles from './PopularOfThisWeekCard.module.css'
import { useNavigate } from 'react-router-dom';
import routesNames from 'src/routes/RouteNames';


const PopularOfThisWeekCard = ({ PopuleredBlogs }) => {

    const navigate = useNavigate()

    const handlePopulardBlogFavourite = (index: number) => {
    };

    const handleClickOnReadNow = (blog: string, index: number) => {
        navigate(routesNames.viewBlogs, { state: { blog: blog, blogIndex: index } })
    }

    return (
        <Fragment>
            {PopuleredBlogs?.map((populeredBlog: any, populeredIndex: number) => {
                return (
                    <Grid key={populeredIndex} item xs={5.6} sm={3.5} md={2.625} lg={2.1} xl={2.1} className={styles['popular-this-week-card']}>
                        <div className={styles['card-div']} >
                            <span className={styles['popular-this-header']} >{populeredBlog?.blogHeader}</span>
                            <img alt='proffesion' className={styles['populared-images']} src={populeredBlog?.publicUrl} />
                            <span className={styles['popular-this-description']} >{populeredBlog?.blogDescription}</span>
                            <span className={styles['read-now-of-popular']} onClick={() => handleClickOnReadNow(populeredBlog, populeredIndex)} >{strings.readNow}</span>
                            <img alt='favourite' className={styles['favourite-icon-of-popular']} src={populeredBlog?.isFavourite ? ImageAssets.ic_favourite_active : ImageAssets.ic_favourite_inactive} onClick={() => handlePopulardBlogFavourite(populeredIndex)} />
                        </div>
                    </Grid>
                )
            })}

        </Fragment>
    )
}

export default PopularOfThisWeekCard