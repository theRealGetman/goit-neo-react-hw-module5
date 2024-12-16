import { BallTriangle } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
  return (
    <BallTriangle
      height={100}
      width={100}
      radius={5}
      color="#535bf2"
      ariaLabel="ball-triangle-loading"
      wrapperClass={css.loader}
    />
  );
};

export default Loader;
