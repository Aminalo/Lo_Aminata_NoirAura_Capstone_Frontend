# NoirAura (Capstone) — Lo_Aminata_Noiraura_Capstone

## Overview

NoirAura is a full-stack web application designed to connect clients with beauty professionals in a modern, elegant, and seamless way.
The platform allows users to discover salons, makeup artists, hairstylists, and skincare experts, explore their services, view portfolios, and book appointments directly online — all within an intuitive, responsive interface.

The project was built using React, Node.js, Express, and MongoDB, and demonstrates how to connect a frontend and backend to perform full CRUD operations with JWT authentication.

## Inspiration & Name Meaning

The name NoirAura blends two powerful ideas:

“Noir” — French for black, symbolizing elegance, strength, and cultural pride. It reflects Aminata’s roots and her fashion brand Noirceur, which celebrates African beauty and sophistication.

“Aura” — representing the inner glow and unique energy that radiates from confidence and self-care.

Together, they mean “The elegant glow of identity.” NoirAura isn’t just an app — it’s a statement that beauty and confidence are forms of power.

## Project Description

The main idea behind NoirAura is to create a modern and simple web platform where users can:

- Register and log in securely,

- Browse a collection of salons available in different cities,

 Save their favorite salons for easy access later,

- Manage their list of favorites (add or remove).

The application includes both frontend and backend logic, a real MongoDB connection, and good error handling.
It was built as a demonstration of how a complete web app works—from user authentication to database operations and clean interface design.

## Technical Highlights:

- Full CRUD functionality for services, users, and bookings.

- JWT authentication for secure login and role-based access.

- MongoDB indexes for fast queries by category/date.

- Axios/fetch calls with async/await for API communication.

- Responsive React front-end using Hooks and React Router.

- Error handling and form validation throughout.

- External API integration (optional): Weather API or location map for salons.

## Technologies Used

### Frontend:

- React (Vite)

- React Router DOM

- Axios (for HTTP requests)

- React Cookies 

- CSS for styling

### Backend:

- Node.js and Express

- MongoDB with Mongoose

- JSON Web Token (JWT)

- Morgan and CORS for middleware

- Dotenv for environment variables


## Main Features

### User Authentication: 
users can sign up, log in, and stay connected with a token stored in cookies.

### Protected Routes: 
certain pages (like salons and favorites) require a valid JWT to access.

### CRUD Operations:

- Create: new users and favorites

- Read: list of salons and favorites

- Update: ability to edit salon data (backend ready)

- Delete: remove salons or favorites

### Favorites System: 
users can mark a salon as a favorite using a heart icon and view all their saved salons on a dedicated page.

### Responsive Design: 
clean and minimal interface that adapts to different screen sizes.

### Error Handling: 
backend and frontend both display clear error messages.

## Pages Included

- Home: welcoming page with a short introduction to NoirAura.

- About: explains the concept and philosophy behind NoirAura.

- Auth: registration and login page.

- Salons: displays all salons from the database with services and details.

- Favorites: shows all salons saved by the user, with the option to remove one or several.

Each page is connected to the backend using Axios and React hooks for data fetching and state updates.

## Project Structure
backend/
 ├─ src/
 │   ├─ app.mjs
 │   ├─ server.mjs
 │   ├─ db/connect.mjs
 │   ├─ models/
 │   ├─ routes/
 │   ├─ middleware/
 │   └─ utils/seedSalons.mjs
frontend/
 ├─ src/
 │   ├─ pages/
 │   ├─ components/
 │   ├─ contexts/
 │   ├─ lib/api.js
 │   └─ App.jsx

# Open the backend folder :
https://github.com/Aminalo/Lo_Aminata_NoirAura_Capstone_Backend.git


# How to Run the Project
1. In you terminal inside the folder you wanna put the project run this command:< Clone the repository
git clone https://github.com/yourusername/noiraura.git > 

2. Install dependencies
in you terminal go the backend folder and run: 
cd backend
npm install

in you terminal go the frontend folder and run:
cd frontend
npm install

3. Configure environment variables

Create a file named .env inside the backend folder and add:

PORT=4000
mongoURI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

4. Start both servers

Run the backend:

npm run dev


Run the frontend:

npm run dev

5. Open the app

Visit http://localhost:5173
 in your browser.*
And you're all set.

#  Requirements Met

✅Full CRUD routes implemented in the backend

✅Connected to a live MongoDB database

✅Proper error handling for invalid requests

✅Frontend with at least 4 pages using react-router-dom

✅Each CRUD operation connected to frontend logic

✅State management using React Hooks

✅Consistent and well-organized CSS



👩‍💻 Author

Aminata Lo
Software Engineering Student
aminatalo995@gmail.com