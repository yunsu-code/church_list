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
          <li>* id : {basicList.id.value}</li>
          <li>* email : {basicList.email.value}</li>
          <li>* bible : {basicList.bible.value}</li>
          <li>* username : {basicList.username.value}</li>
          <li>
            {basicList.litany.value !== "" ? (
              <>
                * litany : {litany[basicList.litany.value].name}
                <br />
                {litany[basicList.litany.value].text.map((el, idx) => {
                  if (idx % 2 == 0) {
                    return <div key={idx}>★ {el}</div>;
                  } else {
                    return <div key={idx}>{el}</div>;
                  }
                })}
                {litany[basicList.litany.value].all
                  ? litany[basicList.litany.value].all
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
