import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovies } from "../../api/movies";
import MovieList from "../../components/MovieList/MovieList";
import SearchBar from "../../components/SearchBar/SearchBar";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const MoviesPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );
  const { query } = params;

  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      if (!query) return;

      try {
        setLoading(true);
        setError(false);
        setMovies([]);

        const movies = await searchMovies(query);
        setMovies(movies);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [query]);

  function handleSubmit(e) {
    e.preventDefault();

    setSearchParams({ query: e.target.query.value });
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      {loading && <Loader />}
      {error && <Error />}
      {movies.length > 0 && !loading && !error ? (
        <MovieList movies={movies} />
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
};

export default MoviesPage;
