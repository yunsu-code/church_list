import styles from "./BasicInputType.module.scss";
import { useEffect } from "react";
import { forwardRef, useState } from "react";
import { useSelector } from "react-redux";

const BibleInput = ({ label, value, idx }, ref) => {
  const basicList = useSelector((state) => state.basicList);
  let [values, setvalues] = useState();
  let [bibleName, setBibleName] = useState();
  let [bibleFirstNum, setBibleFirstNum] = useState();
  let [bibleSecondNum, setBibleSecondNum] = useState();

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

  useEffect(() => {
    setvalues(bibleName + "." + bibleFirstNum + ":" + bibleSecondNum);
  }, [bibleName, bibleFirstNum, bibleSecondNum]);

  return (
    <>
      <div className={styles.basicInputWrap}>
        <div className={styles.inputWrap}>
          <label>{label}</label>
          <input
            type="text"
            className={label}
            ref={ref}
            readOnly
            value={values || ""}
          />
          <input type="text" onChange={onBibleName} value={bibleName || ""} />
          <input
            type="text"
            onChange={onBibleFirstNum}
            value={bibleFirstNum || ""}
          />{" "}
          :{" "}
          <input
            type="text"
            onChange={onBibleSecondNum}
            value={bibleSecondNum || ""}
          />
        </div>
        {/* <p className={styles.errorMessage}>내용을 입력해주세요</p> */}
      </div>
    </>
  );
};

const BibleInputType = forwardRef(BibleInput);

export default BibleInputType;
