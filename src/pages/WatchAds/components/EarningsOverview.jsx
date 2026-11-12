import React from 'react';
import { IoWalletOutline, IoLayersOutline, IoTimeOutline, IoCheckmarkDoneOutline } from 'react-icons/io5';
import styles from '../WatchAds.module.css';

const EarningsOverview = ({ ads = [], sessionEarned = 0, userBalance = 0 }) => {
  const availableCount = ads.filter((a) => (a.cooldown || 0) <= 0).length;
  const cooldownCount = ads.filter((a) => (a.cooldown || 0) > 0).length;

  return (
    <div className="col-12 col-lg-10 mx-auto mb-4">
      <div className={styles.statsGrid}>
        {/* Available Ads Card */}
        <div className={styles.statMiniCard}>
          <div className={styles.statIconBox} style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#60a5fa' }}>
            <IoLayersOutline size={20} />
          </div>
          <div className={styles.statMeta}>
            <span className={styles.statLabel}>Available Slots</span>
            <span className={styles.statValue}>{availableCount}</span>
          </div>
        </div>

        {/* Cooldown Slots Card */}
        <div className={styles.statMiniCard}>
          <div className={styles.statIconBox} style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24' }}>
            <IoTimeOutline size={20} />
          </div>
          <div className={styles.statMeta}>
            <span className={styles.statLabel}>In Cooldown</span>
            <span className={styles.statValue}>{cooldownCount}</span>
          </div>
        </div>

        {/* Session VEs Earned */}
        <div className={styles.statMiniCard}>
          <div className={styles.statIconBox} style={{ background: 'rgba(16, 185, 129, 0.15)', color: '#34d399' }}>
            <IoCheckmarkDoneOutline size={20} />
          </div>
          <div className={styles.statMeta}>
            <span className={styles.statLabel}>Session Earned</span>
            <span className={styles.statValue}>+{sessionEarned} VEs</span>
          </div>
        </div>

        {/* Wallet Balance */}
        <div className={styles.statMiniCard}>
          <div className={styles.statIconBox} style={{ background: 'rgba(139, 92, 246, 0.15)', color: '#a78bfa' }}>
            <IoWalletOutline size={20} />
          </div>
          <div className={styles.statMeta}>
            <span className={styles.statLabel}>Total Balance</span>
            <span className={styles.statValue}>{userBalance} VEs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsOverview;
