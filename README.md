# GigShield ⚡  
### AI-Native Parametric Income Protection for India’s Gig Workers

<p align="center">
  <img alt="Status" src="https://img.shields.io/badge/Status-Hackathon%20Prototype-blue">
  <img alt="Platform" src="https://img.shields.io/badge/Platform-PWA-brightgreen">
  <img alt="Stack" src="https://img.shields.io/badge/Stack-React%20%7C%20Node.js%20%7C%20FastAPI-orange">
  <img alt="Payments" src="https://img.shields.io/badge/Payouts-UPI-success">
  <img alt="Model" src="https://img.shields.io/badge/Insurance-Parametric-important">
  <img alt="Region" src="https://img.shields.io/badge/Built%20for-India-blueviolet">
</p>

<p align="center">
  <b>“When the rain stops them from working, we make sure their income doesn’t stop too.”</b>
</p>

---

## 📌 Overview

GigShield is an **AI-powered parametric micro-insurance platform** built for gig workers in India such as delivery partners from **Swiggy, Zomato, Blinkit, and Zepto**.

It protects workers from **income loss caused by external disruptions** like:

- 🌧 Heavy rain  
- 🌡 Extreme heat  
- 😷 Hazardous air quality  
- 🚫 Bandhs / curfews / civic shutdowns  
- 📵 Platform disruption signals  

Instead of asking workers to file claims, upload proof, or wait for approvals, GigShield uses a **zero-click claims model**:

> **Detect disruption → validate event → score fraud risk → send instant UPI payout**

---

## 🎯 Problem Statement

Gig workers in India earn daily, spend daily, and survive weekly.

A few hours of rain, heat, or shutdown can wipe out their earnings for the day. Traditional insurance products do not work for them because they are:

- built for salaried users
- paperwork-heavy
- claim-based
- too slow
- poorly aligned to weekly cash flow

### Why this matters

- Gig workers often have **little to no emergency buffer**
- A single bad day can affect **rent, EMI, fuel, and family expenses**
- Existing platforms provide **little or no direct income protection**
- External disruptions are **frequent, predictable, and measurable**

GigShield treats this as a solvable product problem.

---

## 👤 User Persona

### Ravi / Rajan — Delivery Partner

- Age: 26–31  
- City: Hyderabad / Bangalore  
- Platform: Swiggy / Blinkit / Zomato  
- Device: Low-end Android smartphone  
- Work pattern: 10–14 hrs/day  
- Net earnings: ₹450–₹650/day after fuel and maintenance  
- Family dependence: Primary earner  
- Financial vulnerability: Very low savings, no income protection  

### Real-world pain point

A 2–4 hour disruption during peak evening delivery time can wipe out a large share of the day’s earnings.

---

## 🧠 Our Solution

GigShield offers **weekly, AI-priced, parametric income protection**.

That means:

- the worker pays a small weekly premium
- GigShield continuously monitors disruption signals
- if a trigger condition is met and validated, payout happens automatically
- no claim is filed by the worker

### Core promise

- **Zero paperwork**
- **Zero claims friction**
- **Zero waiting**
- **Instant UPI payout**

---

## 🔄 End-to-End Workflow

```text
1. Register
   OTP verification + platform linking

2. Baseline Creation
   AI computes Daily Income Baseline (DIB) from earnings history

3. Smart Pricing
   Hyperlocal risk engine generates personalized weekly premium

4. Policy Activation
   Worker selects plan and pays through UPI

5. Monitoring
   Trigger engine polls weather, AQI, civic, and platform signals

6. Detection & Validation
   Multi-source verification + GPS + activity checks + fraud scoring

7. Payout
   Approved event triggers automatic UPI credit
```

---

## ⚙️ Zero-Click Claim Logic

GigShield is intentionally designed so that the worker **does not need to file a claim**.

When a disruption happens, the system automatically:

1. detects the trigger condition  
2. validates it using multiple independent sources  
3. confirms the worker is in the affected zone  
4. checks recent platform activity  
5. runs fraud detection  
6. calculates payout  
7. sends money to the worker via UPI  

### Example notification

> Rain detected in your area. ₹126 has been credited to your UPI.

---

## 💰 Weekly Premium Plans

| Plan | Weekly Premium | Max Weekly Payout | Best For |
|------|----------------|------------------|----------|
| **Basic Shield** | ₹29 | ₹800 | Part-time / low-risk workers |
| **Standard Shield** ⭐ | ₹49 | ₹1,500 | Full-time workers |
| **Pro Shield** | ₹89 | ₹3,000 | High earners / high-risk zones |

