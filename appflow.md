# WorkWala — App Flow Document

**Version:** v0.1
**Status:** Draft — paired with `prd.md` and `techstack.md`
**Scope:** MVP (P0) flows, with P1 flows (payments, notifications) noted where they attach

---

## 1. Actors

- **Guest** — not yet signed in
- **Job Poster** — posts jobs, hires, pays, rates
- **Worker** — browses jobs, expresses interest, gets hired, rated
- **Admin** — verifies workers, moderates, resolves disputes

Per the PRD's open question, a single account may hold both Poster and Worker roles — flows below are written per-role and can both live under one account.

---

## 2. High-Level App Map

```mermaid
flowchart LR
    A[Landing / Guest] --> B[Sign Up / Login - OTP]
    B --> C[Role & Profile Setup]
    C --> D[Home]
    D --> E[Post a Job flow]
    D --> F[Find Work flow]
    D --> G[My Bookings]
    D --> H[Chat]
    D --> I[Profile / Settings]
    G --> J[Admin - separate surface]
```

---

## 3. Onboarding & Auth Flow

```mermaid
flowchart TD
    Start([Open app]) --> Phone[Enter phone number]
    Phone --> OTP[Enter OTP]
    OTP -->|New user| RoleChoice[Choose focus: Post a Job / Find Work]
    OTP -->|Returning user| Home[Home screen]
    RoleChoice -->|Post a Job| PosterSetup[Name, location]
    RoleChoice -->|Find Work| WorkerSetup[Skills/categories, service radius, ID upload]
    WorkerSetup --> Pending[Profile status: pending admin review]
    PosterSetup --> Home
    Pending --> Home
```

**Notes**
- Worker profiles enter a "pending" state until an Admin approves the uploaded ID — matches the Trust & Safety section of the PRD.
- Poster profiles are live immediately (lower risk side of the marketplace).

---

## 4. Home Screen (per reference design)

Matches the "Hello, [Name]! What do you need today?" screen:
- Two primary actions: **Post a Job** and **Find Work**
- **Popular Categories** grid (Laborer, Mason, Carpenter, Painter, Plumber, Electrician, Cleaning/Housekeeping, Loading/Unloading, More)
- **Recent Jobs** feed (visible to Workers; nearby open jobs with pay/day shown)
- Bottom nav: Home / Jobs / Post Job / Messages / Profile

---

## 5. Job Poster Flow

```mermaid
flowchart TD
    H[Home] --> Post[Post a Job]
    Post --> Cat[Select category]
    Cat --> Details[Describe job: workers needed, pay/day, timing, location]
    Details --> Confirm[Review & Post Job]
    Confirm --> Live[Job is live]
    Live --> Interested[Interested Workers list]
    Interested --> ViewProfile[View worker profile: rating, jobs completed]
    ViewProfile --> Hire[Hire Selected]
    Hire --> ChatP[Chat with hired worker]
    ChatP --> Booking[Booking: status = Ongoing]
    Booking --> Complete[Mark Job Complete]
    Complete --> Pay[Pay worker - P1: in-app / MVP: cash off-platform]
    Pay --> Rate[Rate the worker]
    Rate --> History[Booking moves to Completed tab]
```

**Screen-by-screen (maps to reference mockups)**
1. **Post a Job** — category icon grid, "Describe your job" field, number of workers needed, work timing, notes (e.g., "lunch provided"), Post Job button.
2. **Job Details / Live** — job summary, posted-by + time-ago, description, timing, list of interested workers as they apply.
3. **Interested Workers** — cards per worker with name, star rating, jobs-completed count, "View Profile" and a multi-select "Hire Selected" action.
4. **My Bookings** — Ongoing / Completed / Cancelled tabs; each booking card shows job title, pay/day, start date, workers assigned, and a Chat shortcut.

---

## 6. Worker Flow

```mermaid
flowchart TD
    H[Home] --> Find[Find Work]
    Find --> Filter[Filter by category / distance]
    Filter --> List[Browse open jobs]
    List --> Detail[Job Details]
    Detail --> Interest[Express Interest - one tap]
    Interest --> Wait[Wait for poster decision]
    Wait -->|Selected| Notif[Notification: You're hired]
    Wait -->|Not selected| List
    Notif --> ChatW[Chat with poster]
    ChatW --> Start[Job starts - booking = Ongoing]
    Start --> Done[Poster marks complete]
    Done --> Paid[Get paid]
    Paid --> RatingW[Receive rating]
    RatingW --> Earnings[Job added to history/earnings]
```

---

## 7. Chat Flow

```mermaid
flowchart LR
    Trigger1[Worker expresses interest] --> ChatAvail[Chat thread available]
    Trigger2[Poster hires worker] --> ChatAvail
    ChatAvail --> Msg[Send/receive text messages - Socket.io real-time]
    Msg --> Report[Report / Block if needed]
```

Voice & video call is a P2 addition on top of this same thread (per PRD roadmap) — not in MVP scope.

---

## 8. Payment Flow (P1)

```mermaid
flowchart TD
    Complete[Poster marks job complete] --> Method{Payment method}
    Method -->|In-app, P1| Razorpay[Razorpay checkout - UPI/card]
    Razorpay --> Hold[Funds held / released to worker on confirmation]
    Method -->|Cash, MVP default| Manual[Both sides confirm cash payment in-app]
    Hold --> RateBoth[Both sides rate each other]
    Manual --> RateBoth
```

MVP ships "pay after work," settled off-platform (cash), per the original concept — the app simply tracks that a booking is completed. Razorpay in-app settlement is a Phase 1 addition once trust/volume justify it.

---

## 9. Notification Triggers

| Event | Recipient | Channel (MVP → P1) |
|---|---|---|
| New worker interested | Poster | In-app → Push (FCM) |
| Hired for a job | Worker | In-app → Push |
| Job starting soon | Both | In-app → Push |
| New chat message | Both | In-app → Push |
| Job marked complete | Both | In-app → Push |
| New rating received | Both | In-app → Push |
| Worker profile approved/rejected | Worker | In-app → Push |

---

## 10. Admin Flow

```mermaid
flowchart TD
    AdminHome[Admin Dashboard] --> Queue[Worker Verification Queue]
    Queue --> Review[Review ID doc + profile]
    Review -->|Approve| Live[Worker profile goes live]
    Review -->|Reject| Notify[Worker notified, can resubmit]
    AdminHome --> Disputes[Dispute / Report Queue - P1]
    AdminHome --> Metrics[Basic metrics: jobs posted, fill rate]
```

---

## 11. Dispute / Support Flow (P1)

```mermaid
flowchart TD
    Issue[Either party reports an issue] --> Ticket[Dispute ticket created]
    Ticket --> AdminReview[Admin reviews chat history + booking]
    AdminReview --> Resolve[Resolution: refund / release / warning / ban]
```

---

## 12. Key Edge Cases to Design For

- **No workers apply** within a set window → job shown as "no interest yet," poster prompted to boost visibility (P2 premium posting) or adjust pay/details.
- **Worker cancels after being hired** → booking reverts to "open," poster is notified, remaining interested workers resurface.
- **Poster doesn't confirm completion** → booking stays "ongoing" with a reminder nudge after the stated work timing passes.
- **Worker profile rejected** → clear reason shown, resubmission path available (don't dead-end a supply-side user).

---

## 13. Reference

Screen structure (Home, Post a Job, Job Details, Interested Workers, My Bookings) and the icon-first category navigation are taken directly from the mobile mockups in the original WorkWala concept deck.
