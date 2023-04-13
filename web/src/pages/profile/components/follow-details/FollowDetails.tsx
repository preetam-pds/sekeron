import * as React from 'react';
import styles from './FollowDetails.module.css'

interface Props {
  element: { src: string; count: string; title: string };
}

const FollowDetails = ({ element }: Props) => {
  return (
      <div className={styles['follow-details-container']}>
        <div className={styles['follow-icon-container']}>
          <img src={element.src} alt='' />
        </div>
        <span className={styles['follow-count']}>{element.count}</span>
        <span className={styles['follow-title']}>{element.title}</span>
      </div>
  );
};

export default FollowDetails;
