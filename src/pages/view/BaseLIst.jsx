import Container from "@components/view/Container";
import { useSelector } from "react-redux";
import litany from "@data/litany.json";
const BaseLIst = () => {
  const basicList = useSelector((state) => state.basicList);
  console.log(litany);
  return (
    <Container>
      <h2>BaseList</h2>
      <ul>
        <li>* id : {basicList.id.value}</li>
        <li>* email : {basicList.email.value}</li>
        <li>* bible : {basicList.bible.value}</li>
        <li>* username : {basicList.username.value}</li>
        <li>
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
        </li>
      </ul>
    </Container>
  );
};

export default BaseLIst;
