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
      <Header title={"예배 순서지"} />
      <Container>
        <h2>BaseList</h2>
        <ul>
          <li>* 주일낮예배 찬송 1: {basicList.주일낮예배.찬송가.value[0]}</li>
          <li>* 주일낮예배 찬송 2 : {basicList.주일낮예배.찬송가.value[1]}</li>
          <li>* 주일낮예배 찬송 3 : {basicList.주일낮예배.찬송가.value[2]}</li>
          <li>* 주일낮예배 찬송 4 : {basicList.주일낮예배.찬송가.value[3]}</li>
          <li>* 주일낮예배 말씀 : {basicList.주일낮예배.성경봉독.value}</li>
          <li>
            {basicList.주일낮예배.교독문.value !== "" ? (
              <>
                * 교독문 :{" "}
                {basicList.주일낮예배.교독문.value +
                  "." +
                  litany[basicList.주일낮예배.교독문.value].name}
                <br />
                {litany[basicList.주일낮예배.교독문.value].text.map(
                  (el, idx) => {
                    if (idx % 2 == 0) {
                      return <div key={idx}>★ {el}</div>;
                    } else {
                      return <div key={idx}>{el}</div>;
                    }
                  }
                )}
                {litany[basicList.주일낮예배.교독문.value].all
                  ? litany[basicList.주일낮예배.교독문.value].all
                  : null}
              </>
            ) : null}
          </li>
          <li>* 주일낮예배 특송 : {basicList.주일낮예배.특송.value}</li>
          <br />
          <li>* 주일찬양예배 찬송 : {basicList.주일찬양예배.찬송가.value}</li>
          <li>
            * 주일찬양예배 성경봉독 : {basicList.주일찬양예배.성경봉독.value}
          </li>
          <li>* 주일찬양예배 기도 : {basicList.주일찬양예배.기도.value}</li>
          <br />
          <li>* 수요예배 찬송 : {basicList.수요예배.찬송가.value}</li>
          <li>* 수요예배 말씀 : {basicList.수요예배.성경봉독.value}</li>
          <li>* 수요예배 기도 : {basicList.수요예배.기도.value}</li>
          <br />
          <li>* 금요예배 찬송 : {basicList.금요예배.찬송가.value}</li>
          <li>* 금요예배 말씀 : {basicList.금요예배.성경봉독.value}</li>
          <li>* 금요예배 기도 : {basicList.금요예배.기도.value}</li>
          <li>
            * 공지사항 :
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
