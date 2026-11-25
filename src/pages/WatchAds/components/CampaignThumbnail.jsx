import React from 'react';
import { 
  IoShieldCheckmarkOutline, 
  IoWalletOutline, 
  IoTrendingUpOutline, 
  IoSchoolOutline, 
  IoCartOutline, 
  IoMusicalNotesOutline,
  IoPlayCircleOutline,
  IoTimeOutline
} from 'react-icons/io5';

// Predefined palette for each campaign category
const CAMPAIGN_STYLES = {
  revolut: {
    bg: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #312e81 100%)',
    accent: '#818cf8',
    glow: 'rgba(99, 102, 241, 0.35)',
    icon: IoWalletOutline,
    pattern: 'radial-gradient(circle at 80% 20%, rgba(99, 102, 241, 0.4) 0%, transparent 60%)',
  },
  nordvpn: {
    bg: 'linear-gradient(135deg, #082f49 0%, #0c4a6e 50%, #075985 100%)',
    accent: '#38bdf8',
    glow: 'rgba(56, 189, 248, 0.35)',
    icon: IoShieldCheckmarkOutline,
    pattern: 'radial-gradient(circle at 20% 80%, rgba(56, 189, 248, 0.3) 0%, transparent 60%)',
  },
  tradingview: {
    bg: 'linear-gradient(135deg, #064e3b 0%, #065f46 50%, #047857 100%)',
    accent: '#42D6A4',
    glow: 'rgba(66, 214, 164, 0.35)',
    icon: IoTrendingUpOutline,
    pattern: 'radial-gradient(circle at 75% 75%, rgba(66, 214, 164, 0.35) 0%, transparent 60%)',
  },
  duolingo: {
    bg: 'linear-gradient(135deg, #14532d 0%, #15803d 50%, #16a34a 100%)',
    accent: '#86efac',
    glow: 'rgba(134, 239, 172, 0.35)',
    icon: IoSchoolOutline,
    pattern: 'radial-gradient(circle at 30% 30%, rgba(134, 239, 172, 0.3) 0%, transparent 60%)',
  },
  shopify: {
    bg: 'linear-gradient(135deg, #3b0764 0%, #581c87 50%, #6b21a8 100%)',
    accent: '#c084fc',
    glow: 'rgba(192, 132, 252, 0.35)',
    icon: IoCartOutline,
    pattern: 'radial-gradient(circle at 80% 30%, rgba(192, 132, 252, 0.3) 0%, transparent 60%)',
  },
  spotify: {
    bg: 'linear-gradient(135deg, #022c22 0%, #064e3b 50%, #059669 100%)',
    accent: '#34d399',
    glow: 'rgba(52, 211, 153, 0.35)',
    icon: IoMusicalNotesOutline,
    pattern: 'radial-gradient(circle at 20% 50%, rgba(52, 211, 153, 0.3) 0%, transparent 60%)',
  },
};

const CampaignThumbnail = ({ 
  campaignKey = 'revolut', 
  category = 'Sponsored', 
  duration = '30s', 
  sponsor = 'Sponsor',
  title = '',
  isWatching = false,
  isCooldown = false,
  cooldownSeconds = 0 
}) => {
  const style = CAMPAIGN_STYLES[campaignKey] || CAMPAIGN_STYLES.revolut;
  const CategoryIcon = style.icon;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        paddingTop: '56.25%', // 16:9 Aspect Ratio
        background: style.bg,
        borderRadius: '14px 14px 0 0',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
      }}
    >
      {/* Background Decorative Pattern & Ambient Glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: style.pattern,
          opacity: 0.8,
        }}
      />

      {/* Grid Mesh Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `linear-gradient(to right, rgba(255, 255, 255, 0.04) 1px, transparent 1px),
                            linear-gradient(to bottom, rgba(255, 255, 255, 0.04) 1px, transparent 1px)`,
          backgroundSize: '24px 24px',
          opacity: 0.7,
        }}
      />

      {/* Content Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 2,
        }}
      >
        {/* Top Badges Row */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '4px 10px',
              borderRadius: '20px',
              background: 'rgba(8, 11, 20, 0.75)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '11px',
              fontWeight: 700,
              color: style.accent,
              letterSpacing: '0.5px',
              textTransform: 'uppercase',
            }}
          >
            <CategoryIcon size={12} />
            {category}
          </span>

          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              padding: '4px 9px',
              borderRadius: '20px',
              background: 'rgba(8, 11, 20, 0.75)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontSize: '11px',
              fontWeight: 600,
              color: '#F4F6FC',
            }}
          >
            <IoTimeOutline size={12} color={style.accent} />
            {duration}
          </span>
        </div>

        {/* Center Play Indicator / Brand Monogram */}
        <div
          style={{
            alignSelf: 'center',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '52px',
            height: '52px',
            borderRadius: '50%',
            background: 'rgba(8, 11, 20, 0.65)',
            border: `1px solid ${style.accent}`,
            boxShadow: `0 0 20px ${style.glow}`,
            color: '#F4F6FC',
            backdropFilter: 'blur(10px)',
            transition: 'transform 0.3s ease',
          }}
        >
          <IoPlayCircleOutline size={30} color={style.accent} />
        </div>

        {/* Bottom Sponsor Pill */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 600,
              color: 'rgba(244, 246, 252, 0.85)',
              textShadow: '0 2px 4px rgba(0,0,0,0.6)',
            }}
          >
            {sponsor}
          </span>
          <span
            style={{
              fontSize: '11px',
              color: 'rgba(255, 255, 255, 0.5)',
              fontWeight: 500,
            }}
          >
            HD 1080p
          </span>
        </div>
      </div>

      {/* Active Watching / Cooldown Tint Overlay */}
      {isWatching && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(139, 92, 246, 0.45)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            zIndex: 5,
          }}
        >
          <div
            style={{
              width: '32px',
              height: '32px',
              border: '3px solid rgba(255,255,255,0.3)',
              borderTopColor: '#ffffff',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
            }}
          />
          <span style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
            Viewing Placement...
          </span>
        </div>
      )}

      {isCooldown && !isWatching && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(8, 11, 20, 0.75)',
            backdropFilter: 'blur(4px)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '6px',
            zIndex: 5,
          }}
        >
          <span
            style={{
              padding: '6px 14px',
              borderRadius: '20px',
              background: 'rgba(245, 196, 81, 0.15)',
              border: '1px solid rgba(245, 196, 81, 0.4)',
              color: '#F5C451',
              fontSize: '13px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
            }}
          >
            <IoTimeOutline size={15} />
            Cooldown: {cooldownSeconds}s
          </span>
        </div>
      )}
    </div>
  );
};

export default CampaignThumbnail;
