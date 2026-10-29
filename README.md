# RAK TECH - Developer Job & Application Tracker
### UI & Web Design Course Project • Static Frontend Prototype

A clean, responsive, and accessible static prototype built with **HTML5** and **Tailwind CSS** (installed locally via CLI, zero-CDN).

---

## 📌 Project Overview
This project is a web user interface designed for university students and junior developers to organize, track, and manage software engineering job applications across each hiring stage.

---

## 📄 Key Pages (8 Required Pages)

1. **Landing / Home Page** (`index.html`): Introduction, key stats, features, and direct navigation links.
2. **Dashboard Page** (`dashboard.html`): Key metric cards (Applied, Interviews, Offers, Rate) and a monthly application chart.
3. **List / Overview Page** (`jobs.html`): Search input, job filters, and an overview list of developer job postings.
4. **Detail Page** (`job-details.html`): Single job posting details, responsibilities, salary, skills, and recruiter contact.
5. **Form Page** (`add-application.html`): Form to add/edit a job application with input fields and a live card preview.
6. **Authentication Pages** (`auth.html`): Student Sign In and Registration forms with accessible labels.
7. **Extra Page 1: Pipeline Board** (`pipeline.html`): Visual Kanban stages (Saved, Applied, Interviewing, Offer Received).
8. **Extra Page 2: Profile & Settings** (`profile-settings.html`): Student profile, career preferences, and resume upload.

---

## 🎨 UI Design & Accessibility (WCAG 2.1 AA)
- **HTML5 Semantic Tags**: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`.
- **Accessibility**: Form labels explicitly linked to inputs (`<label for="...">`), readable contrast ratio (> 4.5:1), and ARIA attributes (`aria-label`, `aria-labelledby`).
- **Responsive Layout**: Designed for both desktop and mobile viewports using standard Tailwind responsive utility classes (`sm:`, `md:`, `lg:`).
- **Design Deliverables**: Wireframes and mockups included in the `figma/` directory (`Rak-tech.pdf` and `Rak-tech.fig`).

---

## 🛠️ How to Run Locally

### 1. Build Tailwind CSS
Ensure dependencies are installed and run the local Tailwind build command:
```bash
npm run build
```

### 2. Open Prototype
Open `index.html` directly in any modern web browser, or run a local server:
```bash
npx serve .
```
