# ShopEasy E-Commerce Application

A full-stack MERN (MongoDB, Express, React, Node.js) e-commerce practice project.

## Technologies Used
- React (Vite)
- React Router
- Context API
- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- bcryptjs

## Features
- User Registration
- User Login with JWT
- Product Listing (fetched from MongoDB)
- Shopping Cart (add, increase/decrease quantity, remove)
- Protected API route example

## Project Structure
```
ecommerce-project/
├── frontend/     (React app)
└── backend/      (Express API + MongoDB)
```

## How to Run

### 1. Backend
```
cd backend
npm install
cp .env.example .env
```
Open `.env` and set your own `MONGO_URI` (a local MongoDB instance or a free
MongoDB Atlas cluster) and a `JWT_SECRET` (any long random string).

Seed the database with sample products:
```
npm run seed
```

Start the backend server:
```
npm run dev
```
The API will run at http://localhost:5000

### 2. Frontend
In a new terminal:
```
cd frontend
npm install
npm run dev
```
The app will run at http://localhost:5173

### 3. Try it out
1. Open http://localhost:5173 — products load from MongoDB.
2. Register a new account.
3. Log in — a JWT is issued and stored in the browser.
4. Add products to the cart, adjust quantities, remove items.

See PROJECT_GUIDE.pdf for a file-by-file explanation of how everything works.
