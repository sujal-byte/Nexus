# Nexus — ABTalks 60-Day Challenge

A web app for the **ABTalks 60-Day Coding Challenge** — a program that helps college students build daily proof-of-work by shipping a small coding task every day and posting about it on GitHub + LinkedIn.

This repo is the student-facing app: a landing page, a dashboard to track your streak, a page to submit each day's task, and a test-cases page to show everything works.

---

## What's inside

- **Landing Page (`/`)** — intro to the challenge, a "Who are we?" section, and an FAQ.
- **Student Dashboard (`/dashboard`)** — your streak, your progress out of 60 days, today's task, a GitHub-style 60-day progress grid, and your recent badges.
- **Day Task Page (`/day/:dayId`)** — the task for that day, an optional extra-tasks list for stretch goals, and a form to submit your GitHub + LinkedIn links.
- **Test Cases Page (`/test-cases`)** — a simple page showing the app's core checks are passing.

### A few details worth knowing
- **Mock data** for the dashboard lives in `src/data/mockdata.json` — it has three ready-made student states (a normal active streak, a fresh Day 1 user, and a user who missed a day) so you can see how the app behaves in each case.
- There's a small **dev toggle** on the dashboard to switch between those three states without touching code.
- **Extra tasks** on the day page are optional — checking or skipping them never affects your streak. Only the main task matters.
- GitHub and LinkedIn links are checked with a simple pattern before you can submit, so you can't accidentally submit an empty or broken link.

---

## Tech stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) for pages/routes
- [Tailwind CSS v4](https://tailwindcss.com/) for styling
- [Lucide Icons](https://lucide.dev/) for icons

---

## Running it locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open the app
# Vite will print a local URL, usually http://localhost:5173
```

Other useful commands:

```bash
npm run build     # Production build (outputs to /dist)
npm run preview   # Preview the production build locally
npm run lint      # Run ESLint
```

---

## Project structure

```
src/
├── App.jsx              # All pages/components + routing live here
├── main.jsx              # App entry point
├── data/
│   └── mockdata.json     # Mock student data (active / day 1 / missed day)
├── assets/                # Logo, hero image, etc.
├── App.css / index.css    # Global styles
public/                    # Favicon, static icons
```

---

## Routes

| Route | What it is |
|---|---|
| `/` | Landing page |
| `/dashboard` | Student dashboard |
| `/day/:dayId` | Daily task + submission page (e.g. `/day/12`) |

These match `ROUTE_MAP.txt` exactly. (There's also a `/test-cases` page in the app for verification purposes, but it isn't part of the three required submission routes.)

---

## Notes

This was built as part of a hackathon-style team project. See `AI_LOGS.md` for a log of how AI tools were used while building this.