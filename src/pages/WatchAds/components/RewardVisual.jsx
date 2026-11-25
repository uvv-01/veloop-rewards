import React from 'react';
import { 
  IoSparkles, 
  IoShieldCheckmark, 
  IoFlashOutline, 
  IoCheckmarkCircle,
  IoWalletOutline 
} from 'react-icons/io5';

const RewardVisual = ({ userBalance = 480 }) => {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '460px',
        margin: '0 auto',
        minHeight: '340px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Ambient Lighting Cones (Controlled Purple & Mint Glows) */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          right: '10%',
          width: '260px',
          height: '260px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.28) 0%, transparent 70%)',
          filter: 'blur(45px)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '5%',
          left: '5%',
          width: '220px',
          height: '220px',
          background: 'radial-gradient(circle, rgba(66, 214, 164, 0.22) 0%, transparent 70%)',
          filter: 'blur(40px)',
          pointerEvents: 'none',
          borderRadius: '50%',
        }}
      />

      {/* Outer Subtle Concentric Orbit Ring */}
      <div
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          border: '1px dashed rgba(139, 92, 246, 0.22)',
          pointerEvents: 'none',
        }}
      />

      {/* Main Elevated Fintech Rewards Card */}
      <div
        style={{
          position: 'relative',
          width: '320px',
          background: 'linear-gradient(135deg, rgba(22, 31, 48, 0.95) 0%, rgba(17, 24, 39, 0.98) 100%)',
          border: '1px solid rgba(139, 92, 246, 0.35)',
          borderRadius: '20px',
          padding: '24px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.65), 0 0 24px rgba(139, 92, 246, 0.15)',
          backdropFilter: 'blur(16px)',
          zIndex: 2,
        }}
      >
        {/* Card Header: Brand Monogram & Chip */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #8B5CF6 0%, #6D28D9 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)',
              }}
            >
              <span style={{ fontFamily: "'Outfit', sans-serif", fontWeight: 800, fontSize: '13px', color: '#ffffff' }}>
                VE
              </span>
            </div>
            <div>
              <span style={{ fontSize: '12px', fontWeight: 700, color: '#F4F6FC', letterSpacing: '0.4px' }}>
                VELOOP PLATINUM
              </span>
              <span style={{ display: 'block', fontSize: '10px', color: '#98A5B8' }}>
                Rewards Wallet
              </span>
            </div>
          </div>

          {/* Micro Chip Graphic */}
          <div
            style={{
              width: '36px',
              height: '26px',
              borderRadius: '6px',
              background: 'linear-gradient(135deg, #F5C451 0%, #D97706 100%)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              position: 'relative',
              boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.4)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                top: '50%',
                left: 0,
                right: 0,
                height: '1px',
                background: 'rgba(0,0,0,0.3)',
              }}
            />
          </div>
        </div>

        {/* Balance Display */}
        <div style={{ marginBottom: '16px' }}>
          <span style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.6px', color: '#98A5B8' }}>
            Current Verified Balance
          </span>
          <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginTop: '2px' }}>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '32px',
                fontWeight: 800,
                color: '#F4F6FC',
                letterSpacing: '-0.5px',
              }}
            >
              {userBalance}
            </span>
            <span
              style={{
                fontFamily: "'Outfit', sans-serif",
                fontSize: '16px',
                fontWeight: 800,
                color: '#F5C451',
                background: 'rgba(245, 196, 81, 0.12)',
                padding: '2px 8px',
                borderRadius: '6px',
                border: '1px solid rgba(245, 196, 81, 0.3)',
              }}
            >
              VEs
            </span>
          </div>
        </div>

        {/* Card Footer: Partner ID & Verified Pill */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '14px',
            borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          <span style={{ fontSize: '11px', fontFamily: "'Chivo Mono', monospace", color: '#98A5B8' }}>
            VL-78291 • ACTIVE
          </span>
          <span
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
              fontSize: '11px',
              fontWeight: 700,
              color: '#42D6A4',
            }}
          >
            <IoShieldCheckmark size={13} />
            Server Verified
          </span>
        </div>
      </div>

      {/* Floating 3D VE Coin Token (Top Right of Card) */}
      <div
        style={{
          position: 'absolute',
          top: '-15px',
          right: '5px',
          width: '64px',
          height: '64px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #FDE68A 0%, #F59E0B 50%, #B45309 100%)',
          border: '2px solid #FEF3C7',
          boxShadow: '0 12px 24px rgba(245, 158, 11, 0.4), inset 0 2px 4px rgba(255, 255, 255, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            border: '1px dashed rgba(255, 255, 255, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontFamily: "'Outfit', sans-serif",
              fontSize: '17px',
              fontWeight: 900,
              color: '#78350F',
              textShadow: '0 1px 1px rgba(255,255,255,0.4)',
            }}
          >
            VE
          </span>
        </div>
      </div>

      {/* Floating Badge 1: +35 VEs Server Verified (Bottom Center/Left) */}
      <div
        style={{
          position: 'absolute',
          bottom: '-10px',
          left: '10px',
          background: 'rgba(17, 24, 39, 0.95)',
          border: '1px solid rgba(66, 214, 164, 0.4)',
          borderRadius: '14px',
          padding: '7px 12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.5), 0 0 16px rgba(66, 214, 164, 0.15)',
          backdropFilter: 'blur(12px)',
          zIndex: 3,
        }}
      >
        <div
          style={{
            width: '24px',
            height: '24px',
            borderRadius: '50%',
            background: 'rgba(66, 214, 164, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#42D6A4',
          }}
        >
          <IoCheckmarkCircle size={15} />
        </div>
        <div>
          <span style={{ display: 'block', fontSize: '11px', fontWeight: 800, color: '#42D6A4' }}>
            +35 VEs Credited
          </span>
          <span style={{ fontSize: '9px', color: '#98A5B8' }}>
            Direct Postback
          </span>
        </div>
      </div>

      {/* Floating Badge 2: Instant Transfer (Top Left) */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          left: '5px',
          background: 'rgba(17, 24, 39, 0.92)',
          border: '1px solid rgba(139, 92, 246, 0.35)',
          borderRadius: '12px',
          padding: '5px 10px',
          display: 'flex',
          alignItems: 'center',
          gap: '6px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.4)',
          backdropFilter: 'blur(10px)',
          zIndex: 3,
        }}
      >
        <IoFlashOutline size={13} color="#8B5CF6" />
        <span style={{ fontSize: '10px', fontWeight: 700, color: '#F4F6FC' }}>
          Instant Sync
        </span>
      </div>
    </div>
  );
};

export default RewardVisual;
