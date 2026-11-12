import React, { useState, useEffect } from 'react';
import { TbDeviceTv } from 'react-icons/tb';
import { IoSparkles, IoTimeOutline, IoCheckmarkCircle } from 'react-icons/io5';
import styles from '../WatchAds.module.css';

const AdRewardCard = ({ ad, isWatching, activeSlot, onWatch }) => {
  const [localCooldown, setLocalCooldown] = useState(() => Math.max(0, ad.cooldown || 0));

  // Synchronize with parent ad prop updates
  useEffect(() => {
    setLocalCooldown(Math.max(0, ad.cooldown || 0));
  }, [ad.cooldown]);

  const isCooldownActive = localCooldown > 0;
  const isLoadingThis = activeSlot === ad.slot;
  const isButtonDisabled = isCooldownActive || isWatching;

  // Local tick countdown decrementer without per-second interval recreation
  useEffect(() => {
    if (!isCooldownActive) return;

    const timer = setInterval(() => {
      setLocalCooldown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isCooldownActive]);

  return (
    <div className="col-12 col-lg-10 mx-auto mb-3">
      <div className={`${styles.adCard} ${isCooldownActive ? styles.adCardCooldown : ''}`}>
        {/* Decorative Sparkle Highlights */}
        <span className={styles.sparkle1} />
        <span className={styles.sparkle2} />

        <div className={styles.adCardLeft}>
          <div className={styles.adIconBox}>
            <TbDeviceTv className={styles.adTvIcon} />
            {isCooldownActive && (
              <span className={styles.cooldownBadgeIcon}>
                <IoTimeOutline size={12} />
              </span>
            )}
          </div>

          <div className={styles.adInfo}>
            <div className="d-flex align-items-center gap-2">
              <h5 className={styles.adTitle}>Sponsored Ad Placement</h5>
              <span className={styles.slotTag}>Slot #{ad.slot}</span>
            </div>

            <div className={styles.rewardLine}>
              <div className={styles.coinBadge}>
                <IoSparkles className={styles.coinIcon} />
                <span className={styles.coinAmount}>+{ad.coins}</span>
                <span className={styles.coinLabel}>VEs</span>
              </div>

              {isCooldownActive ? (
                <span className={styles.statusCooldown}>
                  <IoTimeOutline size={13} />
                  <span>Cooldown: {localCooldown}s</span>
                </span>
              ) : (
                <span className={styles.statusReady}>
                  <IoCheckmarkCircle size={13} />
                  <span>Ready to Claim</span>
                </span>
              )}
            </div>
          </div>
        </div>

        <div className={styles.adCardRight}>
          <button
            className={`${styles.watchButton} ${isLoadingThis ? styles.buttonLoading : ''}`}
            disabled={isButtonDisabled}
            onClick={() => onWatch(ad.slot)}
            aria-label={`Watch ad slot ${ad.slot} for ${ad.coins} VEs`}
          >
            {isLoadingThis ? (
              <span className="d-flex align-items-center gap-2">
                <span className={styles.spinner} />
                <span>Verifying...</span>
              </span>
            ) : isCooldownActive ? (
              <span className="d-flex align-items-center gap-1">
                <IoTimeOutline size={16} />
                <span>{localCooldown}s</span>
              </span>
            ) : (
              <span>Watch Ad</span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdRewardCard;
