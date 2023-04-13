import * as React from 'react';
import { Grid } from "@mui/material";
import styles from './ProfileAvatar.module.css'
import ImageAssets from "../../../../assets";

const ProfileAvatar = () => {
  return (
    <Grid item xs={12} sm={12} md={3} className={styles['profile-avatar-wrapper']}>
      <div className={styles['profile-avatar-container']}>
        <img src={ImageAssets.ic_avatar}  className={styles['profile-avatar']} alt="" />
      </div>
    </Grid>
  );
};

export default ProfileAvatar;
