import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieCast, getImageUrl } from "../../api/movies";
import css from "./MovieCast.module.css";
import Loader from "../Loader/Loader";
import Error from "../Error/Error";

const MovieCast = () => {
  const { movieId } = useParams();

  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!movieId) return;

    async function fetchData() {
      try {
        setLoading(true);
        setError(false);

        const cast = await fetchMovieCast(movieId);
        setCast(cast);
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
    <div className={css.cast}>
      {loading && <Loader />}
      {error && <Error />}
      {cast.length > 0 ? (
        cast.map((actor) => (
          <li key={actor.id} className={css.castItem}>
            <img
              src={`${getImageUrl(actor.profile_path)}`}
              alt={actor.name}
              width="150"
              className={css.castImg}
            />
            <p className={css.castName}>{actor.name}</p>
          </li>
        ))
      ) : (
        <p>No cast</p>
      )}
    </div>
  );
};

export default MovieCast;
