import { Link } from "react-router-dom";
import styles from "./Header.module.scss";
import ArrowLeftSLineIcon from "remixicon-react/ArrowLeftSLineIcon";
import Home4LineIcon from "remixicon-react/Home4LineIcon";
import { useNavigate } from "react-router-dom";

const Header = () => {
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
      <div className={styles.title}>헤더</div>
      <Link to="/">
        <button type="button" className={styles.homeBtn}>
          <Home4LineIcon size={26} />
        </button>
      </Link>
    </header>
  );
};

export default Header;
