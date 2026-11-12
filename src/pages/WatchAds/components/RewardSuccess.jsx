import React, { useEffect, useRef } from 'react';
import { IoCheckmarkCircle, IoSparkles, IoClose } from 'react-icons/io5';
import styles from '../WatchAds.module.css';

const RewardSuccess = ({ coinsEarned, onClose }) => {
  const modalRef = useRef(null);
  const previouslyFocusedElement = useRef(null);

  // Helper to query all focusable elements within the modal
  const getFocusableElements = () => {
    if (!modalRef.current) return [];
    const focusableSelector = [
      'button:not([disabled])',
      '[href]',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])',
    ].join(', ');
    return Array.from(modalRef.current.querySelectorAll(focusableSelector));
  };

  useEffect(() => {
    if (!coinsEarned) return;

    // 1. Record previously focused element before modal takes focus
    previouslyFocusedElement.current = document.activeElement;

    // 2. Set initial focus to primary confirmation button
    const focusTimer = requestAnimationFrame(() => {
      const focusable = getFocusableElements();
      if (focusable.length > 0) {
        const confirmBtn = modalRef.current?.querySelector(`.${styles.modalConfirmBtn}`);
        if (confirmBtn) {
          confirmBtn.focus();
        } else {
          focusable[0].focus();
        }
      }
    });

    // 3. Focus containment trap and Escape dismissal handler
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        const focusable = getFocusableElements();
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }

        const firstElement = focusable[0];
        const lastElement = focusable[focusable.length - 1];

        if (e.shiftKey) {
          // Shift + Tab: wrap from first to last
          if (
            document.activeElement === firstElement ||
            !modalRef.current?.contains(document.activeElement)
          ) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          // Tab: wrap from last to first
          if (
            document.activeElement === lastElement ||
            !modalRef.current?.contains(document.activeElement)
          ) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    // 4. Cleanup and focus restoration on modal close / unmount
    return () => {
      cancelAnimationFrame(focusTimer);
      window.removeEventListener('keydown', handleKeyDown);

      const prevElement = previouslyFocusedElement.current;

      if (prevElement && document.body.contains(prevElement)) {
        // Restore focus to original trigger if still enabled
        if (!prevElement.disabled && typeof prevElement.focus === 'function') {
          prevElement.focus();
          return;
        }

        // If the trigger button is disabled due to cooldown, restore focus
        // to its corresponding ad card container (sensible enabled fallback)
        const parentCard =
          prevElement.closest?.(`.${styles.adCard}`) ||
          prevElement.closest?.('[class*="adCard"]') ||
          prevElement.closest?.('.col-12');

        if (parentCard && document.body.contains(parentCard)) {
          if (!parentCard.hasAttribute('tabindex')) {
            parentCard.setAttribute('tabindex', '-1');
          }
          parentCard.focus();
          return;
        }
      }

      // Fallback: focus first active cooldown card container if available
      const activeCooldownCard =
        document.querySelector(`.${styles.adCardCooldown}`) ||
        document.querySelector(`.${styles.adCard}`);

      if (activeCooldownCard && document.body.contains(activeCooldownCard)) {
        if (!activeCooldownCard.hasAttribute('tabindex')) {
          activeCooldownCard.setAttribute('tabindex', '-1');
        }
        activeCooldownCard.focus();
        return;
      }

      // Ultimate fallback: focus main content region (never a disabled element)
      const mainFallback = document.querySelector('main') || document.body;
      if (mainFallback && typeof mainFallback.focus === 'function') {
        if (!mainFallback.hasAttribute('tabindex')) {
          mainFallback.setAttribute('tabindex', '-1');
        }
        mainFallback.focus();
      }
    };
  }, [coinsEarned, onClose]);

  if (!coinsEarned) return null;

  return (
    <div className={styles.modalBackdrop} onClick={onClose}>
      <div
        ref={modalRef}
        className={styles.modalCard}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="reward-modal-title"
      >
        <button
          className={styles.modalCloseBtn}
          onClick={onClose}
          aria-label="Close modal"
        >
          <IoClose size={20} />
        </button>

        <div className={styles.successIconWrapper}>
          <IoCheckmarkCircle size={64} color="#10b981" />
          <div className={styles.successPulse} />
        </div>

        <h3 id="reward-modal-title" className={styles.modalTitle}>Reward Verified & Credited!</h3>
        <p className={styles.modalSubtitle}>
          Thank you for engaging with our verified sponsor campaign.
        </p>

        <div className={styles.rewardPill}>
          <IoSparkles size={20} color="#f59e0b" />
          <span className={styles.rewardPillAmount}>+{coinsEarned}</span>
          <span className={styles.rewardPillUnit}>VEs Credited</span>
        </div>

        <p className={styles.modalFootnote}>
          Added to your available balance. Refreshing ad slot cooldown...
        </p>

        <button
          className={styles.modalConfirmBtn}
          onClick={onClose}
          autoFocus
        >
          Continue Earning
        </button>
      </div>
    </div>
  );
};

export default RewardSuccess;
