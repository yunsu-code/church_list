import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import { RiArrowLeftSLine, RiHome4Line } from "@remixicon/react";
import { useNavigate } from "react-router-dom";
import cx from "classnames";

const Header = ({ title, children, className }) => {
  const navigate = useNavigate();

  return (
    <header className={cx(styles.header, className)}>
      <button
        type="button"
        className={styles.backBtn}
        onClick={() => navigate(-1)}
      >
        <RiArrowLeftSLine size={34} />
      </button>
      <div className={styles.title}>{title}</div>
      <div className={styles.rightWrap}>
        {children}
        <Link to="/">
          <button type="button" className={styles.homeBtn}>
            <RiHome4Line size={27} />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
