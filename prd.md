# WorkWala — Product Requirements Document (PRD)

**Tagline:** Work For Everyone. Jobs For Everyone.
**Version:** v0.1 (MVP Draft)
**Status:** Draft — items marked 🔶 ASSUMPTION need founder/team validation before build starts.
**Last updated:** July 23, 2026

---

## 1. Executive Summary

WorkWala is a hyperlocal marketplace that connects people who need everyday work done (construction, home repair, cleaning, loading, etc.) with verified skilled and unskilled workers nearby. Job posters post a job in under two minutes, receive interest from nearby workers, compare and hire, coordinate via in-app chat, and pay after the work is done. The wedge is India's largely informal, word-of-mouth-driven blue-collar hiring market — a huge, repeat-usage, currently trust-starved space.

---

## 2. Problem Statement

**Job Posters** (homeowners, shop owners, contractors, builders, farmers) struggle to find workers for short-notice or recurring tasks. Hiring today happens through personal networks, local labor "chowks" (informal hiring points), or word of mouth — slow, unreliable, and with no way to verify skill or trustworthiness in advance.

**Workers** (laborers, masons, carpenters, painters, plumbers, electricians, cleaners, helpers) face inconsistent, informal demand. They have no portable reputation, often travel to physical labor chowks speculatively, and have no protection around getting paid for completed work.

Both sides lack: verification, discovery, and a trusted transaction layer.

---

## 3. Target Users / Personas

| Persona | Description | Core need |
|---|---|---|
| **Raj — Job Poster** | Homeowner or small shop/business owner, occasional or recurring hiring needs | Post a job fast, see who's available nearby, hire someone he can trust |
| **Ramesh — Worker** | Daily-wage skilled/unskilled laborer (mason, painter, laborer, etc.) | Find nearby paying work regularly, build a reputation, get paid reliably |
| **Ops/Admin** | Platform team | Verify workers, resolve disputes, keep supply and demand healthy in each city |

🔶 ASSUMPTION: Initial launch targets one or two Tier-1/Tier-2 Indian cities for density, not pan-India from day one — hyperlocal marketplaces live or die on local supply/demand density.

---

## 4. Goals (MVP) and Explicit Non-Goals

**Goals for MVP**
- A job poster can post a job in under 2 minutes and receive worker interest within the app.
- A worker can browse/filter nearby jobs by category and express interest with one tap.
- Both sides can chat in-app to confirm details before committing.
- A poster can select and "hire" a worker; both sides see booking status.
- Basic ratings after job completion to start building a trust layer.
- Admin can review and approve/reject worker sign-ups.

**Explicit Non-Goals for MVP** (deliberately deferred — see Roadmap §16)
- In-app voice/video calling
- Insurance, loans, or other financial value-added services
- Background-check integrations (police verification APIs, etc.)
- Native iOS/Android apps (MVP is web-first / installable PWA)
- Subscription plans and paid advertising products
- Multi-language UI beyond English + one regional language

---

## 5. User Roles

1. **Job Poster** — posts jobs, browses/hires workers, pays, rates.
2. **Worker** — browses jobs, expresses interest, gets hired, gets paid, rated.
3. **Admin** — verifies workers, moderates content, handles disputes, views platform analytics.

🔶 ASSUMPTION: A single account can hold both the Poster and Worker role (many users will be both at different times), selectable from one profile, rather than forcing a single role at signup. Flag for validation — it affects the data model and onboarding flow.

---

## 6. Core Features — MVP (P0)

| Feature | Description | Role(s) |
|---|---|---|
| Phone-based signup/login | OTP-based auth, no password | All |
| Role & profile setup | Poster: name, location. Worker: skills/categories, service radius, ID upload | All |
| Post a Job | Category, description, workers needed, pay/day, timing, location | Poster |
| Category-based browse | Filter jobs or workers by category + distance | All |
| Job details view | Full job info, poster info, interested workers list | All |
| Express interest | One-tap apply to a job | Worker |
| Compare & hire | Poster views worker profiles (rating, past jobs) and selects | Poster |
| In-app chat | Text chat between poster and hired/interested worker | All |
| Booking status | Ongoing / Completed / Cancelled tabs | All |
| Mark job complete | Poster confirms work finished | Poster |
| Ratings & reviews | Both sides rate each other post-completion | All |
| Admin worker approval | Manual review queue before a worker profile goes live | Admin |
| Job/worker notifications | In-app + push: new interest, hired, job reminder | All |

## 7. Post-MVP Features (P1 / P2)

| Phase | Feature |
|---|---|
| P1 | In-app payments (pay-after-work via UPI/Razorpay), dispute flow, push notifications via FCM |
| P1 | Multilingual UI (Hindi + English minimum) |
| P2 | Voice & video call, worker availability status, location-based live search |
| P2 | Premium/featured job posting, subscription plans for contractors |
| P2 | Background verification integration, insurance/VAS marketplace, in-app advertising |
| P3 | Native mobile apps (React Native), pan-India expansion |

---

## 8. Sample User Stories

