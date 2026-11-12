import React from 'react';
import { IoInformationCircleOutline, IoShieldCheckmarkOutline, IoCashOutline, IoHourglassOutline } from 'react-icons/io5';
import styles from '../WatchAds.module.css';

const RewardInformation = () => {
  return (
    <div className="col-12 col-lg-10 mx-auto mt-4 mb-4">
      <div className={styles.infoCard}>
        <div className="d-flex align-items-center gap-2 mb-3">
          <IoInformationCircleOutline size={22} color="#60a5fa" />
          <h4 className={styles.infoHeading}>Earning & Verification Rules</h4>
        </div>

        <div className="row g-3">
          <div className="col-12 col-md-4">
            <div className={styles.infoStepBox}>
              <div className={styles.stepNum}>1</div>
              <p className={styles.stepTitle}>Watch Full Placement</p>
              <p className={styles.stepDesc}>
                Remain on the page while the sponsor advertisement completes. Exiting or reloading prematurely voids verification.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className={styles.infoStepBox}>
              <div className={styles.stepNum}>2</div>
              <p className={styles.stepTitle}>Direct VE Credits</p>
              <p className={styles.stepDesc}>
                Upon server postback confirmation, VEs (Veloop Earnings) are credited immediately to your internal platform wallet.
              </p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className={styles.infoStepBox}>
              <div className={styles.stepNum}>3</div>
              <p className={styles.stepTitle}>Withdrawal Eligibility</p>
              <p className={styles.stepDesc}>
                VEs can be redeemed via UPI bank transfer or PayPal once your account meets the standard minimum threshold.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardInformation;
