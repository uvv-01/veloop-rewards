# MASTER COMPETITIVE FEATURE MATRIX: GPT PLATFORMS
**Document Reference:** `VELOOP-MFM-2026-01`  
**Current Scope:** Initial Benchmark — JumpTask vs. VELoop Baseline  
**Auditor:** Senior Competitive Research Analyst  
**Last Updated:** November 4, 2026  

---

## 1. EVALUATION CRITERIA & STATUS LABELS

* **Confirmed:** Feature is fully operational, verified through live interface or active official documentation.
* **Partially Confirmed:** Evidence indicates feature exists or is actively developing, but operational parameters are limited or unverified.
* **Not Found:** No verifiable evidence found of feature existing.
* **Not Applicable:** Feature is irrelevant or incompatible with platform model.
* **Country-Dependent:** Availability, task volume, or payout options vary heavily by user geographic region.

---

## 2. BENCHMARK COMPARISON TABLE

| Evaluation Dimension | Sub-Feature / Capability | JumpTask (JMPT) | VELoop Rewards Baseline | Strategic Implication for VELoop |
| :--- | :--- | :--- | :--- | :--- |
| **Authentication & Profile** | Web2 Social Login (Google/Apple) | Confirmed (Google, FB, X via Web3Auth) | Confirmed (Google OAuth) | Equal parity. Essential for low-friction onboarding. |
| | Web3 Non-Custodial Connect | Confirmed (MetaMask, WalletConnect) | Not Applicable | VELoop should avoid crypto complexity for mass Indian audience. |
| | KYC at Signup | Not Found (Zero KYC) | Not Found (Zero KYC) | Maintain zero KYC at signup; defer to payout verification. |
| **Earning Channels** | Rewarded Gaming (CPE) | Confirmed (Torox, AyeT-Studios) | Not Found | **Critical Gap for VELoop:** Must integrate Torox/AyeT for high ARPU. |
| | Paid Surveys | Confirmed (CPX Research, BitLabs) | Partially Confirmed (Documented) | Integrate CPX Research iframe with server postback callback. |
| | App Downloads / Trials | Confirmed | Not Found | Requires third-party offerwall SDK integration. |
| | Rewarded Video Ads | Confirmed (Lootably) | Confirmed (`/watch-Ads`, `/watchAd-bonus`) | VELoop has native ad views; should supplement with Unity/AdMob SDKs. |
| | AI Data Annotation Tasks | Confirmed (Native Enterprise Portal) | Not Found | Potential high-margin P2 differentiation for VELoop in India. |
| | Microtasks / Social Follow | Confirmed | Partially Confirmed (`/help-center/earning/follow-and-earn`) | High retention for low-tier users; formalize social API checks. |
| | Passive Bandwidth Sharing | Confirmed (Honeygain Strategic Moat) | Not Found | Differentiating moat for JumpTask; explore passive partnerships. |
| | Tap-and-Earn Mini-Game | Not Found | Confirmed (`/tap-n-earn`, `/tap-token`) | VELoop advantage for rapid engagement, but requires anti-clicker bots. |
| | Captcha Solving | Not Found | Confirmed (`/captcha-tasks`) | Monetizable micro-work; watch for bot automation fraud. |
| **Gamification & Retention** | Daily Check-in / Streaks | Confirmed | Confirmed (7-Day Server-Enforced MERN Cycle) | Parity. VELoop's backend-driven time validation is well-architected. |
| | Fortune Spin Wheel | Not Found | Confirmed (`/spin-wheel`) | VELoop gamification asset; maintain strict daily spin caps. |
| | Weekly Leaderboard | Confirmed (Credits/$JMPT prize pools) | Confirmed (`/leaderboard`) | Calibrate weekly prize pools funded by ad arbitrage profits. |
| | Achievement Badges & Levels | Confirmed | Confirmed (`/Lvl-Dashboard`, Missions/Badges) | Strong user progression psychology; tie levels to higher withdrawal caps. |
| **Finance & Monetization** | Primary Internal Currency | Credits (1,000 Credits = $1.00 USD) | VEs (Veloop Earnings) + Gems | Maintain dual currency: VEs (fiat-convertible) + Gems (in-app utility). |
| | Native Token / Crypto Asset | Confirmed ($JMPT on BSC/Polygon) | Not Applicable | Crypto adds severe regulatory/tax burden in India (30% VDA tax). Avoid. |
| | Staking / Yield Vault | **Sunset & Discontinued (Jan 2026)** | Planned (`/staking`, `/contribution-vault`) | **Crucial Warning:** Cancel crypto staking; pivot to off-chain "Savings Vault". |
| | Minimum Withdrawal | $1.00 first payout, $0.50 subsequent | To be formalized (Target: ₹10–₹25) | Critical competitive lever: Low minimum builds initial user trust. |
| | Payout Methods | GIFQ (Gift cards, PayPal) + Crypto ($JMPT) | Planned UPI (Paytm/GPay/PhonePe) + PayPal | **VELoop's biggest market advantage:** Instant UPI is unmatched in India. |
| | Gasless / Zero-Fee Cashouts | Confirmed (Gas deducted from $JMPT) | Planned (Zero-fee UPI transfers) | Direct bank transfer via UPI removes intermediary fees entirely. |
| **Partner Integrations** | Offerwall Providers | Torox, AyeT, CPX, BitLabs, Lootably | In evaluation (AdGate policy cited) | High priority to sign publisher agreements with CPX & Torox. |
| | Strategic B2B Integrations | Honeygain (Exclusive bandwidth partner) | None currently documented | Explore regional strategic partnerships (e.g., student apps, telecom). |
| **Trust & UX** | User Review Sentiment | Poor (1.9/5 stars Trustpilot; ban complaints) | Early stage / minimal public reviews | Focus on transparent payout communication to avoid early review degradation. |
| | Customer Support Channels | Automated Zendesk / Discord Community | `/customer-service`, `/contact-compliance` | Provide human escalation paths for missing offer credits to beat JumpTask. |
