# FastJob – AI-Powered Job Matching Platform

FastJob is a web-based job marketplace built for KitaHack2026.

It connects employers and job seekers with an AI-powered matching system that evaluates candidate suitability using semantic embeddings.

---

## 🚀 Live Demo
https://fastjob-db673.web.app/

---

## 💡 Key Features

### 👨‍💼 Employer Side
- Post jobs
- View applicants
- Accept / Reject / Hire candidates
- Rate employees after job completion
- Track attendance & performance

### 👩‍💻 Applicant Side
- Browse available jobs
- Apply for positions
- Build profile with skills & experience

### 🤖 AI Matching System
- Uses OpenAI Embeddings
- Compares job descriptions with applicant profiles
- Generates match score
- Stores AI results in Firebase
- Highlights top candidates for employers

---

## 🛠 Tech Stack
- React + Vite
- Firebase Realtime Database
- Firebase Authentication
- Firebase Cloud Functions (2nd Gen)
- OpenAI API (Embeddings)

---

## 🧠 How AI Matching Works

1. Job description is converted into a vector embedding.
2. Applicant profile data is converted into embedding.
3. Cosine similarity is calculated.
4. Match score is cached into database.
5. Employer sees ranked results instantly.

---

## 📂 Project Structure
- `src/` – Frontend (React)
- `functions/` – Backend AI matching logic
- `firebase.json` – Hosting & Functions config

---

Built for KitaHack2026.
