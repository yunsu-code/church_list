import styles from "./BibleInputType.module.scss";
import { useEffect } from "react";
import { forwardRef, useState } from "react";
import cx from "classnames";

const BibleInput = ({ label }, ref) => {
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
      <div className={styles.inputWrap}>
        <label>{label}</label>
        <input
          type="text"
          className={cx(label, styles.unvisible)}
          ref={ref}
          readOnly
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