### Premium adjustment layer

Premiums are not fixed blindly. They are adjusted using a risk multiplier based on:

- pincode-level disruption frequency
- season / monsoon effect
- worker tenure
- local claim ratio
- forecasted risk

```text
final_premium = base_premium × risk_multiplier
```

### Example

```text
Hyderabad, July
Standard Shield = ₹49 × 1.35 = ₹66/week
```

---

## 🌦 Parametric Trigger Conditions

| Trigger | Threshold | Data Source | Minimum Duration |
|---------|-----------|-------------|------------------|
| Heavy Rain | ≥ 15 mm/hr | OpenWeatherMap + IMD | 45 min |
| Extreme Heat | Feels-like ≥ 44°C | Weather API + MAUSAM | 3 hrs |
| Severe AQI | AQI ≥ 300 | CPCB feed | 2 hrs |
| Flash Flood | NDMA advisory issued | NDMA + IDRN | Issued |
| Civic Shutdown | Sec 144 / bandh / curfew | Govt advisory + news feeds | Issued |
| Platform Outage Signal | Order volume drop > 80% | Platform signal / webhook | 60 min |

### Validation rules

Every trigger must pass:

- dual-source confirmation
- GPS zone verification
- worker activity check
- fraud scoring

A single API source alone cannot fire a payout.

---

## 🧮 Payout Logic

### Income Baseline

GigShield calculates a **Daily Income Baseline (DIB)** from the worker’s trailing earnings history.

```text
Hourly Rate = DIB ÷ 10
```

### Payout formula

```text
Payout = min(Hourly Rate, Plan Cap) × Coverage Ratio × Disrupted Hours
```

### Coverage ratios

- Basic: 60%  
- Standard: 70%  
- Pro: 80%  

### Example payout

- Worker hourly rate = ₹72  
- Plan = Standard Shield  
- Rain disruption = 2.5 hours  

```text
Payout = min(₹72, ₹150) × 0.70 × 2.5
       = ₹126
```

---

## 🤖 AI Features

GigShield uses AI not as a gimmick, but at core decision points.

### Models used

| Model | Purpose |
|------|---------|
| **Risk Predictor (XGBoost)** | Predict trigger probability and zone risk |
| **Dynamic Pricing Engine** | Compute personalized weekly premium |
| **Fraud Detector (Isolation Forest + rules)** | Flag suspicious claims |
| **Income Baseline Model (EWMA)** | Estimate verified daily earnings |
| **Hyperlocal Risk Mapping** | Pincode-level pricing and exposure analysis |

### Smart capabilities

- personalized premium pricing
- disruption risk scoring
- income baseline verification
- behavioral fraud detection
- hyperlocal zone risk mapping

---

## 🛡 Fraud Detection

Fraud in this product is subtle. Workers may not fake weather events, but they may attempt to game:

- location
- activity
- timing
- claim clustering

### Fraud checks include

- **GPS spoof detection**
- **accelerometer vs location mismatch**
- **fake inactivity pattern detection**
- **syndicate / cluster claim detection**
- **behavioral anomaly scoring**
- **sudden location jumps**
- **first-day policy abuse**

### Fraud score ranges

| Score Range | Status | Action |
|------------|--------|--------|
| 0.00 – 0.20 | Clean | Auto-approve |
| 0.21 – 0.34 | Soft flag | Approve and monitor |
| 0.35 – 0.60 | Suspicious | Hold for secondary validation |
| 0.61 – 1.00 | High risk | Auto-reject / manual review |

---

## 📱 Platform Choice — Progressive Web App

> **“India’s next billion users won’t download your app. They’ll tap a link.”**

GigShield is being built as a **Progressive Web App (PWA)** instead of a fully native mobile app.

### Why PWA is the right choice

Gig workers do not behave like premium app-store users.

They often:

- use low-end Android phones
- have limited storage
- work in patchy network conditions
- join products through WhatsApp links, not app store discovery
- need the fastest possible onboarding flow

A native mobile app adds friction. A PWA removes it.

### Why this matters for our users

| Ground Reality | Why PWA Wins |
|---------------|--------------|
| Low-end Android devices | Runs directly in browser |
| No Play Store habit | Shareable through WhatsApp link |
| Patchy mobile data | Offline caching with service workers |
| Need instant updates | No app store approval delays |
| Tight hackathon timeline | One codebase for web + mobile experience |

