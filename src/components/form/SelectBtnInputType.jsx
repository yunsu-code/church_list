import styles from "./SelectBtnInputType.module.scss";
import { forwardRef, useState } from "react";
import { useEffect } from "react";

const SelectBtnInput = ({ label, target, edit, lastValue }, ref) => {
  let [values, setValues] = useState([]);
  let [selectVal, setSelectVal] = useState();

  const member = [
    "황맹례 권사",
    "황맹심 전도사",
    "신승호 집사",
    "황맹임 집사",
    "황성익 성도",
    "황찬익 성도",
    "신민영 청년",
    "신윤수 청년",
  ];

  // 수정하기
  useEffect(() => {
    if (edit) {
      setValues([lastValue]);
    } else {
      setValues("");
    }
  }, [edit]);

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
