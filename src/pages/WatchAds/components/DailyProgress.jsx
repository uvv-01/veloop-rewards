import React from 'react';
import styles from '../WatchAds.module.css';

const DailyProgress = ({ ads = [] }) => {
  const totalSlots = ads.length;
  if (totalSlots === 0) return null;

  const availableSlots = ads.filter((a) => (a.cooldown || 0) <= 0).length;
  const readyPercent = Math.round((availableSlots / totalSlots) * 100);

  return (
    <div className="col-12 col-lg-10 mx-auto mb-4">
      <div className={styles.progressContainer}>
        <div className="d-flex justify-content-between align-items-center mb-2">
          <span className={styles.progressLabel}>Campaign Slot Readiness</span>
          <span className={styles.progressPercent}>
            {availableSlots} of {totalSlots} Ready ({readyPercent}%)
          </span>
        </div>
        <div className={styles.progressBarTrack} role="progressbar" aria-valuenow={readyPercent} aria-valuemin="0" aria-valuemax="100">
          <div
            className={styles.progressBarFill}
            style={{ width: `${readyPercent}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default DailyProgress;
