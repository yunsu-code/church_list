import Container from "@components/view/Container";
import { Link } from "react-router-dom";
import styles from "./Main.module.scss";
import { Reset } from "styled-reset";
import Header from "@components/common/Header";

const Main = () => {
  return (
    <>
      <Reset />
      <Header />
      <Container>
        <div className={styles.mainWrap}>
          <Link to="/BaseList">BaseList</Link>
          <Link to="/BaseListForm">BaseListForm22</Link>
        </div>
      </Container>
    </>
  );
};

export default Main;