### Onboarding comparison

```text
Native app:
Download → Install → Permissions → Sign up
≈ 4 steps, ~5 minutes

GigShield PWA:
Tap link → Sign up
≈ 2 steps, ~45 seconds
```

### PWA features we are building

- **Installable experience** with Add to Home Screen
- **Offline-first dashboard caching**
- **Push notifications** for disruption alerts and payouts
- **Fast lightweight loading** on low-end devices
- **UPI deep links** for payment and payout confirmation
- **Localized UI support** for Indian users

### Catchy reason in one line

> **For a worker who just finished a 12-hour shift, friction is the enemy. PWA keeps protection one tap away.**

---

## 🏗 System Architecture

```text
[ Worker PWA / Admin Dashboard ]
              ↓
     [ API Gateway - Node.js ]
              ↓
  [ Core Services + Business Logic ]
              ↓
 [ AI Engine - Python / FastAPI ]
              ↓
 [ Trigger Engine - 5 min polling ]
              ↓
        [ Fraud Scorer ]
              ↓
        [ Payout Engine ]
              ↓
        [ Razorpay UPI ]
              ↓
 [ PostgreSQL ] [ Redis ] [ S3 Logs ]
```

---

## 🧰 Tech Stack

| Layer | Technology |
|------|------------|
| Frontend | React + TypeScript + Tailwind CSS |
| App Model | Progressive Web App (PWA) |
| Backend | Node.js + Express |
| AI / ML | Python + FastAPI + XGBoost + scikit-learn |
| Database | PostgreSQL |
| Caching / Queues | Redis |
| Mapping | Mapbox |
| Payments | Razorpay UPI |
| Identity | DigiLocker / KYC flow |
| Infra | AWS / Vercel / Railway / GitHub Actions |

---

## 📊 Dashboards

### Worker Dashboard

The worker dashboard is designed for low-data conditions and quick access.

Features include:

- coverage status
- plan details
- next renewal
- earnings protected
- recent payout history
- live zone risk level
- claim / payout audit trail

### Admin / Insurer Dashboard

Features include:

- live trigger heatmap
- active claim volume
- fraud review center
- risk analytics by zone
- payout monitoring
- exposure concentration map
- business metrics

---

## 💼 Business Viability

### Pilot assumption

Bangalore pilot market with approximately **15,000 riders**

Assume conservative adoption of **5% = 750 workers**

### Weekly premium estimate

```text
50% Basic Plan    → 375 × ₹49  = ₹18,375
35% Standard Plan → 263 × ₹99  = ₹26,037
15% Pro Plan      → 112 × ₹179 = ₹20,048
------------------------------------------------
Total weekly premium revenue   = ₹64,460
```

### Unit economics

- Target loss ratio: **60–65%**
- Operating margin target: **15–35%**
- Strong retention potential through embedded protection
- Potential platform revenue share model

### Why it can scale

- weekly pricing matches gig cash flows
- UPI makes payout and collection seamless
- parametric triggers reduce operational overhead
- zero-click claims improve trust and usability
- platform integration lowers customer acquisition cost

---

## ✨ Innovation Highlights

### 1. Zero-Click Claims
The worker never files a claim. Detection and payout are system-driven.

### 2. Hyperlocal Risk Engine
Pricing and payout logic work at the **pincode level**, not just city level.

### 3. Income Stability Score
A future-facing worker risk / earnings reliability signal based on earnings behavior.

### 4. Worker Trust Score
Long-term honest behavior can unlock better premiums and higher benefits.

### 5. AI-Native Underwriting
GigShield combines actuarial reasoning with live AI risk models for dynamic pricing.

---

## 🚀 Future Scope

- credit scoring API for gig workers
- salary / earnings advance products
- expansion to cab drivers and home-service workers
- Southeast Asia market adaptation
- real-time AI actuary for loss modeling

---

## 📂 Repository Structure

```text
GigShield/
├── frontend/               # React PWA frontend
├── backend/               # Node.js + Express backend
├── ml-model/           # FastAPI ML microservice
├── docs/                 # Architecture, research, diagrams
├── data-monitor/               # for data monitoring apis
└── README.md             # Project documentation
```

---


## 🏁 Conclusion

Gig workers keep India moving, but their income stops the moment external conditions turn against them.

GigShield is built for that exact gap.

It is:

- fast
- automatic
- hyperlocal
- AI-powered
- worker-first

> **We are not insuring assets. We are protecting livelihoods.**

---