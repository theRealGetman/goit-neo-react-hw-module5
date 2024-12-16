import css from "./NotFoundPage.module.css";

const NotFound = () => {
  return (
    <div className={css.container}>
      <img src="https://http.cat/404" alt="404" className={css.img} />
    </div>
  );
};

export default NotFound;
