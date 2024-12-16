import { useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { fetchMovieDetails, getImageUrl } from "../../api/movies";
import css from "./MovieDetailsPage.module.css";
import Loader from "../../components/Loader/Loader";
import Error from "../../components/Error/Error";

const MovieDetailsPage = () => {
  const location = useLocation();
  const backLink = useRef(location.state ?? "/movies");
  const { movieId } = useParams();

  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);

        const movie = await fetchMovieDetails(movieId);
        setMovie(movie);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [movieId]);

  return (
    <div>
      <Link to={backLink.current} className={css.backLink}>
        Go back
      </Link>
      {loading && <Loader />}
      {error && <Error />}
      {movie && (
        <div className={css.container}>
          <div className={css.infoContainer}>
            <img
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
              className={css.poster}
            />
            <div>
              <h2 className={css.title}>
                {movie.title} ({movie.release_date.slice(0, 4)})
              </h2>
              <p className={css.userScore}>User score: {movie.vote_average}</p>
              <p className={css.sectionTitle}>Overview</p>
              <p>{movie.overview}</p>
              <p className={css.sectionTitle}>Genres</p>
              <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
            </div>
          </div>
          <p className={css.sectionTitle}>Additional information</p>
          <ul className={css.additionalInfo}>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
          <Outlet />
        </div>
      )}
    </div>
  );
};

export default MovieDetailsPage;
