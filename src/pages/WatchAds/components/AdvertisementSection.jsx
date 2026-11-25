import React, { useState } from 'react';
import { IoSparkles, IoFilterOutline, IoLayersOutline } from 'react-icons/io5';
import AdRewardCard from './AdRewardCard';
import styles from '../WatchAds.module.css';

const CATEGORIES = ['All', 'Fintech', 'Privacy & Tech', 'Crypto & Stocks', 'Education', 'E-Commerce'];

const AdvertisementSection = ({ ads = [], isWatching, activeSlot, onWatch }) => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredAds = ads.filter((ad) => {
    if (selectedCategory === 'All') return true;
    return ad.category === selectedCategory;
  });

  const availableCount = ads.filter((ad) => !ad.cooldown || ad.cooldown <= 0).length;

  return (
    <section id="explore-ads" className="col-12 mb-5">
      {/* Section Header */}
      <div className={styles.sectionHeaderWrap}>
        <div className={styles.sectionTitleBlock}>
          <div className="d-flex align-items-center gap-2 mb-1">
            <span className={styles.sectionAccentLine} />
            <span className={styles.sectionSuperTitle}>SPONSOR SHOWCASE</span>
          </div>
          <h2 className={styles.sectionTitle}>Explore &amp; Earn</h2>
          <p className={styles.sectionSubtitle}>
            Choose a verified campaign and earn VEs after successful server verification.
          </p>
        </div>

        {/* Dynamic Badge & Live Counter */}
        <div className={styles.sectionHeaderStats}>
          <div className={styles.availableBadgePill}>
            <span className={styles.liveIndicatorPulse} />
            <span><strong>{availableCount} of {ads.length}</strong> Ads Ready</span>
          </div>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className={styles.filterPillsRow}>
        <div className={styles.filterIconLabel}>
          <IoFilterOutline size={14} />
          <span>Filter:</span>
        </div>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`${styles.filterPill} ${selectedCategory === cat ? styles.filterPillActive : ''}`}
            aria-label={`Filter by ${cat}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* 3-Column / 2-Column / 1-Column Responsive Cards Grid */}
      <div className="row g-4 mt-1">
        {filteredAds.map((ad) => (
          <AdRewardCard
            key={ad.slot}
            ad={ad}
            isWatching={isWatching}
            activeSlot={activeSlot}
            onWatch={onWatch}
          />
        ))}
      </div>
    </section>
  );
};

export default AdvertisementSection;
