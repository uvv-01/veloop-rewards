# MASTER SOURCE REGISTER & EVIDENCE LOG
**Project:** VELoop Rewards — Competitive Intelligence Research  
**Document Reference:** `VELOOP-SR-2026-01`  
**Last Updated:** November 4, 2026  
**Auditor:** Competitive Research & Verification Specialist  

---

## 1. SOURCE CLASSIFICATION & EVALUATION TAXONOMY

Every factual claim in this research repository is evaluated against a strict confidence hierarchy:
* **VERIFIED:** Directly documented via primary official sources (platform domain, legal registries, official help centers, live production application).
* **PARTIALLY VERIFIED:** Supported by credible industry reporting or partner documentation, but secondary details remain unconfirmed.
* **UNVERIFIED:** Publicly discussed or self-reported by users without verifiable documentation.
* **OUTDATED:** Previously accurate operational details that have been deprecated, sunset, or superseded.

---

## 2. JUMPTASK EVIDENCE REGISTER

| ID | Subject / Claim | Primary Source URL | Source Type | Date Accessed | Evidence Type / File Link | Confidence Level | Limitations & Analysis Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **JT-001** | JumpTask legal corporate registration (JMPT Technologies OÜ) | [tracxn.com](https://tracxn.com), Estonian Commercial Registry | Public Corporate Records | 2026-11-04 | Registry Code: 16417156 | **VERIFIED** | Incorporated in Harju maakond, Tallinn, Estonia on Jan 5, 2022. Operational arm Hiville, UAB in Vilnius, Lithuania. |
| **JT-002** | Executive Leadership: Laurynas Janušonis is CEO | [jumptask.io/about](https://jumptask.io) | Official Platform About Page | 2026-11-04 | Press & Leadership Directory | **VERIFIED** | Co-founder Juozapas M. Preikša led launch in 2022; Laurynas Janušonis currently serves as active CEO. |
| **JT-003** | Staking Discontinued and UI Sunset Jan 2026 | [support.jumptask.io](https://support.jumptask.io) | Official Support Knowledge Base | 2026-11-04 | [Screenshot](file:///c:/Users/ADMIN/veerloop/VELOOP-INTERNSHIP/08_SCREENSHOTS/JUMPTASK/08_jumptask_staking.png) | **VERIFIED** | Staking pools closed Jan 13, 2025; UI shut down Jan 31, 2026. Manual claim via BscScan contract only. Crucial negative case study. |
| **JT-004** | Credit Accounting: 1,000 Credits = $1.00 USD | [support.jumptask.io](https://support.jumptask.io) | Official Support Documentation | 2026-11-04 | Knowledge Base Article | **VERIFIED** | Replaces fluctuating token display with fixed fiat-pegged internal units. |
| **JT-005** | Withdrawal Thresholds: $1.00 initial, $0.50 subsequent | [support.jumptask.io](https://support.jumptask.io) | Official Help Center | 2026-11-04 | Knowledge Base Payout Rules | **VERIFIED** | Extremely low threshold compared to traditional GPTs ($5–$20). Lowers user skepticism. |
| **JT-006** | Payout Fulfillment Partner: GIFQ | [support.jumptask.io](https://support.jumptask.io), [gifq.com](https://gifq.com) | Official Integration Documentation | 2026-11-04 | Partner Portal (`redeem.gifq.com`) | **VERIFIED** | Handles non-crypto cashouts (gift cards, prepaid cards, PayPal equivalents). |
| **JT-007** | Referral System: 10% Lifetime RevShare + 10% First Task | [support.jumptask.io](https://support.jumptask.io) | Official Referral Terms | 2026-11-04 | Dashboard Referral Documentation | **VERIFIED** | Referrer earns 10% lifetime; referee receives 10% on first task. Paid from platform margin. |
| **JT-008** | Honeygain Partnership & JumpTask Mode | [honeygain.zendesk.com](https://honeygain.zendesk.com) | Strategic Partner Knowledge Base | 2026-11-04 | Official Partner FAQ | **VERIFIED** | Bypasses Honeygain's $20 minimum threshold for instant micro-payouts via JumpTask credits. |
| **JT-009** | Integrated Offerwalls: Torox, AyeT, CPX, BitLabs, Lootably | [support.jumptask.io](https://support.jumptask.io), [app.jumptask.io](https://app.jumptask.io) | Production Interface & Help Docs | 2026-11-04 | [Screenshot](file:///c:/Users/ADMIN/veerloop/VELOOP-INTERNSHIP/08_SCREENSHOTS/JUMPTASK/02_jumptask_app_dashboard.png) | **VERIFIED** | In-app iframe tracking for Torox; direct survey routing for CPX and BitLabs. |
| **JT-010** | User Sentiment & Trustpilot Complaints (1.9/5 stars) | [trustpilot.com/review/jumptask.io](https://trustpilot.com) | Independent User Reviews & Reddit | 2026-11-04 | Community Review Aggregation | **VERIFIED** | Frequent account bans at payout threshold, automated VPN detection false-positives, non-responsive support. |

---

## 3. VELOOP REWARDS EVIDENCE REGISTER

| ID | Subject / Claim | Primary Source URL | Source Type | Date Accessed | Evidence Type / File Link | Confidence Level | Limitations & Analysis Notes |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **VL-001** | VELoop Production Website & Web Architecture | `https://velooprewards.in` | Live Production Application | 2026-11-04 | [Screenshot](file:///c:/Users/ADMIN/veerloop/VELOOP-INTERNSHIP/08_SCREENSHOTS/VELOOP/01_veloop_landing.png) | **VERIFIED** | React / Vite SPA frontend deployed on custom domain with Google OAuth. |
| **VL-002** | VELoop Backend Service & Infrastructure | `https://veloop-backend.onrender.com` | Production API Bundle Disclosed | 2026-11-04 | Javascript Bundle Endpoint Extract | **VERIFIED** | Node.js / Express backend hosted on Render cloud infrastructure. |
| **VL-003** | Corporate Identity & Founder | Platform Legal Terms & Public Profiles | Official Platform Terms | 2026-11-04 | [Screenshot](file:///c:/Users/ADMIN/veerloop/VELOOP-INTERNSHIP/08_SCREENSHOTS/VELOOP/03_veloop_terms.png) | **VERIFIED** | Founder & CEO: Ayan Alam; Origin: Ramgarh, Jharkhand, India. |
| **VL-004** | 7-Day Daily Streak Architecture | GitHub `ayush8620/VELoop-Daily-Streak-Rewards` | Open-Source Code Repository | 2026-11-04 | GitHub Repository Codebase | **VERIFIED** | Server-side time enforcement, 24-48h grace period, automated broken-cycle reset. |
| **VL-005** | Planned & Existing Feature Inventory | `https://velooprewards.in` frontend bundle | Production Route Inspection | 2026-11-04 | [Screenshot](file:///c:/Users/ADMIN/veerloop/VELOOP-INTERNSHIP/08_SCREENSHOTS/VELOOP/04_veloop_help_center.png) | **VERIFIED** | Features include Watch Ads, Spin Wheel, Tap-n-Earn, Captcha, Staking, Vault, UPI Payouts. |
