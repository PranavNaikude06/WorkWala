# WorkWala — Tech Stack Document

**Version:** v0.1
**Status:** Draft — paired with `prd.md` and `appflow.md`

---

## 1. Guiding Principles

- **Build fast on skills already in hand** — React.js, Firebase, MERN, and Next.js, so the MVP timeline stays realistic for a solo/small-team build.
- **India-first infra choices** — UPI-capable payments, phone-OTP auth, low-bandwidth-friendly delivery.
- **Cheap-to-free at MVP scale**, with a clear upgrade path once there's transaction volume.
- **One codebase mentality** — share as much logic/UI between web and future mobile as possible to avoid duplicating work.

---

## 2. Stack at a Glance

| Layer | Choice | Why |
|---|---|---|
| Frontend (web) | **Next.js (React) + Tailwind CSS** | Matches existing React skillset; SSR helps SEO for the public job-marketplace pages |
| Mobile | **PWA at MVP → React Native at Phase 3** | Reuses React knowledge; avoids building/maintaining two native codebases before there's traction |
| Backend | **Node.js + Express** (or Next.js API routes for MVP simplicity) | Fits MERN experience; huge ecosystem for chat/payments SDKs |
| Database | **MongoDB Atlas** | Flexible schema suits evolving job/worker fields; free tier covers MVP; matches MERN background |
| Auth | **Firebase Authentication (Phone OTP)** | India-standard OTP login, no password friction, generous free tier |
| Real-time chat | **Socket.io** (self-hosted on the Express server) | Simple to reason about, works well with Node/Express |
| Push notifications | **Firebase Cloud Messaging (FCM)** | Works across web push and future native apps with one integration |
| Payments (Phase 1) | **Razorpay** | UPI + cards + wallets, India-native, supports payouts to workers |
| Maps / location | **Google Maps Platform** (Places, Geocoding, Distance Matrix) | Best India coverage for address/geocoding |
| File/image storage | **Firebase Storage or Cloudinary** | Profile photos, job images, ID-verification uploads |
| Hosting — frontend | **Vercel** | Native Next.js support, generous free tier, instant preview deploys |
| Hosting — backend | **Render or Railway** | Simple Node deploys, free/low-cost tiers, easy env-var/secrets management |
| CI/CD | **GitHub Actions** | Free for public/small private repos, integrates with Vercel/Render |

---

## 3. Frontend (Web)

- **Framework:** Next.js (App Router), React 18+
- **Styling:** Tailwind CSS — fast to build the icon-driven, card-based UI shown in the reference design
- **State management:** React Context + hooks for MVP scope; introduce Zustand/Redux only if state complexity grows
- **Forms:** React Hook Form + Zod for validation (job-posting form, profile setup)
- **Icons:** Lucide React (lightweight, matches the checklist/feature-icon style in the reference design)

## 4. Mobile

- **MVP:** Responsive Next.js app, installable as a PWA (add-to-homescreen, offline shell) — covers the "Web & Mobile App" requirement without a second codebase.
- **Phase 3 (post-traction):** React Native app reusing business logic (API client, types, validation schemas) from the web app where possible.

🔶 ASSUMPTION: A PWA is acceptable for MVP rather than a native app on day one — flagged in the PRD's open questions; revisit if user testing shows native is a hard requirement (e.g., for reliable push notifications on budget Android devices).

## 5. Backend

- **Runtime:** Node.js + Express (REST API)
- **Alternative for MVP speed:** Next.js API routes / Route Handlers if the team wants a single deployable app instead of separate frontend/backend services — reasonable for Phase 0, migrate to a standalone Express service once real-time chat and payment webhooks add complexity.
- **Validation:** Zod or Joi on all incoming requests
- **API style:** REST for MVP; consider adding a lightweight query layer (e.g., simple filtering/pagination) rather than full GraphQL — not worth the added complexity at this stage.

## 6. Database & Data Model (MongoDB)

Core collections for MVP:

```
users
  _id, phone, name, role: ["poster","worker"], location: {lat,lng,city},
  createdAt

workerProfiles
  _id, userId, categories: [...], skills: [...], serviceRadiusKm,
  idDocUrl, verificationStatus: "pending"|"approved"|"rejected",
  ratingAvg, ratingCount, jobsCompleted

jobs
  _id, posterId, category, description, workersNeeded,
  payPerDay, timing: {start,end}, location: {lat,lng,address},
  status: "open"|"filled"|"in_progress"|"completed"|"cancelled",
  createdAt

interests
  _id, jobId, workerId, status: "pending"|"hired"|"rejected", createdAt

bookings
  _id, jobId, workerIds: [...], status: "ongoing"|"completed"|"cancelled",
  startedAt, completedAt

messages
  _id, bookingId (or jobId), senderId, text, createdAt

ratings
  _id, bookingId, fromUserId, toUserId, stars, comment, createdAt

categories
  _id, name, iconKey  (Laborer, Mason, Carpenter, Painter, Plumber, Electrician, Cleaning, Loading/Unloading, ...)
```

This mirrors the roles and screens in the reference design (categories grid, job posting fields, interested-workers list, booking status tabs).

## 7. Admin Panel

- Simplest path: role-gated routes inside the same Next.js app (`/admin/*`), checking `role === "admin"` server-side.
- Core MVP admin needs: worker verification queue, job/user moderation, basic metrics view (jobs posted, fill rate).

## 8. Multilingual (Phase 1+)

- `next-intl` or `react-i18next` for UI string translation.
- Store category names/descriptions with translation keys from day one in the `categories` collection, even if only English ships first — avoids a painful retrofit.

## 9. Dev Tooling

- Git/GitHub for version control
- ESLint + Prettier for consistency
- GitHub Actions for CI (lint/build/test on PR)
- Postman or Thunder Client for API testing
- Figma (design already exists per the reference deck) as the source of truth for UI

## 10. Cost Notes at MVP Scale

Everything above has a workable free/near-free tier at low volume: Vercel (free), MongoDB Atlas (free M0 cluster), Firebase Auth + FCM (free tier), Render/Railway (free/low-cost starter tier). Razorpay has no fixed cost — it's pay-per-transaction, so it costs nothing until real payments flow in Phase 1. This keeps burn near-zero through Phase 0.

## 11. Why This Stack Fits

Every core choice (React/Next.js, Firebase, MongoDB/MERN) lines up with hands-on experience already in place, which is the biggest lever for shipping an MVP quickly and correctly rather than fighting an unfamiliar stack under time pressure.
