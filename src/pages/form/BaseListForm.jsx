import Container from "@components/view/Container";
import BasicInputType from "@components/form/BasicInputType";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "@store/basicList";
import { setNotice } from "@store/notice";
import SelectBtnInputType from "../../components/form/SelectBtnInputType";
import { useNavigate } from "react-router-dom";
import TextListType from "../../components/form/TextListType";
import BibleInputType from "../../components/form/BibleInputType";
import { Reset } from "styled-reset";
import Header from "@components/common/Header";

const BaseListForm = () => {
  let basicList = useSelector((state) => state.basicList);
  let noticeList = useSelector((state) => state.notice);
  const inputRef = useRef({});
  const noticeRef = useRef({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = () => {
    const map = new Map();
    let inputObj;
    let noticeArr = [];
    let input;
    let noticeInput;
    Object.keys(inputRef.current).forEach(function (key) {
      input = inputRef.current[key];
      const inputName = input.className;
      inputObj = map.set(inputName, input.value);
      console.log(inputObj);
    });
    Object.keys(noticeRef.current).forEach(function (key) {
      noticeInput = noticeRef.current[key];
      const inputVal = noticeInput.value;
      noticeArr.push(inputVal);
    });
    if (input.value !== "" && noticeInput.value !== "") {
      dispatch(setValue(inputObj));
      dispatch(setNotice(noticeArr));

      navigate("/BaseList");
    } else {
      alert("빈칸을 입력하세요");
    }
  };

  return (
    <>
      <Reset />
      <Header />
      <Container>
        {Object.entries(basicList).map(([key, value], idx) => {
          return (
            <div key={idx}>
              {value.type === "basic" ? (
                <BasicInputType
                  label={key}
                  ref={(el) => (inputRef.current[idx] = el)}
                  idx={idx}
                />
              ) : value.type === "bible" ? (
                <BibleInputType
                  label={key}
                  ref={(el) => (inputRef.current[idx] = el)}
                  idx={idx}
                />
              ) : value.type === "select" ? (
                <SelectBtnInputType
                  label={key}
                  ref={(el) => (inputRef.current[idx] = el)}
                  idx={idx}
                />
              ) : null}
            </div>
          );
        })}
        <div>
          <TextListType ref={noticeRef} />
        </div>

        <button type="button" onClick={submit}>
          완료
        </button>
      </Container>
    </>
  );
};

export default BaseListForm;
