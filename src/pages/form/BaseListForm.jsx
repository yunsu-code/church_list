import Container from "@components/view/Container";
import BasicInputType from "@components/form/BasicInputType";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "@store/basicList";
import { setNotice } from "@store/notice";
import SelectBtnInputType from "@components/form/SelectBtnInputType";
import { useNavigate } from "react-router-dom";
import AddTextListType from "@components/form/AddTextListType";
import BibleInputType from "@components/form/BibleInputType";
import { Reset } from "styled-reset";
import Header from "@components/common/Header";
import styles from "./BaseListForm.module.scss";

const BaseListForm = () => {
  let basicList = useSelector((state) => state.basicList);
  const inputRef = useRef({});
  const noticeRef = useRef({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submit = () => {
    const map = new Map();
    let inputObjValues = [];
    let inputObj = {};
    let noticeArr = [];
    let input;
    let noticeInput;
    Object.keys(inputRef.current).forEach(function (key) {
      input = inputRef.current[key];
      const inputName = input.className;
      inputObj = map.set(inputName, input.value);
    });
    Object.keys(noticeRef.current).forEach(function (key) {
      if (
        noticeRef.current[key] != null ||
        noticeRef.current[key] != undefined
      ) {
        noticeInput = noticeRef.current[key];
        const inputVal = noticeInput.value;
        noticeArr.push(inputVal);
      }
    });

    inputObj.forEach((val) => {
      inputObjValues.push(val);
    });
    const checkInputValues = inputObjValues.filter((item) => {
      return item === "";
    });
    const checknoticeValues = noticeArr.filter((item) => {
      return item === "";
    });
    if (checkInputValues.length === 0 && checknoticeValues.length === 0) {
      console.log(inputObj);
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
          console.log(value);
          return (
            <div key={key}>
              <div>{key}</div>
              {Object.entries(basicList[key]).map(([keys, values], idxs) => {
                console.log(idx === 0 ? idx + idxs : idx * 3 + idxs);
                return (
                  <>
                    {basicList[key][keys].type === "basic" ? (
                      <BasicInputType
                        label={values.name}
                        target={key + keys}
                        ref={(el) =>
                          (inputRef.current[
                            idx === 0 ? idx + idxs : idx * 3 + idxs
                          ] = el)
                        }
                        idx={idx}
                      />
                    ) : basicList[key][keys].type === "bible" ? (
                      <BibleInputType
                        label={values.name}
                        target={key + keys}
                        ref={(el) =>
                          (inputRef.current[
                            idx === 0 ? idx + idxs : idx * 3 + idxs
                          ] = el)
                        }
                        idx={idx}
                      />
                    ) : basicList[key][keys].type === "select" ? (
                      <SelectBtnInputType
                        label={values.name}
                        target={key + keys}
                        ref={(el) =>
                          (inputRef.current[
                            idx === 0 ? idx + idxs : idx * 3 + idxs
                          ] = el)
                        }
                        idx={idx}
                      />
                    ) : null}
                  </>
                );
              })}
            </div>
          );
        })}
        <div>
          <AddTextListType label={"공지사항"} ref={noticeRef} />
        </div>
        <div className={styles.submitBtnWrap}>
          <button type="button" className={styles.submitBtn} onClick={submit}>
            완료
          </button>
        </div>
      </Container>
    </>
  );
};

export default BaseListForm;
