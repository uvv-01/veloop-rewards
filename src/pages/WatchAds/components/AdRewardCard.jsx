import React, { useState, useEffect } from 'react';
import { 
  IoSparkles, 
  IoTimeOutline, 
  IoCheckmarkCircle, 
  IoArrowForward, 
  IoEyeOutline,
  IoCheckmarkDone 
} from 'react-icons/io5';
import CampaignThumbnail from './CampaignThumbnail';
import styles from '../WatchAds.module.css';

const AdRewardCard = ({ ad, isWatching, activeSlot, onWatch }) => {
  const [localCooldown, setLocalCooldown] = useState(() => Math.max(0, ad.cooldown || 0));

  // Sync with prop updates from parent
  useEffect(() => {
    setLocalCooldown(Math.max(0, ad.cooldown || 0));
  }, [ad.cooldown]);

  const isCooldownActive = localCooldown > 0;
  const isLoadingThis = activeSlot === ad.slot;
  const isButtonDisabled = isCooldownActive || isWatching;

  // Single countdown interval per active cooldown
  useEffect(() => {
    if (!isCooldownActive) return;

    const timer = setInterval(() => {
      setLocalCooldown((prev) => (prev <= 1 ? 0 : prev - 1));
    }, 1000);

    return () => clearInterval(timer);
  }, [isCooldownActive]);

  return (
    <div className="col-12 col-md-6 col-lg-4 mb-4">
      <div 
        className={`${styles.adCard} ${isCooldownActive ? styles.adCardCooldown : ''}`}
        id={`ad-slot-${ad.slot}`}
      >
        {/* 16:9 Campaign Thumbnail */}
        <CampaignThumbnail
          campaignKey={ad.campaignKey || (ad.slot % 6 === 1 ? 'revolut' : ad.slot % 6 === 2 ? 'nordvpn' : ad.slot % 6 === 3 ? 'tradingview' : ad.slot % 6 === 4 ? 'duolingo' : ad.slot % 6 === 5 ? 'shopify' : 'spotify')}
          category={ad.category || 'Featured'}
          duration={ad.duration || `${(ad.slot * 15) % 45 + 15}s`}
          sponsor={ad.sponsor || 'Verified Partner'}
          title={ad.title}
          isWatching={isLoadingThis}
          isCooldown={isCooldownActive}
          cooldownSeconds={localCooldown}
        />

        {/* Card Body */}
        <div className={styles.adCardBody}>
          {/* Header Row: Sponsor Label & Slot # */}
          <div className={styles.adCardHeaderRow}>
            <span className={styles.sponsorName}>
              {ad.sponsor || 'Sponsor Campaign'}
            </span>
            <span className={styles.slotBadge}>
              Slot #{ad.slot}
            </span>
          </div>

          {/* Advertisement Title */}
          <h3 className={styles.adCardTitle} title={ad.title}>
            {ad.title || `Sponsored Video Placement #${ad.slot}`}
          </h3>

          {/* Short Description */}
          <p className={styles.adCardDesc}>
            {ad.description || 'Watch this interactive video spot to completion to receive verified platform credits.'}
          </p>

          {/* Reward & Status Badges Row */}
          <div className={styles.adMetaRow}>
            <div className={styles.rewardPill}>
              <IoSparkles className={styles.rewardSparkleIcon} />
              <span className={styles.rewardNumber}>+{ad.coins || 15}</span>
              <span className={styles.rewardCurrency}>VEs</span>
            </div>

            <div className={styles.statusBadgeWrap}>
              {isLoadingThis ? (
                <span className={styles.badgeWatching}>
                  <span className={styles.miniSpinner} />
                  <span>Watching</span>
                </span>
              ) : isCooldownActive ? (
                <span className={styles.badgeCooldown}>
                  <IoTimeOutline size={13} />
                  <span>{localCooldown}s</span>
                </span>
              ) : (
                <span className={styles.badgeAvailable}>
                  <IoCheckmarkCircle size={13} />
                  <span>Available</span>
                </span>
              )}
            </div>
          </div>

          {/* Full-Width Action Button */}
          <button
            type="button"
            className={`${styles.adCardCtaBtn} ${isLoadingThis ? styles.btnLoading : ''}`}
            disabled={isButtonDisabled}
            onClick={() => onWatch(ad.slot)}
            aria-label={`Watch ad slot ${ad.slot} for ${ad.coins || 15} VEs`}
          >
            {isLoadingThis ? (
              <span className="d-flex align-items-center justify-content-center gap-2">
                <span className={styles.spinner} />
                <span>Verifying Placement...</span>
              </span>
            ) : isCooldownActive ? (
              <span className="d-flex align-items-center justify-content-center gap-2">
                <IoTimeOutline size={16} />
                <span>Cooldown: {localCooldown}s</span>
              </span>
            ) : (
              <span className="d-flex align-items-center justify-content-center gap-2">
                <span>Watch Now</span>
                <IoArrowForward size={16} />
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdRewardCard;
