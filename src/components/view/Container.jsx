import styles from "./Container.module.scss";
import cx from "classnames";

const Container = ({ children, type }) => {
  return (
    <div className={cx(styles.container, type && styles[type])}>{children}</div>
  );
};

export default Container;
