# StayEase

**Full-Stack Booking Platform**  
_MERN (MongoDB, Express, React, Node) + Tailwind CSS + JWT_  
**Status:** In Progress — July 2025

---

## What is StayEase?

StayEase is a simple and clean booking platform inspired by Airbnb. It allows hosts to list properties and guests to browse, book, and manage their reservations. I built this project to understand how a full booking system works end-to-end — from UI to backend to authentication.

This repository includes both the **frontend (React + Tailwind)** and **backend (Node + Express + MongoDB)**. The goal is to make the app lightweight, scalable, and easy to deploy.

---

## Key Features

- Responsive UI built with React & Tailwind CSS  
- Host and Guest roles (create + book listings)  
- Secure Authentication & Authorization using JWT  
- Listings CRUD (Create, Read, Update, Delete)  
- Booking system with date availability  
- MongoDB database for scalable storage  
- Clean RESTful API structure  

---

## Technology Stack

- **Frontend:** React, Tailwind CSS, React Router  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB (Atlas or local)  
- **Auth:** JSON Web Tokens (JWT)  
- **Other:** Axios, Mongoose, bcrypt  

---

## How to Run This Project Locally

> Make sure you have **Node.js (v16+)**, **npm/yarn**, and **Git** installed.

### 1. Clone the repository

```bash
git clone https://github.com/<your-username>/stayease.git
cd stayease
```

🚀 Backend Setup
2. Install backend dependencies
```bash
cd backend
npm install
```

3. Create a .env file inside backend/
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/stayease?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret_here
CLIENT_URL=http://localhost:3000

4. Start the backend server
```bash
npm run dev
# or
node server.js
```


Frontend Setup
5. Install frontend dependencies
Open a new terminal:
```bash
cd ../frontend
npm install
```

6. Create .env inside frontend/
```bash
VITE_API_URL=http://localhost:5000/api
```

7. Start the frontend
```bash
npm run dev
```

API (High Level)

Auth Routes
POST /api/auth/register — Register user
POST /api/auth/login — Login & get JWT

Listings Routes
1.GET /api/listings — Get all listings
2.POST /api/listings — Create listing (auth required)
3.GET /api/listings/:id — Listing details
4.PUT /api/listings/:id — Update listing
5.DELETE /api/listings/:id — Delete listing

Booking Routes
POST /api/bookings — Create booking
GET /api/bookings/user — Get user bookings

Authentication Flow — Simple Explanation
1.User registers with email & password
2.Backend hashes paswsord using bcrypt
3.On login → backend validates password, returns JWT
4.Frontend stores JWT (in memory or httpOnly cookie)
5.Protected routes require valid token

Tips / Notes
Use MongoDB Atlas for easy setup
Keep your JWT_SECRET long & secure
Never commit .env files
Use httpOnly cookies in production for security

Roadmap / TODO
Stripe payments integration
Better calendar availability UI
Host profile & rating system
Email notifications for bookings
Unit & integration tests
Deployment on Vercel / Render + MongoDB Atlas

License

MIT License — feel free to use and modify the code.
© 2025 — Mridula Kumari

Contact
Made with ❤️ by Mridula Kumari
For feedback or collaboration, open an issue on GitHub.
