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
      <Container type="form">
        <div className={styles.mainWrap}>
          <Link to="/BaseListForm">주보 만들기</Link>
          <Link to="/BaseList">주보 완성본</Link>
        </div>
      </Container>
    </>
  );
};

export default Main;
