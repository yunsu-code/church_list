import styles from "./Container.module.scss";
import cx from "classnames";

const Container = ({ children, type, className }) => {
  return (
    <div className={cx(styles.container, type && styles[type], className)}>{children}</div>
  );
};

export default Container;
