# MOVIX

Modern, responsive movie discovery app built with React + Vite + TailwindCSS and powered by the TMDB API.

Badges:  
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE) [![Vite](https://img.shields.io/badge/Bundler-Vite-blue)](https://vitejs.dev/) [![React](https://img.shields.io/badge/Library-React-61DAFB)](https://reactjs.org/)

---

## Table of contents
- [Demo](#demo)
- [Features](#features)
- [Quick start](#quick-start)
- [Environment variables](#environment-variables)
- [TMDB notes](#tmdb-notes)
- [Project structure](#project-structure)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)

---

## Demo
Run locally (below) — optionally add screenshots/GIFs to /public and reference here.

---

## Features
- Clean, dark cinematic UI (TailwindCSS)
- Trending movies feed (TMDB)
- Search movies with debounce
- Save favorites to localStorage
- Responsive layout, optimized for mobile and desktop

---

## Quick start

1. Clone
   git clone https://github.com/Puneet0744/MOVIX.git
   cd MOVIX

2. Install
   npm install

3. Add API key (see below)

4. Run
   npm run dev
   Visit http://localhost:5173

Build for production:
   npm run build
Preview build:
   npm run preview

---

## Environment variables
Create a `.env` in project root:

VITE_TMDB_API_KEY=your_tmdb_api_key_here

Important: For TMDB v3 endpoints the library expects the API key as `api_key` query parameter. If you use a v4 token, use Authorization: Bearer <token> and TMDB v4 endpoints accordingly.

---

## TMDB notes
Base API: `https://api.themoviedb.org/3`  
Image base: `https://image.tmdb.org/t/p/w500/{poster_path}`

Common endpoints used:
- Search: `/search/movie?query={query}&api_key={KEY}`
- Trending: `/trending/movie/week?api_key={KEY}`
- Discover/popularity: `/discover/movie?sort_by=popularity.desc&api_key={KEY}`

---

## Project structure
src/
- components/ — MovieCard, Search, Footer, etc.
- App.jsx — main app logic
- main.jsx, index.css

Public folder contains images and static assets.

---

## Troubleshooting
- No results / 401: verify VITE_TMDB_API_KEY in `.env` and restart dev server.
- CORS / network errors: check console and that you are using the correct TMDB endpoint/query format.
- Search not updating: debounce is used — wait ~500ms after typing.

If fetch returns no `results` array, ensure your fetch URL includes `api_key` (TMDB v3 style) or uses correct Authorization for v4.

---

## Contributing
PRs welcome. Keep changes small, include tests if applicable, and update README with relevant usage notes.

---

## License
MIT — see LICENSE.

---

Author: Puneet Khandelwal — GitHub: @Puneet0744
