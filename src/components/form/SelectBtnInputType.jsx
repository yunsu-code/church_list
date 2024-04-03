import styles from "./SelectBtnInputType.module.scss";
import { forwardRef, useState } from "react";

const SelectBtnInput = ({ label, target }, ref) => {
  let [values, setValues] = useState([]);
  let [selectVal, setSelectVal] = useState();

  const member = ["김철수", "이영희", "신윤수", "신민영", "최하영", "이준혁"];

  const onChange = (e) => {
    const { value } = e.target;
    setValues([...values, value]);
    setSelectVal(value);
  };

  const onReset = () => {
    setValues("");
    setSelectVal("입력하기");
  };

  return (
    <>
      <div className={styles.inputWrap}>
        <label>{label}</label>
        <input
          readOnly
          inputMode="none"
          type="text"
          className={target}
          ref={ref}
          value={values || ""}
          placeholder="오른쪽 박스에서 선택해주세요"
        />
        <select
          className={styles.selectBox}
          name="member"
          onChange={onChange}
          value={selectVal}
        >
          <option value={"입력하기"} defaultValue={"입력하기"}>
            입력하기
          </option>
          {member.map((item) => {
            return (
              <option key={item} value={item}>
                {item}
              </option>
            );
          })}
        </select>

        <button type="button" className={styles.resetBtn} onClick={onReset}>
          지우기
        </button>
      </div>
    </>
  );
};

const SelectBtnInputType = forwardRef(SelectBtnInput);

export default SelectBtnInputType;
