# AI Logs

A log of the prompts used with AI tools (Claude / ChatGPT) while building Nexus — from initial setup to final polish. Kept roughly in build order.

---

1. "I'm building a 3-member hackathon team project called Nexus for ABTalks — a 60-Day Coding Challenge platform for college students. Set up a fresh React + Vite project with Tailwind CSS, keep it minimal, and give me a dark theme colour palette (near-black background, orange accent) that we'll use across all three screens."

2. "As Member 1 on this team, I own the Landing Page (`/`). Build a header with logo + nav, a hero section with a bold headline about building daily and getting hired, a stats row (students participating, recruiters watching), and two CTA buttons — one to the dashboard, one to a test-cases page."

3. "Set up React Router with our three team routes: `/` for the landing page, `/dashboard` for the student dashboard, and `/day/:dayId` for the daily task page, so all three of us can build our screens independently."

4. "Acting as our design reviewer, look at the landing page and tell me what's wrong with the spacing and hierarchy on mobile — then fix it so it reads cleanly at a 390px viewport width."

5. "I'm Member 3 on the team and I've been given the masterplan for the Student Dashboard (`/dashboard`). Build the central hub: a header with student name, track badge and avatar, a hero streak banner, a progress bar showing days completed out of 60, and a 'today's task' card that links to Member 2's `/day/:dayId` route."

6. "As the same Member 3 role, make the streak banner feel like the centrepiece of the page — big animated flame icon, bold streak number, and a subtext reminding the student to submit before 11:59 PM."

7. "Still working as Member 3: add a GitHub-style 60-day progress grid below the banner. Green squares for completed days, a glowing cyan square for today's pending task, and dark grey for upcoming days — same visual language as a GitHub contribution graph."

8. "My masterplan says I need to handle three required edge cases for judging: Day 1 with no streak, a missed day, and an empty/fresh profile. Instead of hardcoding one student, give me a single `mockData.json` with three full student objects — `activeUser`, `dayOneUser`, and `missedDayUser` — that can feed the dashboard, the task page, and the test cases page."

9. "Build a small floating dev-toggle component, positioned top-right on the dashboard, with three buttons — Active / Day 1 / Missed — so judges (or us) can switch between those three mock states instantly without touching code."

10. "When the toggle is set to 'missed', swap the hero banner for a streak-broken state — orange/red styling, a warning icon, and a recovery message telling the student to complete today's task to activate a streak freeze."

11. "When the toggle is set to 'Day 1', replace the streak banner entirely with a welcome message — no streak number, just an encouraging line about completing the first task to ignite the streak."

12. "Now play the role of Member 2 building the Daily Task page (`/day/:dayId`). I need a task overview tab with the day's title, a checklist of requirements the student can tick off, and a second tab showing a code/tech-spec snippet for reference."

13. "As Member 2, add a submission form below the checklist for a GitHub repo link and a LinkedIn post link, with a 'Ship Day X & Extend Streak' button that shows a success state once submitted."

14. "The form currently accepts literally any text as a link — that's a problem for judging. Add strict regex validation so it only accepts real GitHub repo URLs (github.com/user/repo) and real LinkedIn post URLs, with inline error messages under each field."

15. "I want to add a feature that isn't in the original masterplan: below the main task checklist, add an 'Extra Tasks' section where the student can type in their own bonus goals for the day, check them off, or remove them. Make sure — very explicitly — that these are optional and never affect the streak-completion logic, even if none of them are checked."

16. "Acting as our QA lead for the hackathon submission, build a `/test-cases` page that lists our core test cases (viewport responsiveness, state persistence, URL validation) each with a category tag, execution time, and a passed/failed badge, plus a 'Run All Tests' button with a short loading state."

17. "One of the test cards on that page is showing the wrong status after I click 'Run Tests' — walk through the state logic and fix the bug."

18. "Switching back to Member 1's landing page: add a proper logo image in the header instead of the placeholder text logo, and center the site name so it doesn't collide with the logo or the dashboard button on smaller screens."

19. "As Member 1, add a 'Who are we?' section introducing ABTalks — a short two-paragraph description plus social links (LinkedIn, Instagram, YouTube) using inline SVG icons instead of a library, since we only need three icons."

20. "Still as Member 1: add an FAQ section at the bottom of the landing page — an accordion with 4-5 common questions about the challenge, plus a closing line with a contact email for anyone with more questions."

21. "There's a layout bug on the landing page — the logo and the site title overlap on narrower screens. Fix the header layout so both stay readable across breakpoints."

22. "Now stepping back into the Member 3 role for final touch-ups: review the whole dashboard end-to-end across all three mock states (active, Day 1, missed) and make sure the streak banner, progress grid, and standing card all update consistently when the dev toggle is switched."

23. "Do a final full-app pass as if you were reviewing this before submission — check spacing, hover states, and button consistency across all four routes, and confirm everything still holds up at 390px mobile width without breaking."

24. "Write the Route Map and AI Logs documentation required for submission — Route Map should list our exact routes, and AI Logs should document how we used AI tools across all three members' screens."

25. "Write a clean, simple README for the final repo that explains what the app is, what each route does, the tech stack, and how to run it locally — keep it human-friendly, not overly formal."

---

**Note:** Prompts are summarised from memory for this log — smaller back-and-forth fixes and one-line tweaks aren't listed individually, to keep this readable.