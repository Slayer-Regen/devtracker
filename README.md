# 🚀 DevTracker

A **full-stack web app** to track coding sessions, GitHub commits, LeetCode progress, Pomodoro focus sessions — all in a beautiful dashboard!

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
- Visualize everything beautifully using charts and cards

Built for developers who want to **track their growth daily**.

---

## 🛠️ Tech Stack

- **Frontend**: Next.js + Tailwind CSS
- **Backend**: Node.js + Express.js
- **Database**: MongoDB 
- **Authentication**: JWT 
- **Charts**: Chart.js / Recharts
- **State Management**: Zustand
- **Other Tools**: node-cron, axios, cheerio (scraping)

---

## 🚀 Features

- ✅ Authentication (Login / Register)
- ✅ Log Coding Sessions manually
- ✅ Automatic GitHub Commit Tracker
- ✅ Automatic LeetCode Stats Tracker
- ✅ Pomodoro Timer with Logs
- ✅ Beautiful Dashboard Visualization
- ✅ API Integration and Auto Data Sync(Cron Job)


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
- Tools: `axios`, `octokit/rest.js` 

### LeetCode
- LeetCode data is fetched using:
  - **Web Scraping** (using `cheerio`).
  - Gets the number of Easy, Medium, and Hard problems solved.


### Syncing
- **Cron Jobs** (`node-cron`) run every 6 hours to auto-sync GitHub and LeetCode data.
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


## 🌟Future Prospects

- 🎯 **Mobile App** using React Native or Expo
- 🎯 **Dockerize** the project for easy deployment
- 🎯 **Tests** (Jest + Supertest for backend, React Testing Library for frontend)

---

## 📸 Screenshots

![Coding_session](https://github.com/user-attachments/assets/029b8224-3e79-41c1-a87e-efc58aca4ce6)
![Github Commits](https://github.com/user-attachments/assets/de14a324-a3c0-460e-8a8a-b099714575bb)
![Leetcode Stats](https://github.com/user-attachments/assets/b54d4e46-a519-488b-a350-2cec6518ee0f)




