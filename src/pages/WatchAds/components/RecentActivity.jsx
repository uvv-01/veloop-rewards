import React from 'react';
import { IoCheckmarkCircle, IoTimeOutline, IoSparkles } from 'react-icons/io5';
import styles from '../WatchAds.module.css';

const RecentActivity = ({ transactions = [] }) => {
  if (!transactions || transactions.length === 0) {
    return null; // Omit if no transactions have taken place, never fabricate data
  }

  return (
    <section className="col-12 mb-5">
      <div className={styles.recentActivityCard}>
        <div className={styles.recentHeader}>
          <div className="d-flex align-items-center gap-2">
            <IoCheckmarkCircle size={18} color="#42D6A4" />
            <h4 className={styles.recentTitle}>Verified Session Earnings</h4>
          </div>
          <span className={styles.recentCountBadge}>
            {transactions.length} {transactions.length === 1 ? 'Transaction' : 'Transactions'}
          </span>
        </div>

        <div className={styles.transactionsList}>
          {transactions.map((tx, idx) => (
            <div key={tx.id || idx} className={styles.txRow}>
              <div className={styles.txLeft}>
                <div className={styles.txIconBox}>
                  <IoSparkles size={16} color="#F5C451" />
                </div>
                <div>
                  <span className={styles.txCampaignName}>{tx.campaignTitle}</span>
                  <span className={styles.txMeta}>
                    <IoTimeOutline size={12} />
                    {tx.timestamp} • Slot #{tx.slot}
                  </span>
                </div>
              </div>

              <div className={styles.txRight}>
                <span className={styles.txAmount}>+{tx.coins} VEs</span>
                <span className={styles.txStatusPill}>Server Confirmed</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentActivity;
