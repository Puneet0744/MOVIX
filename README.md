# 🎬 MOVIX – Modern Movie Finder App  

> 🚀 A modern, responsive movie discovery app built with **React + Vite + TailwindCSS**, powered by the **TMDB API**.  
> Search, browse, and explore trending movies with sleek animations and dynamic UI.  

---

## 🌟 Features

✨ **Beautiful UI** – Clean, dark, and cinematic design using TailwindCSS  
🔥 **Trending Movies Section** – Shows daily trending movies from TMDB  
🔍 **Smart Search** – Find any movie instantly using TMDB search API  
❤️ **Favorites** – Save movies locally using `localStorage`  
📱 **Responsive** – Works seamlessly on all devices  
⚡ **Fast & Modern** – Built with **Vite** and component-based React structure  

---

## 🧩 Folder Structure

> The folder structure follows a modular React layout.  
👉 You can view it live here:  
[**📁 GitHub Repository Folder Structure**](https://github.com/Puneet0744/MOVIX)

MOVIX/
├── public/
│ ├── no-movie.png
│ ├── star.svg
│ └── ...
├── src/
│ ├── components/
│ │ ├── MovieCard.jsx
│ │ ├── Navbar.jsx
│ │ ├── TrendingMovies.jsx
│ │ └── ...
│ ├── App.jsx
│ ├── main.jsx
│ ├── index.css
│ └── ...
├── .gitignore
├── package.json
└── vite.config.js

yaml
Copy code

---

## ⚙️ Tech Stack

| Category | Technologies |
|-----------|---------------|
| **Frontend** | React 19, Vite |
| **Styling** | TailwindCSS 4.1 |
| **Icons** | Lucide React, React Icons |
| **API** | [TMDB API](https://www.themoviedb.org/documentation/api) |
| **Storage** | localStorage |
| **Deployment** | Netlify / GitHub Pages |

---

## 🔑 Environment Variables

You need a **TMDB API key** to fetch movies.

1. Create a `.env` file in your project root.  
2. Add the following line:


VITE_TMDB_API_KEY=your_tmdb_api_key_here
Get your free API key here → TMDB Developer Portal

🚀 Run Locally
Clone the project

bash
Copy code
git clone https://github.com/Puneet0744/MOVIX.git
cd MOVIX
Install dependencies

bash
Copy code
npm install
Start the development server

bash
Copy code
npm run dev
Open your browser and visit → http://localhost:5173

🧠 API Reference (TMDB)
Base URL:

arduino
Copy code
https://api.themoviedb.org/3
Feature	Endpoint
Search Movies	/search/movie?query={movie_name}
Trending Movies	/trending/movie/day
Image Base URL	https://image.tmdb.org/t/p/w500/{poster_path}

🖼️ Screenshots
Home Page	Trending Movies
	

💾 Deployment
Easily deploy to Netlify or GitHub Pages:

🔹 Deploy on Netlify
Go to Netlify

Click New Site → Import from Git

Connect your GitHub repo

Add environment variable → VITE_TMDB_API_KEY

Click Deploy

🧰 Scripts
Command	Description
npm run dev	Start local dev server
npm run build	Build for production
npm run preview	Preview production build

❤️ Acknowledgements
TMDB API for providing movie data

TailwindCSS for elegant styling

Lucide React for clean icons

React & Vite for the blazing-fast setup

👨‍💻 Author
Puneet Khandelwal
📍 India
💼 GitHub Profile

🏁 License
This project is MIT licensed.
Feel free to fork and modify it for your own use.
