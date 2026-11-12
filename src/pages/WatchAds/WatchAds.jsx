import React, { useState, useEffect, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';
import api from '../../services/api';
import { showSuccess, showError } from '../../utils/toast';

import TopNavbar from '../../components/TopNavbar';
import Footer from '../../components/Footer';

import WatchAdsHeaderBanner from './components/WatchAdsHeaderBanner';
import EarningsOverview from './components/EarningsOverview';
import DailyProgress from './components/DailyProgress';
import AdRewardCard from './components/AdRewardCard';
import RewardInformation from './components/RewardInformation';
import LoadingSkeleton from './components/LoadingSkeleton';
import EmptyState from './components/EmptyState';
import ErrorState from './components/ErrorState';
import RewardSuccess from './components/RewardSuccess';

import styles from './WatchAds.module.css';

const WatchAds = () => {
  const { user, setUser, setIsLoading: setGlobalLoading } = useAuth();

  const [ads, setAds] = useState([]);
  const [pageLoading, setPageLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);
  const [activeSlot, setActiveSlot] = useState(null);
  const [isWatching, setIsWatching] = useState(false);
  const [sessionEarned, setSessionEarned] = useState(0);
  const [successModalCoins, setSuccessModalCoins] = useState(null);

  // Fetch available advertisement offers from backend API
  const fetchAdOffers = useCallback(async (showSkeleton = true) => {
    if (showSkeleton) {
      setPageLoading(true);
      if (setGlobalLoading) setGlobalLoading(true);
    }
    setFetchError(null);

    try {
      const response = await api.get('/api/ad/offers', {
        headers: user?.token ? { Authorization: `Bearer ${user.token}` } : {},
      });

      if (Array.isArray(response.data)) {
        setAds(response.data);
      } else {
        setAds([]);
      }
    } catch (error) {
      setAds([]);
      const errorMsg =
        error.response?.data?.message ||
        error.message ||
        'Unable to connect to advertisement network. Please check your connection.';
      setFetchError(errorMsg);
      if (showSkeleton) {
        showError(errorMsg);
      }
    } finally {
      setPageLoading(false);
      if (setGlobalLoading) setGlobalLoading(false);
    }
  }, [user?.token, setGlobalLoading]);

  useEffect(() => {
    fetchAdOffers(true);
  }, [fetchAdOffers]);

  // Execute Watch Ad action
  const handleWatchAd = async (slotId) => {
    if (isWatching) return;

    try {
      setIsWatching(true);
      setActiveSlot(slotId);

      // Preserve existing 3-second viewing / verification delay
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const response = await api.post(
        '/api/ad/watch',
        { slot: slotId, adCompleted: true },
        { headers: user?.token ? { Authorization: `Bearer ${user.token}` } : {} }
      );

      // Verify backend response explicitly confirms coinsEarned
      const coinsAwarded = response?.data?.coinsEarned;
      if (typeof coinsAwarded !== 'number' || coinsAwarded <= 0) {
        throw new Error(response?.data?.message || 'Invalid reward confirmation received from server.');
      }

      // Success path ONLY: Verified by backend
      setSessionEarned((prev) => prev + coinsAwarded);
      if (setUser) {
        setUser((prev) => ({
          ...prev,
          coins: (prev.coins || 0) + coinsAwarded,
        }));
      }

      // Trigger celebratory feedback
      setSuccessModalCoins(coinsAwarded);
      showSuccess(response?.data?.message || `You earned +${coinsAwarded} VEs!`);

      // Update local cooldown on the watched slot
      setAds((prev) =>
        prev.map((ad) => (ad.slot === slotId ? { ...ad, cooldown: 60 } : ad))
      );

      // Re-fetch backend offers to sync state
      await fetchAdOffers(false);
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        err.message ||
        'Ad verification failed. No rewards were credited.';
      showError(errorMessage);
      // Refresh offers on error in case cooldown or slot state changed on backend
      await fetchAdOffers(false);
    } finally {
      setActiveSlot(null);
      setIsWatching(false);
    }
  };

  return (
    <div className={styles.pageColor}>
      {/* Global Page Header with Back Navigation */}
      <TopNavbar id={13} navigation="/Home" title="Watch Ads & Earn" />

      <main className="container pt-4">
        {/* Hero Section */}
        <div className="row px-2">
          <WatchAdsHeaderBanner />
        </div>

        {/* Stats & Progress Overview */}
        <div className="row px-2">
          <EarningsOverview
            ads={ads}
            sessionEarned={sessionEarned}
            userBalance={user?.coins ?? 0}
          />
          <DailyProgress ads={ads} />
        </div>

        {/* Advertisements Grid */}
        <div className="row px-2">
          {pageLoading ? (
            <LoadingSkeleton />
          ) : fetchError ? (
            <ErrorState message={fetchError} onRetry={() => fetchAdOffers(true)} />
          ) : ads.length === 0 ? (
            <EmptyState onRefresh={() => fetchAdOffers(true)} />
          ) : (
            ads.map((ad) => (
              <AdRewardCard
                key={ad.slot}
                ad={ad}
                isWatching={isWatching}
                activeSlot={activeSlot}
                onWatch={handleWatchAd}
              />
            ))
          )}
        </div>

        {/* Earning & Platform Information */}
        <div className="row px-2">
          <RewardInformation />
        </div>
      </main>

      {/* Global Footer */}
      <Footer mt={50} mb={37} name="Watch AD" link="/help-center/earning/watch-ads" />

      {/* Verification Celebration Modal */}
      <RewardSuccess
        coinsEarned={successModalCoins}
        onClose={() => setSuccessModalCoins(null)}
      />
    </div>
  );
};

export default WatchAds;
