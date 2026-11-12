# VELOOP Rewards — Watch Ads & Earn VEs (Task 04)

[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4.21-646CFF.svg)](https://vitejs.dev/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.3-7952B3.svg)](https://getbootstrap.com/)
[![License](https://img.shields.io/badge/License-Private-green.svg)]()

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/uvv-01/veloop-rewards)
[![Deploy to Render](https://render.com/images/deploy-to-render-button.svg)](https://render.com/deploy?repo=https://github.com/uvv-01/veloop-rewards)

Live Application: [https://uvv-01.github.io/veloop-rewards/#/watch-Ads](https://uvv-01.github.io/veloop-rewards/#/watch-Ads)

---

## 🌟 Key Features

### 1. Server-Confirmed Reward Crediting
* **Zero Client-Side Exploitation:** Rewards are credited **only** upon explicit, confirmed server response (`200 OK` with verified `coinsEarned`).
* **Resilient Error Handling:** In the event of 401 unauthorized errors, network failures, cooldown violations, or server timeouts, no coins are added to the session or platform wallet.
* **Double-Counting Prevention:** Balance state mutations in `AuthContext` are strictly synchronized with confirmed backend transactions.

### 2. State & Inventory Management
* **Dynamic Slot Listing:** Fetches real-time advertisement inventory via `GET /api/ad/offers`.
* **Distinct Network Failure State (`ErrorState`):** Renders dedicated offline iconography and a retry mechanism when the backend cannot be reached.
* **Legitimate Empty State (`EmptyState`):** Distinguishes between zero available sponsor campaigns and network outages.
* **Loading Skeleton (`LoadingSkeleton`):** Fluid, non-blocking shimmer skeleton during initial page load.

### 3. Cooldown Lifecycle Optimization
* **Single Interval Execution:** Cooldown timers utilize a stable boolean dependency (`isCooldownActive`) to avoid per-second interval destruction and recreation.
* **Bounded Non-Negative Countdowns:** Timers enforce a strict zero floor (`Math.max(0, cooldown)`), eliminating negative countdown drift.

### 4. Accessibility & WAI-ARIA Compliance (WCAG 2.1)
* **Focus Containment (Modal Trap):** Modal dialog (`RewardSuccess`) captures and wraps keyboard navigation (`Tab` and `Shift+Tab`) exclusively between interactive controls.
* **Intelligent Focus Restoration:** Automatically restores focus upon dismissal to the active trigger or its parent ad card container when the trigger is in a disabled cooldown state. Never attempts to focus a disabled DOM node.
* **High-Contrast Keyboard Rings:** Visible `:focus-visible` indicators across all buttons and interactive controls without degrading mouse-click aesthetics.
* **Reduced Motion:** Comprehensive `@media (prefers-reduced-motion: reduce)` styles disable border sweeps, shimmer animations, and card hover translation lifts.

---

## 🛠️ Technology Stack

* **Frontend Framework:** React 18.3.1
* **Build Tool:** Vite 5.4.21
* **Styling:** CSS Modules, Bootstrap 5.3.3, Custom Dark Fintech Design System
* **Iconography:** React Icons (Ionicons 5, Tabler Icons)
* **HTTP Client:** Axios 1.7.9
* **Routing:** React Router DOM 6.28.0

---

## 📁 Project Architecture

```
veerloop/
├── public/
│   └── _redirects                   # SPA routing fallback for static hosts
├── src/
│   ├── components/
│   │   ├── Footer.jsx               # Global footer with help center integration
│   │   ├── ProtectedRoute.jsx       # Route guard enforcing authentication
│   │   └── TopNavbar.jsx            # Sticky navigation bar with live balance pill
│   ├── context/
│   │   └── AuthContext.jsx          # User authentication and balance state
│   ├── pages/
│   │   └── WatchAds/
│   │       ├── components/
│   │       │   ├── AdRewardCard.jsx         # Advertisement card with live cooldown
│   │       │   ├── DailyProgress.jsx        # Campaign slot readiness indicator
│   │       │   ├── EarningsOverview.jsx     # Session earnings and wallet metrics
│   │       │   ├── EmptyState.jsx           # Zero-ad campaign notice
│   │       │   ├── ErrorState.jsx           # Network failure and retry card
│   │       │   ├── LoadingSkeleton.jsx      # Shimmer loading skeleton
│   │       │   ├── RewardInformation.jsx    # Earning rules and policy details
│   │       │   ├── RewardSuccess.jsx        # Accessible celebratory reward modal
│   │       │   └── WatchAdsHeaderBanner.jsx # Hero section with ambient glows
│   │       ├── WatchAds.jsx                 # Page controller & API integration
│   │       └── WatchAds.module.css          # Scoped CSS module with responsive queries
│   ├── services/
│   │   └── api.js                   # Axios client with JWT bearer interceptors
│   ├── utils/
│   │   └── toast.js                 # Custom toast notifications
│   ├── App.jsx                      # Route definitions
│   ├── index.css                    # Global design tokens and focus rules
│   └── main.jsx                     # Application entry point
├── vercel.json                      # Vercel deployment and routing configuration
├── vite.config.js                   # Vite configuration
└── package.json                     # Dependency manifests
```

---

## 🚀 Getting Started

### Prerequisites
* Node.js: `v18.0.0` or higher
* npm: `v9.0.0` or higher

### Installation

1. Clone the repository:
```bash
git clone https://github.com/uvv-01/veloop-rewards.git
cd veloop-rewards
```

2. Install dependencies:
```bash
npm install
```

3. Configure Environment Variables (Optional):
Create a `.env` file in the root directory:
```env
VITE_API_BASE_URL=https://veloop-backend.onrender.com
```
*(Defaults automatically to the official VELoop Render backend if omitted).*

---

## 💻 Available Scripts

* **`npm run dev`** — Starts the local Vite development server with Hot Module Replacement (HMR).
* **`npm run build`** — Compiles the application into production-ready static assets in `dist/`.
* **`npm run preview`** — Locally serves the production build for testing.

---

## 🌐 Deployment Configuration

The application is optimized for zero-configuration deployment on **Vercel** and static hosting platforms:

* **Vercel Configuration:** Pre-configured via [`vercel.json`](./vercel.json) with SPA rewrites directing all routes to `/index.html`.
* **Netlify / Static Fallbacks:** Supported via [`public/_redirects`](./public/_redirects).
* **Route Redirections:** Directs `/` and `/Home` gracefully to the `/watch-Ads` target view.

---

## 🔒 Security & Code Standards

* **No Hardcoded Secrets:** JWT tokens and private keys are never exposed in source code.
* **Authenticated Interceptors:** All outgoing requests automatically attach `Authorization: Bearer <token>` via Axios interceptors.
* **Clean Git Hygiene:** Strict adherence to Git standards with zero third-party AI attribution tags.
