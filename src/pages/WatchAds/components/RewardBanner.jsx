import React from 'react';
import { Link } from 'react-router-dom';
import { 
  IoShieldCheckmarkOutline, 
  IoArrowForward, 
  IoSparkles,
  IoLockClosedOutline 
} from 'react-icons/io5';
import styles from '../WatchAds.module.css';

const RewardBanner = () => {
  return (
    <section className="col-12 mb-5">
      <div className={styles.rewardBannerCard}>
        {/* Ambient Glows */}
        <div className={styles.bannerGlowViolet} />
        <div className={styles.bannerGlowMint} />

        <div className="row align-items-center g-4 position-relative" style={{ zIndex: 2 }}>
          {/* Left Column: Heading and Messaging */}
          <div className="col-12 col-lg-8">
            <div className={styles.bannerBadge}>
              <IoShieldCheckmarkOutline size={14} />
              <span>CRYPTOGRAPHIC SERVER VERIFICATION</span>
            </div>

            <h3 className={styles.bannerHeadline}>
              Every VE Counts.
            </h3>

            <p className={styles.bannerCopy}>
              Your rewards are credited directly to your platform wallet after successful 
              server postback verification. Standard withdrawal threshold applies via UPI and PayPal.
            </p>

            <div className={styles.bannerTrustPoints}>
              <div className={styles.bannerTrustItem}>
                <IoLockClosedOutline size={14} color="#42D6A4" />
                <span>Zero client-side spoofing</span>
              </div>
              <div className={styles.bannerTrustItem}>
                <IoSparkles size={14} color="#F5C451" />
                <span>Real-time wallet synchronization</span>
              </div>
            </div>
          </div>

          {/* Right Column: CTA & Earning Policy Link */}
          <div className="col-12 col-lg-4 text-lg-end">
            <Link
              to="/help-center/earning/watch-ads"
              className={styles.bannerCtaLink}
              aria-label="View Earning Guide and Policy"
            >
              <span>View Earning Guide &amp; Policy</span>
              <IoArrowForward size={16} />
            </Link>
            <span className={styles.bannerMicroText}>
              Compliant with VELoop Terms &amp; Anti-Fraud Guidelines
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardBanner;
