import React from 'react';
import styles from '../WatchAds.module.css';

const LoadingSkeleton = () => {
  return (
    <div className="col-12 col-lg-10 mx-auto">
      <div className={styles.skeletonContainer}>
        {[1, 2, 3].map((item) => (
          <div key={item} className={styles.skeletonCard}>
            <div className={styles.skeletonLeft}>
              <div className={styles.skeletonIcon} />
              <div className={styles.skeletonTexts}>
                <div className={styles.skeletonLineShort} />
                <div className={styles.skeletonLineLong} />
              </div>
            </div>
            <div className={styles.skeletonButton} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
