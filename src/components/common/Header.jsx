import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import Home4LineIcon from "remixicon-react/Home4LineIcon";
import { useNavigate } from "react-router-dom";

const Header = ({ title, children }) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.backBtn}
        onClick={() => navigate(-1)}
      >
        <ArrowLeftSLineIcon size={34} />
      </button>
      <div className={styles.title}>{title}</div>
      <div className={styles.rightWrap}>
        {children}
        <Link to="/">
          <button type="button" className={styles.homeBtn}>
            <Home4LineIcon size={27} />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
