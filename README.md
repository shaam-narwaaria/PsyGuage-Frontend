# 🎮 MERN Stack Game App – Full-Stack Interactive Gaming Platform

Welcome to the **MERN Stack Game App**, a **full-stack web application** that provides a collection of interactive games while tracking user scores in real-time. This project demonstrates **frontend and backend integration**, user authentication, and **database management** using the latest web technologies.

🚀 **Live Demo:**
- 🌐 **Frontend:** [Psy-Guage Frontend](https://psy-guage-frontend.vercel.app/)
- 🌐 **Backend:** [Psy-Guage Backend](https://psyguage-backend.onrender.com/)

---

## 🚀 Project Overview

This application is built using the **MERN (MongoDB, Express.js, React, Node.js) stack**, with a focus on **performance, security, and scalability**. It offers a seamless user experience with **JWT-based authentication**, secure API endpoints, and **responsive UI components**.

### 🔹 **Key Highlights:**
- ✔️ Secure **User Authentication** (JWT, bcrypt.js)
- ✔️ Multiple **Interactive Games** with Engaging UI
- ✔️ **Real-time Score Tracking** via MongoDB
- ✔️ **RESTful API** for High-Performance Data Fetching
- ✔️ **Optimized UI/UX** for Desktop & Mobile
- ✔️ **Deployed on Cloud Platforms** – **Render (Backend) & Vercel (Frontend)**
- ✔️ **Scalable & Maintainable Codebase**

---

## 🛠 Tech Stack

### **Frontend:**
- **React.js** – Component-based UI
- **React Router** – Navigation & Routing
- **CSS** – Styling & Animations

### **Backend:**
- **Node.js & Express.js** – Server-side API
- **MongoDB Atlas** – Cloud-based NoSQL Database
- **Mongoose** – ORM for Database Interaction
- **JWT & bcrypt.js** – Secure User Authentication

### **Deployment & Tools:**
- **Render** – Backend Hosting
- **Vercel** – Frontend Hosting
- **Git & GitHub** – Version Control
- **Postman** – API Testing

---

## 🌟 Key Functionalities

### 🔹 **User Authentication & Security**
- Secure **login & registration system** using JWT authentication
- **Password encryption** with bcrypt.js
- **Protected routes** to ensure data security

### 🔹 **Game & Score Tracking**
- Users can play **multiple games** with real-time score updates
- **Scores are stored in MongoDB** and retrieved dynamically
- **RESTful API integration** for seamless data flow

### 🔹 **Optimized Frontend UI**
- **Modern UI/UX design** for an engaging experience
- **Fully responsive** – mobile & desktop-friendly
- **Efficient state management** with React hooks

---

## 🎮 Game Descriptions

* **Game 1 (Example: Memory Match):**
    * A classic memory game where users match pairs of cards.
    * Scores are based on the number of attempts and time taken.
* **Game 2 (Example: Quick Math):**
    * A fast-paced math challenge where users solve simple arithmetic problems.
    * Scores are based on accuracy and speed.
* **Game 3 (Example: Typing Speed):**
    * A game where the user must type the words that appear on the screen as fast as possible.
    * Scores are based on words per minute and accuracy.

---

## 🛠️ Installation and Setup

### **Backend Setup:**

1.  **Clone the repository:**
    ```bash
    git clone <backend-repository-url>
    cd backend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    * Create a `.env` file with your MongoDB connection string, JWT secret, etc.
    * Example:
        ```
        MONGODB_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        ```
4.  **Start the server:**
    ```bash
    npm start
    ```

### **Frontend Setup:**

1.  **Clone the repository:**
    ```bash
    git clone <frontend-repository-url>
    cd frontend
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Set up environment variables:**
    * Create a `.env.local` file with your backend API URL.
    * Example:
        ```
        REACT_APP_API_URL=http://localhost:5000/api
        ```
4.  **Start the development server:**
    ```bash
    npm start
    ```

---

## 📄 API Documentation (Brief)

* **`POST /api/users/register`:** Register a new user.
* **`POST /api/users/login`:** Login and get a JWT token.
* **`GET /api/scores`:** Get all user scores (requires authentication).
* **`POST /api/scores`:** Add a new score (requires authentication).
---

## 🤝 Contribution Guidelines

1.  Fork the repository.
2.  Create a new branch for your feature or bug fix.
3.  Commit your changes.
4.  Push to your fork.
5.  Create a pull request.

---

## 🚀 Future Enhancements

* Implement real-time multiplayer functionality.
* Add more diverse and challenging games.
* Integrate social features like leaderboards and friend lists.
* Implement more robust error handling.
* Add more detailed game statistics.
* Add more user profile customization.

---

Feel free to contribute and enhance this project!
