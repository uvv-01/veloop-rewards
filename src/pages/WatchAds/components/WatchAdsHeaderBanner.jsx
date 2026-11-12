import React from 'react';
import { IoPlayCircle, IoTrophy, IoShieldCheckmark } from 'react-icons/io5';
import styles from '../WatchAds.module.css';

const WatchAdsHeaderBanner = () => {
  return (
    <div className="col-12 col-lg-10 mx-auto mb-4">
      <div className={styles.heroCard}>
        {/* Ambient Gradient Glows */}
        <div className={styles.heroGlow1} />
        <div className={styles.heroGlow2} />

        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <IoShieldCheckmark size={14} color="#10b981" />
            <span>Instant Server Verification</span>
          </div>

          <h2 className={styles.heroTitle}>
            Watch Sponsored Ads & Earn <span className={styles.highlightGold}>VEs</span>
          </h2>

          <p className={styles.heroDescription}>
            Support our partner campaigns by watching short interactive video spots. Rewards are verified programmatically on the server and credited directly to your platform wallet.
          </p>

          <div className={styles.heroPillsRow}>
            <div className={styles.heroStatPill}>
              <IoPlayCircle size={16} color="#60a5fa" />
              <span>Zero Investment Needed</span>
            </div>
            <div className={styles.heroStatPill}>
              <IoTrophy size={16} color="#fbbf24" />
              <span>Instant Balance Credit</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchAdsHeaderBanner;
