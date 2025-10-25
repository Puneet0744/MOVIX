import Search from './components/Search'
import Spinner from './components/Spinner'
import MovieCard from './components/MovieCard'
import { useEffect, useState } from 'react'
import { useDebounce } from 'react-use'
import Footer from './components/Footer'

const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`,
  },
}

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
  const [trendingMovies, setTrendingMovies] = useState([]);


  useDebounce( () => setDebouncedSearchTerm(searchTerm), 500, [searchTerm])

  const fetchMovies = async (query = '') => {
    setIsLoading(true);
    setErrorMessage('');

    try {
      const endpoint = query 
      ? `${API_BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
      : `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;


      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error('Failed to fetch movies');
      }

      const data = await response.json();
      console.log(data);

      if(data.Response == "False") {
        setErrorMessage(data.Error ||  'Failed to fetch movies');
        setMovieList([]);
        return;
      }

      setMovieList(data.results || []);


    } catch (error) {
      console.error("Error fetching movies:", error);
      setErrorMessage(`Error: ${error.message}`);

      setErrorMessage('Failed to fetch movies. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }

  const fetchTrendingMovies = async () => {
  setIsLoading(true);
  try {
    const response = await fetch(`${API_BASE_URL}/trending/movie/week`, API_OPTIONS);

    if (!response.ok) {
      throw new Error('Failed to fetch trending movies');
    }

    const data = await response.json();
    setTrendingMovies(data.results || []);
  } catch (error) {
    console.error(`Error fetching trending movies: ${error}`);
  } finally {
    setIsLoading(false);
  }
};

    
  useEffect(() => {

    fetchMovies(debouncedSearchTerm);
    fetchTrendingMovies();

  }, [debouncedSearchTerm]);

  return (
    <main>
      <div className='pattern' />

      <div className='wrapper'> 
        <header>
          <h1 className='text-gradient'>M O V I X</h1>
          <img src="/hero.png" alt='Hero Banner'/>
          <h1>Find <span className='text-gradient'> Movies </span>You'll Enjoy Without the Hassle</h1>

           <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        </header>

        {!debouncedSearchTerm && trendingMovies.length > 0 && (
          <section className='trending-movies mt-10'>
            <h2 className="text-2xl font-semibold mb-4">Trending Movies</h2>
            {isLoading && trendingMovies.length === 0 ? (
              <Spinner />
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {trendingMovies.slice(0, 10).map((movie) => (
                  <MovieCard key={movie.id} movie={movie} />
                ))}
              </div>
            )}
          </section>
        )}

        <section className='all-movies'>
          <h2 className="mt-[40px]">All Movies</h2>
          {isLoading ? (
            <Spinner />
          ) : errorMessage ? (
            <p className='text-red-500'>{errorMessage}</p>
          ) : (
            <ul>
              {movieList.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </ul>
          )}
        </section>

      </div>
      <Footer />
    </main>

  )
}

export default App