import styles from "./BibleInputType.module.scss";
import { useEffect } from "react";
import { forwardRef, useState } from "react";

const BibleInput = ({ label }, ref) => {
  const [values, setvalues] = useState("");
  const [bibleName, setBibleName] = useState("");
  const [bibleFirstNum, setBibleFirstNum] = useState("");
  const [bibleSecondNum, setBibleSecondNum] = useState("");

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
    console.log(value);
  };

  useEffect(() => {
    if (bibleName !== "" && bibleFirstNum !== "" && bibleSecondNum !== "") {
      setvalues(bibleName + "." + bibleFirstNum + ":" + bibleSecondNum);
    }
    if (bibleName === "" || bibleFirstNum === "" || bibleSecondNum === "") {
      setvalues("");
    }
  }, [bibleName, bibleFirstNum, bibleSecondNum]);

  return (
    <>
      <div className={styles.inputWrap}>
        <label>{label}</label>
        <input
          type="text"
          className={label}
          readOnly
          ref={ref}
          value={values || ""}
        />
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
        </div>
      </div>
    </>
  );
};

const BibleInputType = forwardRef(BibleInput);

export default BibleInputType;
