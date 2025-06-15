
# Creator Platform – ChatGPT Content Assistant & Instagram Analytics (MERN Stack)

This is a full-stack web application built with the MERN stack, featuring two key modules:

1. AI-Powered Content Idea Assistant – Uses OpenAI's GPT API to generate Instagram reel ideas.
2. Simulated Instagram Analytics Dashboard – Displays engagement stats and growth trends.

---

## Live Demo

Frontend (Vercel): [https://creator-platform-yourusername.vercel.app](https://creator-platform-git-master-sarthak20574s-projects.vercel.app)

Note: Backend API is not deployed yet – you’ll need to self-host or connect a backend for GPT responses.

---

## Tech Stack

| Layer      | Tech Used            |
|------------|----------------------|
| Frontend   | React.js + Tailwind  |
| Backend    | Node.js + Express    |
| Database   | MongoDB (optional)   |
| AI API     | OpenAI GPT-3.5 / 4   |
| Charts     | Chart.js             |
| Hosting    | Vercel (frontend), Render (backend) |

---

## Features

### Module 1: Content Idea Assistant (AI)

- Enter a topic and select a niche (e.g., fitness, fashion)
- Generates:
  - Reel idea
  - Caption
  - 5 Hashtags
  - Strong hook or opening line

Powered by OpenAI’s GPT API.

---

### Module 2: Instagram Analytics (Simulated)

- Line chart showing follower growth over 7 days
- Engagement stats for 5 posts (likes + comments)
- Suggested best time to post

---

## Setup Instructions (Local)

### Prerequisites

- Node.js installed
- OpenAI API key

### Clone the Repo

```bash
git clone https://github.com/your-username/creator-platform.git
cd creator-platform
````

### Start Backend (server)

```bash
cd server
npm install
touch .env
# Add your OpenAI key
OPENAI_API_KEY=your_openai_api_key_here

node index.js
```

### Start Frontend (client)

```bash
cd client
npm install
npm start
```

---

## Sample Analytics JSON Format

```json
{
  "followers": [1200, 1250, 1280, 1295, 1330, 1360, 1400],
  "engagement": [
    {"post": 1, "likes": 320, "comments": 25},
    {"post": 2, "likes": 400, "comments": 40},
    {"post": 3, "likes": 290, "comments": 10}
  ],
  "bestPostTime": "Wednesday 7 PM"
}
```

---

## Optional Enhancements

* Save generated ideas to a Content Bank (MongoDB)
* User login for dashboard access (JWT/session)
* Export analytics report (CSV or PDF)

---

## License

MIT License

---
