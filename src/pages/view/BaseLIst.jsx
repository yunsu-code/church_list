import { Reset } from "styled-reset";
import { useSelector } from "react-redux";
import Header from "@components/common/Header";
import Container from "@components/view/Container";
import litany from "@data/litany.json";

const BaseLIst = () => {
  const basicList = useSelector((state) => state.basicList);

  return (
    <>
      <Reset />
      <Header />
      <Container>
        <h2>BaseList</h2>
        <ul>
          <li>* section01.id : {basicList.section01.id.value}</li>
          <li>* section01.bible : {basicList.section01.bible.value}</li>
          <li>* section01.user : {basicList.section01.user.value}</li>
          <li>* section02.id : {basicList.section02.id.value}</li>
          <li>* section02.bible : {basicList.section02.bible.value}</li>
          <li>* section02.user : {basicList.section02.user.value}</li>
          <li>* section03.id : {basicList.section03.id.value}</li>
          <li>* section03.bible : {basicList.section03.bible.value}</li>
          <li>* section03.user : {basicList.section03.user.value}</li>
          <li>
            {basicList.section03.user.value !== "" ? (
              <>
                * litany : {litany[basicList.section03.user.value].name}
                <br />
                {litany[basicList.section03.user.value].text.map((el, idx) => {
                  if (idx % 2 == 0) {
                    return <div key={idx}>★ {el}</div>;
                  } else {
                    return <div key={idx}>{el}</div>;
                  }
                })}
                {litany[basicList.section03.user.value].all
                  ? litany[basicList.section03.user.value].all
                  : null}
              </>
            ) : null}
          </li>
        </ul>
      </Container>
    </>
  );
};

export default BaseLIst;
