import React from 'react';
import { 
  IoShieldCheckmarkOutline, 
  IoCashOutline, 
  IoWalletOutline, 
  IoSparkles,
  IoArrowDownOutline,
  IoCheckmarkCircle
} from 'react-icons/io5';
import RewardVisual from './RewardVisual';
import styles from '../WatchAds.module.css';

const WatchAdsHero = ({ userBalance = 480, totalSlots = 6 }) => {
  const handleScrollToAds = () => {
    const section = document.getElementById('explore-ads');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="col-12 mb-4">
      <div className={styles.heroWrapper}>
        <div className="row align-items-center g-4">
          {/* Left Column: Typographic Content & Primary Action */}
          <div className="col-12 col-lg-7">
            <div className={styles.heroLeftContent}>
              {/* Category / Brand Badge */}
              <div className={styles.heroBrandBadge}>
                <IoSparkles className={styles.heroBadgeIcon} />
                <span>VELOOP REWARDS • PREMIUM SPONSORS</span>
              </div>

              {/* Main Headline */}
              <h1 className={styles.heroMainHeadline}>
                Turn Your Screen Time <br className="d-none d-sm-inline" />
                <span className={styles.headlineHighlight}>Into Real Rewards.</span>
              </h1>

              {/* Supporting Sentence */}
              <p className={styles.heroSubtext}>
                Watch verified partner campaigns and earn VEs directly into your platform wallet. 
                Programmatically verified by our secure server rewards engine.
              </p>

              {/* CTA Row */}
              <div className={styles.heroActionRow}>
                <button
                  type="button"
                  onClick={handleScrollToAds}
                  className={styles.heroPrimaryBtn}
                  aria-label="Explore available ads"
                >
                  <span>Explore Available Ads</span>
                  <IoArrowDownOutline size={18} />
                </button>

                <div className={styles.heroCounterPill}>
                  <span className={styles.liveIndicatorPulse} />
                  <span><strong>{totalSlots} Campaigns</strong> Ready</span>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className={styles.heroTrustGrid}>
                <div className={styles.trustItem}>
                  <IoShieldCheckmarkOutline className={styles.trustIconMint} />
                  <span>Server-verified rewards</span>
                </div>
                <div className={styles.trustItem}>
                  <IoCashOutline className={styles.trustIconGold} />
                  <span>Zero investment required</span>
                </div>
                <div className={styles.trustItem}>
                  <IoWalletOutline className={styles.trustIconViolet} />
                  <span>Direct wallet credit</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Distinctive Fintech Reward Visual */}
          <div className="col-12 col-lg-5">
            <RewardVisual userBalance={userBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WatchAdsHero;
