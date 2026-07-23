# WorkWala — Hyperlocal Blue-Collar Marketplace (MVP UI)

WorkWala is a mobile-first hyperlocal marketplace connecting skilled blue-collar workers (masons, plumbers, electricians, painters, carpenters, drivers, laborers) with everyday job posters nearby.

This repository contains the complete interactive **Next.js (App Router) + Tailwind CSS** frontend prototype, pixel-faithfully translated from 18 Stitch UI designs.

---

## 🚀 Key Features & Flow Overview

1. **Onboarding & Authentication (`/`, `/login`, `/onboarding/role`)**
   - Splash screen with logo animation and quick actions
   - Phone number login with interactive 4-digit OTP verification state
   - Dual-role onboarding (Poster setup vs Worker skill/radius/ID upload setup)

2. **Hyperlocal Home Screen (`/home`)**
   - Signature curved orange header with user avatar and search bar
   - Quick action cards (*Post a Job* / *Find Work*)
   - Popular category grid with icon badges
   - Horizontal scrolling carousel of recent jobs nearby

3. **Job Poster Workflow (`/post-job/step-1`, `/post-job/step-2`, `/post-job/step-3`)**
   - 3-step wizard with interactive category selection, worker counter (+/−), daily pay rate, timings, location pin, and review confirm
   - Animated success modal overlay upon posting

4. **Job Details & Worker Discovery (`/jobs/[id]`)**
   - **Poster View:** Real-time list of interested workers with selection checkboxes, rating badges, skill pills, and sticky "Hire Selected" bar
   - **Worker Profile Sheet Modal (`WorkerProfileSheet`):** Slide-up bottom sheet with verified status, coverage map preview, recent reviews, and direct Chat/Hire actions
   - **Worker View:** Detailed job description, location map, and "Express Interest" action

5. **Find Work Feed (`/jobs`)**
   - Filterable job list with category pill filters (All, Mason, Electrician, etc.)
   - Search bar filter
   - One-tap "Apply" button state transitions

6. **My Bookings / My Jobs Dashboard (`/bookings`)**
   - Role-aware tabs:
     - **Poster Mode:** Ongoing (2) | Completed (5) | Cancelled (1)
     - **Worker Mode:** Active (1) | Applied (3) | Completed (12)
   - Direct chat shortcuts and "Mark Complete" actions (triggers review flow)

7. **Direct Messaging (`/messages`, `/messages/[id]`)**
   - Inbox listing recent conversations with online indicators and unread badges
   - Real-time chat thread with message sending state, image attachments, and in-chat job context cards

8. **User Profile & Rating System (`/profile`, `/notifications`, `/review`)**
   - Profile with hero gradient, stats counter (Jobs Posted, Rating, Workers Hired), settings list, and instant Role Switcher (Poster ↔ Worker)
   - Grouped notifications (Today / Yesterday) with unread status and Weekly Recap bento card
   - Interactive Rate & Review page with 5-star rating selector, tag feedback chips, and toast notification

9. **Admin Verification Panel (`/admin`)**
   - Live queue status bar (Approved, Pending, Rejections)
   - Worker verification cards with ID document inspection links and Approve / Reject / Request Info actions

---

## 🛠️ Technology Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS (Custom design system: Primary `#FF6B00`, Text `#1A1C19`, Background `#FAFAF5`)
- **Typography:** Inter (Google Fonts)
- **Icons:** Material Symbols Outlined
- **State Management:** React Context (`useAppState`) for active role and user state
- **Design Tokens:** Preserved in `design-assets/design-system/DESIGN.md`

---

## 📂 Folder Structure

```
WorkWala/
├── design-assets/              ← Original Stitch HTML reference exports
├── src/
│   ├── app/                    ← Next.js App Router routes
│   │   ├── page.js             ← Splash / Landing
│   │   ├── login/page.js       ← Phone & OTP
│   │   ├── onboarding/         ← Role selection & setup
│   │   ├── home/page.js        ← Main Home Screen
│   │   ├── post-job/           ← 3-Step Job Posting flow
│   │   ├── jobs/               ← Find Work & Job Details
│   │   ├── bookings/page.js     ← My Bookings / My Jobs
│   │   ├── messages/           ← Inbox & Chat thread
│   │   ├── profile/page.js     ← User Profile
│   │   ├── notifications/      ← Notifications
│   │   ├── review/page.js       ← Rate & Review
│   │   └── admin/page.js       ← Admin verification queue
│   ├── components/
│   │   ├── layout/             ← BottomNav, TopBar, ClientLayoutWrapper
│   │   ├── ui/                 ← Button, Card, Chip, StatusBadge, StarRating, EmptyState
│   │   ├── home/               ← CategoryGrid, ActionCards, RecentJobsCarousel
│   │   └── workers/            ← WorkerProfileSheet modal
│   ├── data/                   ← Hardcoded mock data (jobs, workers, bookings, messages)
│   ├── hooks/                  ← useAppState Context provider
│   └── lib/                    ← Currency formatting & date helpers
├── package.json
└── README.md
```

---

## ⚙️ Getting Started Locally

```bash
# 1. Clone the repository
git clone https://github.com/PranavNaikude06/WorkWala.git
cd WorkWala

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
http://localhost:3000
```
