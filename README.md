# 🚀 Developer Productivity Tracker

A **full-stack web app** to track coding sessions, GitHub commits, LeetCode progress, Pomodoro focus sessions, and Resume tips — all in a beautiful dashboard!

## 📚 Table of Contents
- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Project Setup](#project-setup)
- [Backend API Overview](#backend-api-overview)
- [Frontend Pages Overview](#frontend-pages-overview)
- [Data Fetching Sources](#data-fetching-sources)
- [How Pomodoro Timer Works](#how-pomodoro-timer-works)
- [How Coding Sessions Work](#how-coding-sessions-work)
- [Deployment Guide](#deployment-guide)
- [Stretch Goals](#stretch-goals)

---

## ✨ Overview

This project is a **personal developer dashboard** that helps you:
- Log your coding sessions
- Track GitHub commits and LeetCode progress
- Stay productive with a built-in Pomodoro timer
- Get resume improvement tips
- Visualize everything beautifully using charts and cards

Built for developers who want to **track their growth daily**.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB (or PostgreSQL optional)
- **Authentication**: JWT (or Clerk/Auth0 optional)
- **Charts**: Chart.js / Recharts
- **State Management**: Context API or Zustand
- **Other Tools**: node-cron, axios, cheerio (scraping)

---

## 🚀 Features

- ✅ Authentication (Login / Register)
- ✅ Log Coding Sessions manually
- ✅ Automatic GitHub Commit Tracker
- ✅ Automatic LeetCode Stats Tracker
- ✅ Pomodoro Timer with Logs
- ✅ Resume Tips and Notes Section
- ✅ Beautiful Dashboard Visualization
- ✅ API Integration and Auto Data Sync
- ✅ Mobile Responsive Design

---

## ⚙️ Project Setup

### 1. Clone the repo
```bash
git clone https://github.com/your-username/dev-productivity-tracker.git
cd dev-productivity-tracker
```

### 2. Install dependencies
```bash
# For frontend
cd frontend
npm install

# For backend
cd ../backend
npm install
```

### 3. Configure environment variables
Create `.env` files for frontend and backend.

Backend `.env`:
```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
GITHUB_TOKEN=your_github_personal_access_token
PORT=5000
```

Frontend `.env.local`:
```env
NEXT_PUBLIC_API_URL=http://localhost:5000
```

### 4. Run the app
```bash
# Backend
cd backend
npm run dev

# Frontend
cd frontend
npm run dev
```

App will run on:
- Frontend: http://localhost:3000
- Backend: http://localhost:5000

---

## 🔥 Backend API Overview

| Endpoint                 | Method | Description |
| ------------------------- | ------ | ----------- |
| `/api/auth/register`      | POST   | User Registration |
| `/api/auth/login`         | POST   | User Login |
| `/api/coding-session`     | POST   | Add Coding Session |
| `/api/github-stats`       | GET    | Get GitHub commit stats |
| `/api/leetcode-progress`  | GET    | Get LeetCode progress |
| `/api/pomodoro-log`       | POST   | Log Pomodoro session |

---

## 🖥️ Frontend Pages Overview

| Page                | URL Path       | Description |
| ------------------- | -------------- | ----------- |
| Login / Register     | `/auth`        | Login and Signup |
| Dashboard Overview   | `/dashboard`   | Main dashboard with stats |
| Coding Log           | `/coding-log`  | List of past coding sessions |
| GitHub Insights      | `/github`      | GitHub commit visualization |
| LeetCode Stats       | `/leetcode`    | Problem solved breakdown |
| Pomodoro Tracker     | `/pomodoro`    | Focus timer & history |

---

## 📊 Data Fetching Sources

### GitHub
- GitHub commits are fetched using:
  - **GitHub API** via a **Personal Access Token** (PAT).
  - You can fetch commit counts by date, repo, etc.
- Tools: `axios`, `octokit/rest.js` (optional)

### LeetCode
- LeetCode data is fetched using:
  - **Unofficial APIs** or **Web Scraping** (using `cheerio`).
  - Gets the number of Easy, Medium, and Hard problems solved.

- Alternatively, use open-source npm packages like `leetcode-api` if you don't want to maintain scraping.

### Syncing
- **Cron Jobs** (`node-cron`) run every few hours to auto-sync GitHub and LeetCode data.
- Data is saved into MongoDB collections for persistence.

---

## ⏱️ How Pomodoro Timer Works

- **Pomodoro = 25 minutes work + 5 minutes break**
- Start a Pomodoro cycle timer (25 minutes).
- After 25 min, get an alert to take a 5 min break.
- Session is **logged** automatically when completed:
  - **Date**
  - **Session Length**
  - **Status** (completed/failed)

### Pomodoro Logging
- Data stored in `PomodoroLogs` collection in DB.
- You can see daily, weekly focus logs on the dashboard!

---

## 📝 How Coding Session Logging Works

- You can **manually log** a coding session via a simple form.
- Fields:
  - **Project Name**
  - **Session Start Time**
  - **Session End Time**
  - **Notes/Description**
- The backend stores this in a `CodingSessions` table/collection.
- On the Dashboard:
  - Total time coded today/this week
  - List of recent sessions
  - Productivity streaks

---

## 🚀 Deployment Guide

1. **Frontend**: Deploy on **Vercel** (zero-config for Next.js)
2. **Backend**: Deploy on **Render** or **Fly.io**
3. Add MongoDB (Atlas) connection
4. Setup environment variables on deployment platforms
5. (Optional) Add a domain + HTTPS

---

## 🌟 Stretch Goals

- 🎯 **VS Code Extension** to log Pomodoro Sessions directly
- 🎯 **Leaderboard** for GitHub commits / LeetCode problems
- 🎯 **AI Resume Tips Generator** using GPT APIs
- 🎯 **Mobile App** using React Native or Expo
- 🎯 **Dockerize** the project for easy deployment
- 🎯 **Tests** (Jest + Supertest for backend, React Testing Library for frontend)

---

## 📸 Screenshots
_Add sample screenshots of dashboard graphs, Pomodoro timer, GitHub/LeetCode stats once ready!_

---

# ✨ Final Note
This is an amazing project for building your:
- Full-stack skills (Next.js + Node.js)
- API integrations (GitHub + LeetCode)
- Clean project structure
- Developer productivity tracking habits 💻🚀