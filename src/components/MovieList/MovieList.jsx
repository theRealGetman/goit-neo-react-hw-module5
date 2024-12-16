import { Link, useLocation } from "react-router-dom";
import { getImageUrl } from "../../api/movies";
import css from "./MovieList.module.css";

const MovieList = ({ movies }) => {
  const location = useLocation();

  return (
    <ul className={css.movieList}>
      {movies.map((movie) => (
        <li key={movie.id} className={css.movieCard}>
          <Link to={`/movies/${movie.id}`} state={location}>
            <img
              src={getImageUrl(movie.poster_path)}
              alt={movie.title}
              width={200}
            />
            <p>{movie.title}</p>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;
