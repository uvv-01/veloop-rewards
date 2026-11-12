import React from 'react';
import { IoVideocamOutline, IoRefreshOutline } from 'react-icons/io5';
import styles from '../WatchAds.module.css';

const EmptyState = ({ onRefresh }) => {
  return (
    <div className="col-12 col-lg-10 mx-auto text-center py-5">
      <div className={styles.emptyCard}>
        <div className={styles.emptyIconCircle}>
          <IoVideocamOutline size={36} color="#60a5fa" />
        </div>
        <h3 className={styles.emptyTitle}>No Advertisements Available</h3>
        <p className={styles.emptySubtitle}>
          All current ad inventory for your region has been viewed. Check back shortly as new sponsor slots refresh throughout the day.
        </p>
        <button className={styles.refreshButton} onClick={onRefresh}>
          <IoRefreshOutline size={18} />
          <span>Refresh Availability</span>
        </button>
      </div>
    </div>
  );
};

export default EmptyState;
