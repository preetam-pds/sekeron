import { strings } from '@sekeron/domain';
import React, { Fragment, useEffect, useState } from 'react';
import styles from './BlogStory.module.css';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { Grid } from '@mui/material';
import { BlogStories } from 'src/core/json/BlogsJson';
import { useNavigate } from 'react-router-dom';
import routesNames from 'src/routes/RouteNames';

const BlogStory = ({ similarBlogs }: any) => {

    const navigate = useNavigate()

    const bottomDetailsOfCard = (story: any, index: number) => {
        return (
            <div className={styles['card-description']}>
                <span className={styles['description-text']}>{story.storyDescription}</span>
                <span className={styles['description-read-now']} onClick={() => handleClickOnReadNow(story, index)}>
                    {strings.readNow} <TrendingFlatIcon sx={{ color: 'white', fontSize: '34px', pl: '20px' }} />
                </span>
            </div>
        )
    };

    const topDetailsOfCard = (story: any) => {
        return (
            <div className={styles['top-text-container']}>
                <span className={styles['top-text']} >{story?.storyHeader} </span>
            </div>
        )
    };

    const handleClickOnReadNow = (blog: any, index: number) => {
        navigate(routesNames.viewBlogs, { state: { blog: blog, blogIndex: index } })
    }

    return (
        <Fragment>
            {similarBlogs?.map((story: any, storyIndex: number) => {
                return (
                    <Grid key={storyIndex} item xs={12} sm={12} md={5.8} lg={5.8} xl={5.9} sx={{ position: 'relative', cursor: 'pointer' }}>
                        <div className={styles['blogs-container-overlay']}></div>
                        <div className={styles['top-details']} >{topDetailsOfCard(story)}</div>
                        <img alt={'sekeron-images'} className={styles['sekeron-images']} src={story?.publicUrl} />
                        <div className={styles['bottom-details']}>{bottomDetailsOfCard(story, storyIndex)}</div>
                    </Grid>
                )
            })}
        </Fragment>
    )
}

export default BlogStory