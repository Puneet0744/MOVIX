<div align="center">

# 🎬 **MOVIX**  
### _Find Movies You'll Enjoy Without the Hassle_

A sleek, modern movie discovery app built with **React (Vite)**, **Tailwind CSS**, and the **TMDB API**.  
Search, explore trending titles, and browse popular movies — all in one smooth experience.  

![TMDB Logo](https://upload.wikimedia.org/wikipedia/commons/6/69/The_Movie_Database_%28TMDb%29_Logo.svg#gh-dark-mode-only)
![Hero Banner](public/hero.png)

---

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DBFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Styled%20with-TailwindCSS-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Bundled%20with-Vite-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![TMDB API](https://img.shields.io/badge/API-TMDB-01b4e4?style=for-the-badge&logo=themoviedatabase)](https://www.themoviedb.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](./LICENSE)

</div>

---

## 🚀 **Features**

✨ **Search Movies** – Find any movie with real-time suggestions  
🔥 **Trending Section** – Discover the hottest movies of the week  
🎞️ **Popular Picks** – Automatically lists trending/popular films  
🌈 **Beautiful UI** – Powered by Tailwind CSS  
📱 **Responsive Design** – Works across all devices  
⚡ **Fast Builds** – Optimized with Vite  
🌀 **Loading Spinner** – Smooth feedback during fetches  
💾 **Appwrite Ready** – Optional analytics or backend tracking  

---

## 🧩 **Folder Structure**


MOVIX/
├── public/
│   ├── hero.png
│   ├── star.svg
│   ├── no-movie.png
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   ├── Search.jsx
│   │   └── Spinner.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── vite.config.js
└── README.md


⚙️ Setup & Installation

1. Clone the Repository

	git clone https://github.com/Puneet0744/MOVIX.git

cd MOVIX

2. Install Dependencies

	npm install

3. Set Up Environment Variables

	Create a .env file in the project root:

	VITE_TMDB_API_KEY=your_tmdb_api_key_here

4. Start Development Server

   npm run dev

🧠 Tech Stack

Category	Tech

⚛️ Frontend	React 19 (Vite)

🎨 Styling	Tailwind CSS 4.1

🎥 API	TMDB (The Movie Database)

🧩 Hooks	react-use (debounce)

🧾 Environment Variables

Variable			Description

VITE_TMDB_API_KEY	Your TMDB API key (get it from themoviedb.org)
