import Container from "@components/view/Container";
import BasicInputType from "@components/form/BasicInputType";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setValue } from "@store/basicList";
import { setNotice } from "@store/notice";
import { setEvent } from "@store/event";
import SelectBtnInputType from "@components/form/SelectBtnInputType";
import { useNavigate } from "react-router-dom";
import AddTextListType from "@components/form/AddTextListType";
import BibleInputType from "@components/form/BibleInputType";
import { Reset } from "styled-reset";
import Header from "@components/common/Header";
import styles from "./BaseListForm.module.scss";
import EventToggleBtn from "../../components/form/EventToggleBtn";
import { useState } from "react";
import cx from "classnames";

const BaseListForm = () => {
  const basicList = useSelector((state) => state.basicList);
  const [eventName, setEventName] = useState("");
  const [edit, setEdit] = useState(false);
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
      dispatch(setValue(inputObj));
      dispatch(setNotice(noticeArr));
      dispatch(setEvent(eventName));
      navigate("/BaseList");
    } else {
      alert("빈칸을 입력하세요");
    }
  };

  const onEdit = () => {
    setEdit(!edit);
  };
  console.log(edit);

  return (
    <>
      <Reset />
      <Header />
      <Container>
        <div className={styles.editBtnWrap}>
          <button
            type="button"
            onClick={onEdit}
            className={cx(styles.editBtn, edit ? styles.activeEdit : "")}
          >
            이전 내역 수정하기
          </button>
        </div>
        {Object.entries(basicList).map(([key], idx) => {
          return (
            <div key={key}>
              <div>{key}</div>
              {Object.entries(basicList[key]).map(([keys, values], idxs) => {
                return (
                  <>
                    {basicList[key][keys].type === "basic" ? (
                      <BasicInputType
                        key={keys}
                        label={values.name}
                        target={key + keys}
                        edit={edit}
                        lastValue={values.value}
                        ref={(el) =>
                          (inputRef.current[
                            idx === 0 ? idx + idxs : idx * 3 + idxs
                          ] = el)
                        }
                        idx={idx}
                      />
                    ) : basicList[key][keys].type === "bible" ? (
                      <BibleInputType
                        key={keys}
                        label={values.name}
                        target={key + keys}
                        edit={edit}
                        lastValue={values.value}
                        ref={(el) =>
                          (inputRef.current[
                            idx === 0 ? idx + idxs : idx * 3 + idxs
                          ] = el)
                        }
                        idx={idx}
                      />
                    ) : basicList[key][keys].type === "select" ? (
                      <SelectBtnInputType
                        key={keys}
                        label={values.name}
                        target={key + keys}
                        edit={edit}
                        lastValue={values.value}
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
        <div>
          <EventToggleBtn setEventName={setEventName} />
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
