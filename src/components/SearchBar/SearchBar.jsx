import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import css from "./SearchBar.module.css";

const SearchBar = ({ onSubmit }) => {
  const [searchParams] = useSearchParams();
  const params = useMemo(
    () => Object.fromEntries([...searchParams]),
    [searchParams],
  );
  const { query } = params;
  return (
    <form onSubmit={onSubmit} className={css.form}>
      <input type="text" name="query" defaultValue={query} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
