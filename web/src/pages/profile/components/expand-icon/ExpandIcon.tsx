import * as React from 'react';
import styles from './ExpandIcon.module.css'
import ImageAssets from '../../../../assets';

interface Props {
  thisExpanded: boolean;
}

const ExpandIcon = ({ thisExpanded }: Props) => {
  return (
    <div>
      {
        !thisExpanded ? <img src={ImageAssets.ic_to_expand_icon} alt='' className={styles['expand_icon']} />
                      : <img src={ImageAssets.ic_expand_icon} alt='' className={`${styles['expand_icon']} ${styles['active']}`} />
      }
    </div>
  );
};

export default ExpandIcon;
