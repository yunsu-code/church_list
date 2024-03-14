import styles from "./BasicInputType.module.scss";
import { forwardRef, useState } from "react";

const BasicInput = ({ label }, ref) => {
  let [values, setvalues] = useState();

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
          className={label}
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
