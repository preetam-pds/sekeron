import { Grid } from '@mui/material';
import { strings } from '@sekeron/domain';
import React from 'react';
import ImageAssets from 'src/assets';
import styles from './TopBlogsCard.module.css'

const TopBlogsCard = ({ topBlog, blogIndex }) => {
    const { blogType, blogImage, blogDetails } = topBlog;
    return (
        <Grid key={blogIndex} container className={styles['popular-this-week-card']}>
            <div className={styles['card-div']} >
                <span className={styles['popular-this-header']} >{blogType}</span>
                <img alt='proffesion' className={styles['populared-images']} src={blogImage} />
                <span className={styles['popular-this-description']} >{blogDetails}</span>
                <span className={styles['read-now-of-popular']} >{strings.readNow}</span>
            </div>
        </Grid>
    )
}

export default TopBlogsCard