# RAK TECH - Developer Job & Application Tracker
## Frontend Prototype Architecture & Design System Documentation

A responsive, highly accessible (WCAG 2.1 AA compliant) dark-mode frontend prototype suite built for **RAK TECH - Developer Job & Application Tracker** with pure HTML5, Tailwind CSS, and vanilla JavaScript.

---

### 🎨 Design & Color Palette Tokens

| Purpose | Color Hex | Class / CSS Token | Description |
| :--- | :--- | :--- | :--- |
| **Main Page Background** | `#0B132B` | `bg-[#0B132B]` | Slate dark high-tech canvas |
| **Cards & Containers** | `#131B2E` | `bg-[#131B2E]` | Primary elevated surface |
| **Elevated Surface / Inner Cards** | `#1C2541` | `bg-[#1C2541]` | Inner card background & secondary surfaces |
| **Borders & Dividers** | `#232F55` | `border-[#232F55]` | Subtle container borders |
| **Primary Accent / Neon Cyan** | `#00B4D8` / `#00F0FF` | `text-[#00F0FF]`, `bg-[#00B4D8]` | Active states, CTAs, glowing outlines |
| **Main Text** | `#FFFFFF` | `text-white` | High-contrast body & header typography |
| **Muted Text** | `#8D99AE` | `text-[#8D99AE]` | Accessible secondary labels & descriptions |
| **Stage: Saved / Applied** | `#3A86EF` | `text-[#3A86EF]`, `bg-[#3A86EF]/15` | Blue pipeline stage indicator |
| **Stage: Interviewing** | `#FFB703` | `text-[#FFB703]`, `bg-[#FFB703]/15` | Amber / yellow interview badge |
| **Stage: Offered** | `#06D6A0` | `text-[#06D6A0]`, `bg-[#06D6A0]/15` | Emerald green offer badge |
| **Stage: Closed / Rejected** | `#EF476F` | `text-[#EF476F]`, `bg-[#EF476F]/15` | Red / crimson closed status |

---

### 📂 File Structure & Complete Prototype Suite

```
Rak-ui/
├── index.html               # 1. Landing Page (Tagline, features grid, live preview, CTAs)
├── dashboard.html           # 2. Dashboard Page (Metrics, SVG curves, Funnel, Donut chart)
├── jobs.html                # 3. Job Board Search Page (Filters sidebar, paginated cards)
├── job-details.html         # 4. Job Details Page (Tech badges, recruiter contact, Modal trigger)
├── pipeline.html            # 5. Kanban Pipeline Board (5 stages, mobile tab navigation)
├── add-application.html     # 6. Add / Edit Application Form (Live card preview)
├── auth.html                # 7. Authentication Pages (Login & Register, OAuth, SSO)
├── profile-settings.html    # 8. User Profile & Settings (Career preferences, Resume upload)
│
├── css/
│   └── tailwind.css         # Compiled standalone Tailwind stylesheet (Zero-CDN)
├── src/
│   └── input.css            # Tailwind theme tokens, animations & resets
├── js/
│   └── main.js              # Accessible modal, tab switching, form preview & shortcuts
├── package.json             # Build scripts (@tailwindcss/cli)
└── tailwind.config.js       # Local Tailwind configuration
```

---

### ♿ Accessibility (WCAG 2.1 AA) Features

1. **Semantic Structure**: Semantic HTML5 elements (`<header>`, `<nav>`, `<main>`, `<aside>`, `<section>`, `<article>`, `<footer>`).
2. **High Color Contrast Ratio**: All body copy meets or exceeds WCAG AA standards (> 7:1 for `#FFFFFF` and > 4.5:1 for `#8D99AE` against `#0B132B`).
3. **Screen Reader & ARIA Attributes**:
   - `aria-label` on icon buttons, search bars, and navigation elements.
   - `role="tab"` and `aria-selected` on stage filter switches.
   - `role="dialog"`, `aria-modal="true"`, and `aria-hidden` on the **One-Click Add to Tracker** modal with `Escape` key listeners and focus trapping.
4. **Keyboard Accessibility**: Global `⌘ K` / `Ctrl + K` search focus shortcut, visible focus rings (`outline: 2px solid #00F0FF`).
5. **Responsive & Mobile Adaptive**:
   - Desktop: Fixed sidebar with 12-column dynamic layout.
   - Mobile: Stacking cards, touch targets (min 44px), interactive stage tab switcher on the Kanban board, and bottom navigation bar.
