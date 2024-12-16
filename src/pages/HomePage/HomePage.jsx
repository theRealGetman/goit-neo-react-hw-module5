import { useEffect, useState } from "react";
import { fetchTrendingMovies } from "../../api/movies";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(false);
        setMovies([]);

        const movies = await fetchTrendingMovies();
        setMovies(movies);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <h2>Trending today</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {movies.length > 0 ? <MovieList movies={movies} /> : <p>No movies</p>}
    </div>
  );
};

export default HomePage;