- As a **Job Poster**, I want to post a job in under 2 minutes so I don't lose time I don't have.
- As a **Job Poster**, I want to see worker ratings before hiring so I can trust my choice.
- As a **Worker**, I want to filter jobs by category and distance so I only see relevant, reachable work.
- As a **Worker**, I want a visible rating/history so repeat posters trust me over a stranger.
- As either party, I want to chat before committing so we can confirm scope, pay, and timing.
- As a **Job Poster**, I want to mark a job complete and rate the worker so the platform stays trustworthy.
- As an **Admin**, I want to review new worker sign-ups before they appear in search, to keep quality high.

---

## 9. Non-Functional Requirements

- **Low-bandwidth tolerance**: target users are on 3G/4G, budget Android phones — keep payloads light, avoid heavy client bundles.
- **Low-literacy-friendly UX**: icon-first navigation, minimal text-entry, large tap targets (mirrors the reference design's icon-driven category grid).
- **Localization-ready** from the data-model level, even if only 1–2 languages ship in MVP.
- **Security**: OTP auth, ID documents stored encrypted at rest, payment data never touches app servers directly (delegate to PCI-compliant processor).
- **Performance**: job feed and search should respond in <1s at MVP scale.
- **Availability**: not mission-critical infra at MVP stage — standard managed-service uptime is sufficient.

---

## 10. Trust & Safety

- Manual worker verification queue at MVP (ID document upload + admin review) — defer automated background-check APIs to P2.
- Two-way ratings after every completed job.
- Report/block functionality on chat and profiles.
- Pay-after-work model (per the original concept) reduces upfront-payment scam risk for posters; P1 in-app payments add a light escrow-style hold to protect workers too.

---

## 11. Monetization / Revenue Model

| Stream | Description | Phase |
|---|---|---|
| Service fee | Small % or flat fee on each completed booking | P1 (once payments ship) |
| Premium job posting | Fee for featured/urgent placement in the feed | P2 |
| Subscription plans | Monthly/yearly plans for contractors posting frequently | P2 |
| Advertisements | Promoted tools/materials/services relevant to construction & trades | P2 |
| Value-added services | Background checks, insurance, training — commission or fee-based | P2 |

🔶 ASSUMPTION: MVP ships with **zero monetization live** (focus entirely on liquidity/trust), and the service fee is the first revenue stream turned on once transaction volume justifies it. Validate against actual runway/funding situation.

---

## 12. Success Metrics (North Star + supporting KPIs)

**North Star:** Weekly jobs successfully completed (fill rate).

| Metric | Why it matters |
|---|---|
| Job fill rate (% of posted jobs matched within 24h) | Core marketplace liquidity signal |
| Median time-to-hire | UX + supply density signal |
| Worker 7/30-day retention | Supply-side health |
| Repeat job-posting rate | Demand-side trust signal |
| Completed-to-cancelled booking ratio | Trust/reliability signal |
| GMV (once payments live) | Revenue readiness |

---

## 13. Competitive Landscape (brief)

India's blue-collar/gig hiring space already has players like **Apna**, **WorkIndia**, and **Quikr Jobs** (broader blue/grey-collar job matching) and **Urban Company** (verified on-demand home services, higher-skill/higher-price). WorkWala's differentiation, per the original concept, is a **hyperlocal, category-broad, pay-after-work** model aimed specifically at informal daily-wage and small-job hiring rather than curated premium services or formal job listings. This is a positioning hypothesis, not a validated claim — worth a light competitive teardown before locking MVP scope.

---

## 14. Risks & Mitigations

| Risk | Mitigation |
|---|---|
| Cold start (no workers → no posters → no workers) | Launch hyperlocal in one city/neighborhood cluster; manually seed initial worker supply |
| Off-platform leakage (both sides exchange numbers and skip the app after first match) | Chat-first discovery, ratings as a retention hook, fees introduced gradually not upfront |
| Fake/unreliable worker profiles | Manual admin verification queue at MVP; ID upload requirement |
| Payment disputes once P1 payments ship | Clear "mark complete" confirmation flow + light escrow hold + dispute/report path |
| Low digital literacy of target users | Icon-first, minimal-text UI; voice notes in chat as a P2 candidate |

---

## 15. Open Questions (for founder/team decision)

- 🔶 Single combined Poster/Worker role vs. forced role selection at signup?
- 🔶 Launch city/geography for initial density?
- 🔶 Is MVP web-only (PWA) acceptable, or is a native app a hard launch requirement?
- 🔶 Who handles the manual worker-verification review queue at MVP (founder-run ops)?
- 🔶 Target language(s) for MVP beyond English?

---

## 16. Phased Roadmap

| Phase | Scope | Rough timeframe |
|---|---|---|
| **Phase 0 — MVP** | Auth, profiles, post job, browse/filter, express interest, chat, hire, mark complete, ratings, admin approval queue | 4–6 weeks solo/small-team build |
| **Phase 1** | In-app payments (Razorpay/UPI), push notifications, dispute flow, basic multilingual UI | +3–4 weeks |
| **Phase 2** | Voice/video call, live location search, premium listings, subscriptions, ads, background-check integration | +6–8 weeks |
| **Phase 3** | Native mobile apps, VAS marketplace (insurance/training), multi-city/pan-India scale-out | Post-traction |

---

## 17. Reference

Feature list, revenue streams, market-size figures, and screen concepts in this PRD are derived from the original WorkWala concept deck provided (problem statement, key features, revenue streams, and app screen mockups for Home, Post a Job, Job Details, Interested Workers, and My Bookings).
