# Udemy Affiliate Marketplace Clone

A platform to browse Udemy courses, generate affiliate links, and track performance.  
Built with **Next.js / React** for the frontend and **Node.js / Express / MongoDB** for the backend.

---

## Features

- Browse and search courses by category
- View course details with ratings and instructor info
- Affiliate dashboard with earnings and clicks (mock data)
- User authentication backend ready (signup/login with JWT)
- Responsive UI

---

## Installation

### Backend

```bash
cd backend
npm install
cp .env.example .env   # Add your MongoDB URI and JWT_SECRET
node seeder.js         # Seed sample courses
npm run dev
```

Frontend
cd frontend
npm install
npm run dev

Open http://localhost:3000 in your browser.

Project Overview

-This project demonstrates a Udemy Affiliate Marketplace MVP.

-Frontend fetches courses from the backend and displays them.

-Dashboard shows affiliate stats using mock data.

-Backend includes routes for courses, authentication, affiliate links, and dashboard.

-Future Enhancements

-Real-time dashboard stats connected to backend

-Payment gateway integration

-Advanced search and filtering

Future Enhancements

-Real-time dashboard stats connected to backend

-Payment gateway integration

-Advanced search and filtering
