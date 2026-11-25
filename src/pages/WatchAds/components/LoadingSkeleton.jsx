import React from 'react';
import styles from '../WatchAds.module.css';

const LoadingSkeleton = () => {
  return (
    <div className="col-12 mb-5">
      <div className="row g-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="col-12 col-md-6 col-lg-4">
            <div className={styles.skeletonGridCard}>
              {/* 16:9 Thumbnail Skeleton */}
              <div className={styles.skeletonThumbnail} />

              {/* Card Body Skeleton */}
              <div className={styles.skeletonBody}>
                <div className="d-flex justify-content-between mb-2">
                  <div className={styles.skeletonTag} />
                  <div className={styles.skeletonTagSmall} />
                </div>
                <div className={styles.skeletonTitle} />
                <div className={styles.skeletonDesc} />
                <div className="d-flex justify-content-between align-items-center mt-3 mb-3">
                  <div className={styles.skeletonRewardPill} />
                  <div className={styles.skeletonStatusPill} />
                </div>
                <div className={styles.skeletonButton} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingSkeleton;
