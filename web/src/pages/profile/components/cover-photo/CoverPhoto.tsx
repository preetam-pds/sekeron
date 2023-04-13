import * as React from 'react';
import styles from "./CoverPhoto.module.css";
import ImageAssets from "../../../../assets";

const CoverPhoto = () => {
  return (
        <div className={styles['cover-image-container']}>
          <img 
            className={styles['cover-image']} 
            src={ImageAssets.ic_image_cover} alt="" />
        </div>
  );
};

export default CoverPhoto;
