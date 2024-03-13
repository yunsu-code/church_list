import styles from "./BasicInputType.module.scss";
import { forwardRef, useState } from "react";
import { useSelector } from "react-redux";

const BasicInput = ({ label, value, idx }, ref) => {
  const basicList = useSelector((state) => state.basicList);
  let [values, setvalues] = useState();
  // let [values, setvalues] = useState(basicList[`${label}`].value);

  const onChange = (e) => {
    const { value } = e.target;
    setvalues(value);
  };

  return (
    <>
      <div className={styles.basicInputWrap}>
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
        {/* <p className={styles.errorMessage}>내용을 입력해주세요</p> */}
      </div>
    </>
  );
};

const BasicInputType = forwardRef(BasicInput);

export default BasicInputType;
