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
import Header from "@components/common/Header";
import styles from "./BaseListForm.module.scss";
import EventToggleBtn from "../../components/form/EventToggleBtn";
import { useState } from "react";
import cx from "classnames";
import { RiAsterisk } from "@remixicon/react";

const BaseListForm = () => {
  let inputArray = [];
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

  return (
    <>
      <Header title={"예배 순서지 입력하기"}>
        <button
          type="button"
          onClick={onEdit}
          className={cx(styles.editBtn, edit ? styles.activeEdit : "")}
        >
          {edit ? "취소하기" : "이전 내역 불러오기"}
        </button>
      </Header>
      <Container type="form">
        {Object.entries(basicList).map(([key], idx) => {
          return (
            <div key={key} className={styles.listContainer}>
              <div className={styles.listTitle}>
                <RiAsterisk size={18} color="#3860ff" />
                {key}
              </div>
              {Object.entries(basicList[key]).map(([keys, values]) => {
                inputArray.push(key + keys);
                return (
                  <>
                    {basicList[key][keys].type === "basic" ? (
                      <BasicInputType
                        label={values.name}
                        target={key + keys}
                        edit={edit}
                        lastValue={values.value}
                        ref={(el) =>
                          (inputRef.current[inputArray.indexOf(key + keys)] =
                            el)
                        }
                        idx={idx}
                      />
                    ) : basicList[key][keys].type === "bible" ? (
                      <BibleInputType
                        label={values.name}
                        target={key + keys}
                        edit={edit}
                        lastValue={values.value}
                        ref={(el) =>
                          (inputRef.current[inputArray.indexOf(key + keys)] =
                            el)
                        }
                        idx={idx}
                      />
                    ) : basicList[key][keys].type === "select" ? (
                      <SelectBtnInputType
                        label={values.name}
                        target={key + keys}
                        edit={edit}
                        lastValue={values.value}
                        ref={(el) =>
                          (inputRef.current[inputArray.indexOf(key + keys)] =
                            el)
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
        <div className={styles.listContainer}>
          <AddTextListType label={"공지사항"} ref={noticeRef} />
        </div>
        <div className={styles.listContainer}>
          <div className={styles.listTitle}>
            <RiAsterisk size={18} color="#3860ff" />
            특정 날 선택
          </div>
          <EventToggleBtn setEventName={setEventName} edit={edit} />
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
