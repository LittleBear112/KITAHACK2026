# JobBoard Firebase Starter (RTDB, Desktop-first)

React + Vite + Firebase (Auth, Realtime Database, Storage, Hosting)

## Quick Start
1) Create Firebase project; enable Authentication (Email/Password + Google), Realtime Database, Storage.
2) Put your config in `src/lib/firebase.js` (databaseURL required).
3) Install deps: `npm install`
4) Dev: `npm run dev` -> http://localhost:5173
5) Deploy: `npm run build` then `npx firebase deploy`

## Data
- jobs/{jobId}
- applications/{jobId}/{applicationId}

## Pages
- /           (Homepage – Template 1)
- /jobs       (Search – Template 2)
- /jobs/:id   (Job details & apply – Template 3)
- /employer   (Employer dashboard – Template 4)
- /employer/:jobId/applicants (Applicants – Template 5)
- /employer/post  (Post job form)
