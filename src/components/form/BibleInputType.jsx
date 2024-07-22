import styles from "./BibleInputType.module.scss";
import { useEffect } from "react";
import { forwardRef, useState } from "react";
import cx from "classnames";

const BibleInput = ({ label, target, edit, lastValue }, ref) => {
  const [values, setvalues] = useState("");
  const [bibleName, setBibleName] = useState("");
  const [bibleFirstNum, setBibleFirstNum] = useState("");
  const [bibleSecondNum, setBibleSecondNum] = useState("");
  const [secondBibleArea, setSecondBibleArea] = useState(false);
  const [secondBibleName, setSecondBibleName] = useState("");
  const [secondBibleFirstNum, setSecondBibleFirstNum] = useState("");
  const [secondBibleSecondNum, setSecondBibleSecondNum] = useState("");
  const [firstBibleFullName, setFirstBibleFullName] = useState("");
  const [secondBibleFullName, setSecondBibleFullName] = useState("");

  // 수정하기
  useEffect(() => {
    if (edit) {
      if (lastValue.includes("|")) {
        setSecondBibleArea(true);
        const twoBible = lastValue.split("|");
        setBibleName(twoBible[0].split(".")[0]);
        setSecondBibleName(twoBible[1].split(".")[0]);
        if (lastValue.includes(":")) {
          setBibleFirstNum(twoBible[0].split(".")[1].split(":")[0]);
          setBibleSecondNum(twoBible[0].split(".")[1].split(":")[1]);
          setSecondBibleFirstNum(twoBible[1].split(".")[1].split(":")[0]);
          setSecondBibleSecondNum(twoBible[1].split(".")[1].split(":")[1]);
        } else {
          setBibleFirstNum(twoBible[0].split(".")[1]);
          setSecondBibleFirstNum(twoBible[1].split(".")[1]);
        }
      } else {
        setBibleName(lastValue.split(".")[0]);
        setBibleFirstNum(lastValue.split(".")[1].split(":")[0]);
        setBibleSecondNum(lastValue.split(".")[1].split(":")[1]);
      }
    } else {
      setBibleName("");
      setBibleFirstNum("");
      setBibleSecondNum("");
      setSecondBibleName("");
      setSecondBibleFirstNum("");
      setSecondBibleSecondNum("");
      setSecondBibleFullName("");
      setSecondBibleArea(false);
    }
  }, [edit]);

  const onBibleName = (e) => {
    const { value } = e.target;
    setBibleName(value);
  };

  const onBibleFirstNum = (e) => {
    const { value } = e.target;
    setBibleFirstNum(value);
  };

  const onBibleSecondNum = (e) => {
    const { value } = e.target;
    setBibleSecondNum(value);
  };

  const onSecondBibleName = (e) => {
    const { value } = e.target;
    setSecondBibleName(value);
  };

  const onSecondBibleFirstNum = (e) => {
    const { value } = e.target;
    setSecondBibleFirstNum(value);
  };

  const onSecondBibleSecondNum = (e) => {
    const { value } = e.target;
    setSecondBibleSecondNum(value);
  };

  const onSecondBibleArea = () => {
    setSecondBibleArea(true);
  };

  const onDelSecondBibleArea = () => {
    setSecondBibleName("");
    setSecondBibleFirstNum("");
    setSecondBibleSecondNum("");
    setSecondBibleFullName("");
    setSecondBibleArea(false);
  };

  useEffect(() => {
    if (bibleName !== "" && bibleFirstNum !== "") {
      setFirstBibleFullName(
        bibleName +
          "." +
          bibleFirstNum +
          (bibleSecondNum ? `:${bibleSecondNum}` : "")
      );
      setvalues(firstBibleFullName);
    }
    if (
      secondBibleArea &&
      secondBibleName !== "" &&
      secondBibleFirstNum !== ""
    ) {
      setSecondBibleFullName(
        secondBibleName +
          "." +
          secondBibleFirstNum +
          (secondBibleSecondNum ? `:${secondBibleSecondNum}` : "")
      );
      setvalues(firstBibleFullName + " | " + secondBibleFullName);
    }
    if (bibleName === "" || bibleFirstNum === "") {
      setFirstBibleFullName("");
      setvalues("");
    }
    if (secondBibleName === "" || secondBibleFirstNum === "") {
      setSecondBibleFullName("");
    }
  });

  return (
    <>
      <div className={styles.inputWrap}>
        <label>{label}</label>
        <input
          type="text"
          className={target}
          readOnly
          ref={ref}
          value={values || ""}
        />
        <div className={styles.bibleInputsWrap}>
          <div className={styles.bibleInputs}>
            <input type="text" onChange={onBibleName} value={bibleName || ""} />
            <span className={styles.colon}>.</span>
            <input
              type="text"
              onChange={onBibleFirstNum}
              value={bibleFirstNum || ""}
              placeholder="장"
            />
            <span className={styles.colon}>:</span>
            <input
              type="text"
              onChange={onBibleSecondNum}
              value={bibleSecondNum || ""}
              placeholder="절"
            />
            <button
              type="button"
              className={styles.secondVisibleBtn}
              onClick={onSecondBibleArea}
            >
              두번째 말씀 추가
            </button>
          </div>
          <div
            className={cx(
              styles.bibleInputs,
              secondBibleArea ? null : styles.unVisible
            )}
          >
            <input
              type="text"
              onChange={onSecondBibleName}
              value={secondBibleName || ""}
            />
            <span className={styles.colon}>.</span>
            <input
              type="text"
              onChange={onSecondBibleFirstNum}
              value={secondBibleFirstNum || ""}
              placeholder="장"
            />
            <span className={styles.colon}>:</span>
            <input
              type="text"
              onChange={onSecondBibleSecondNum}
              value={secondBibleSecondNum || ""}
              placeholder="절"
            />
            <button
              type="button"
              className={cx(styles.secondVisibleBtn, styles.delete)}
              onClick={onDelSecondBibleArea}
            >
              두번째 말씀 삭제
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const BibleInputType = forwardRef(BibleInput);

export default BibleInputType;
