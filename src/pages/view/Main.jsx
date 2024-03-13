import Container from "@components/view/Container";
import { Link } from "react-router-dom";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <>
      <Container>
        <div className={styles.mainWrap}>
          <Link to="/BaseList">BaseList</Link>
          <Link to="/BaseListForm">BaseListForm</Link>
        </div>
      </Container>
    </>
  );
};

export default Main;
