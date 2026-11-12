import React from 'react';
import { IoCloudOfflineOutline, IoRefreshOutline } from 'react-icons/io5';
import styles from '../WatchAds.module.css';

const ErrorState = ({ message, onRetry }) => {
  return (
    <div className="col-12 col-lg-10 mx-auto text-center py-5">
      <div className={styles.errorCard}>
        <div className={styles.errorIconCircle}>
          <IoCloudOfflineOutline size={38} color="#ef4444" />
        </div>
        <h3 className={styles.errorTitle}>Advertisement Network Unavailable</h3>
        <p className={styles.errorSubtitle}>
          {message || 'Unable to establish a secure connection with the rewards server. Your current wallet balance is unaffected.'}
        </p>
        <button className={styles.retryButton} onClick={onRetry} aria-label="Retry loading advertisements">
          <IoRefreshOutline size={18} />
          <span>Retry Connection</span>
        </button>
      </div>
    </div>
  );
};

export default ErrorState;
