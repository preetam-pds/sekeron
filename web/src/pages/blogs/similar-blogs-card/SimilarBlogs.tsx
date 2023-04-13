import { Grid } from '@mui/material';
import React, { Fragment } from 'react';
import styles from './SimilarBlogs.module.css';
import TrendingFlatIcon from '@mui/icons-material/TrendingFlat';
import { strings } from '@sekeron/domain';

const SimilarBlogs = (similarProps: any) => {

    const { similarBlogStories } = similarProps;

    const descriptionFormatter = (value: string) => {
        if (value.length > 60) {
            const trimText = value.slice(0, 60)
            return `${trimText}...`
        } else {
            return value
        }
    }

    const topDetailsOfCard = (story: any) => {
        return (
            <div className={styles['top-text-container']}>
                <span className={styles['top-text']} >{story?.storyHeader} </span>
            </div>
        )
    };

    const bottomDetailsOfCard = (story: any) => {
        return (
            <div className={styles['card-description']}>
                <span className={styles['description-text']}>{descriptionFormatter(story.storyDescription)}</span>
                <span className={styles['description-read-now']}>
                    {strings.readNow} <TrendingFlatIcon sx={{ color: 'white', fontSize: '34px' }} />
                </span>
            </div>
        )
    };

    return (
        <Fragment>
            {similarBlogStories?.map((blogs: any, blogIndex: number) => {
                return (
                    <Grid key={blogIndex} item xs={11.6} sm={5.6} md={3.6} lg={3.7} xl={3.8} sx={{ position: 'relative' }} >
                        <img alt={''} className={styles['similar-blog-image']} src={blogs?.publicUrl} />
                        <div className={styles['top-details']} >{topDetailsOfCard(blogs)}</div>
                        <div className={styles['bottom-details']}>{bottomDetailsOfCard(blogs)}</div>
                    </Grid>
                )
            })}
        </Fragment>
    )
}

export default SimilarBlogs