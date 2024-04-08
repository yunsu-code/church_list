import { useEffect } from "react";
import styles from "./BasicInputType.module.scss";
import { forwardRef, useState } from "react";

const BasicInput = ({ label, target, lastValue, edit }, ref) => {
  let [values, setvalues] = useState("");

  // 수정하기
  useEffect(() => {
    if (edit) {
      setvalues(lastValue);
    } else {
      setvalues("");
    }
  }, [edit]);

  const onChange = (e) => {
    const { value } = e.target;
    setvalues(value);
  };

  return (
    <>
      <div className={styles.inputWrap}>
        <label>{label}</label>
        <input
          type="text"
          className={target}
          ref={ref}
          onChange={onChange}
          value={values || ""}
        />
      </div>
    </>
  );
};

const BasicInputType = forwardRef(BasicInput);

export default BasicInputType;
