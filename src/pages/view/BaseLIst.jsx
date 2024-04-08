import { Reset } from "styled-reset";
import { useSelector } from "react-redux";
import Header from "@components/common/Header";
import Container from "@components/view/Container";
import litany from "@data/litany.json";

const BaseLIst = () => {
  const basicList = useSelector((state) => state.basicList);
  const notice = useSelector((state) => state.notice);

  return (
    <>
      <Reset />
      <Header />
      <Container>
        <h2>BaseList</h2>
        <ul>
          <li>* 주일낮예배.id : {basicList.주일낮예배.id.value}</li>
          <li>* 주일낮예배.bible : {basicList.주일낮예배.bible.value}</li>
          <li>* 주일낮예배.user : {basicList.주일낮예배.user.value}</li>
          <li>* 주일찬양예배.id : {basicList.주일찬양예배.id.value}</li>
          <li>* 주일찬양예배.bible : {basicList.주일찬양예배.bible.value}</li>
          <li>* 주일찬양예배.user : {basicList.주일찬양예배.user.value}</li>
          <li>* 수요예배.id : {basicList.수요예배.id.value}</li>
          <li>* 수요예배.bible : {basicList.수요예배.bible.value}</li>
          <li>* 수요예배.user : {basicList.수요예배.user.value}</li>
          <li>
            {basicList.수요예배.user.value !== "" ? (
              <>
                * litany : {litany[basicList.수요예배.user.value].name}
                <br />
                {litany[basicList.수요예배.user.value].text.map((el, idx) => {
                  if (idx % 2 == 0) {
                    return <div key={idx}>★ {el}</div>;
                  } else {
                    return <div key={idx}>{el}</div>;
                  }
                })}
                {litany[basicList.수요예배.user.value].all
                  ? litany[basicList.수요예배.user.value].all
                  : null}
              </>
            ) : null}
          </li>
          <li>
            * notice :
            <br />
            {notice.map((el, idx) => {
              return <p key={idx}>{el}</p>;
            })}
          </li>
        </ul>
      </Container>
    </>
  );
};

export default BaseLIst;
