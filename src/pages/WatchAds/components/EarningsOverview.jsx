import React from 'react';
import { 
  IoWalletOutline, 
  IoTrendingUpOutline, 
  IoLayersOutline, 
  IoCheckmarkDoneCircleOutline 
} from 'react-icons/io5';
import styles from '../WatchAds.module.css';

const EarningsOverview = ({ 
  userBalance = 480, 
  sessionEarned = 0, 
  availableCount = 6, 
  completedCount = 0 
}) => {
  const metrics = [
    {
      id: 'balance',
      label: 'Total VE Balance',
      value: `${userBalance} VEs`,
      description: 'Available to redeem',
      icon: IoWalletOutline,
      accentColor: '#F5C451',
      bgGlow: 'rgba(245, 196, 81, 0.12)',
    },
    {
      id: 'session',
      label: 'Earned Today',
      value: `+${sessionEarned} VEs`,
      description: 'Confirmed this session',
      icon: IoTrendingUpOutline,
      accentColor: '#42D6A4',
      bgGlow: 'rgba(66, 214, 164, 0.12)',
    },
    {
      id: 'available',
      label: 'Available Ads',
      value: `${availableCount}`,
      description: 'Ready to claim right now',
      icon: IoLayersOutline,
      accentColor: '#8B5CF6',
      bgGlow: 'rgba(139, 92, 246, 0.12)',
    },
    {
      id: 'completed',
      label: 'Ads Completed Today',
      value: `${completedCount}`,
      description: 'Watched & verified',
      icon: IoCheckmarkDoneCircleOutline,
      accentColor: '#38BDF8',
      bgGlow: 'rgba(56, 189, 248, 0.12)',
    },
  ];

  return (
    <section className="col-12 mb-4">
      <div className="row g-3">
        {metrics.map((metric) => {
          const Icon = metric.icon;
          return (
            <div key={metric.id} className="col-12 col-sm-6 col-lg-3">
              <div className={styles.metricCard}>
                <div className={styles.metricHeader}>
                  <div
                    className={styles.metricIconBox}
                    style={{
                      background: metric.bgGlow,
                      color: metric.accentColor,
                    }}
                  >
                    <Icon size={20} />
                  </div>
                  <span className={styles.metricLabel}>{metric.label}</span>
                </div>

                <div className={styles.metricValueWrap}>
                  <span
                    className={styles.metricValue}
                    style={{
                      color: metric.id === 'balance' ? '#F5C451' : '#F4F6FC',
                    }}
                  >
                    {metric.value}
                  </span>
                  <span className={styles.metricDescription}>{metric.description}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default EarningsOverview;
