import styles from "./SelectBtnInputType.module.scss";
import { forwardRef, useState } from "react";
import { useEffect } from "react";

const SelectBtnInput = ({ label, target, edit, lastValue }, ref) => {
  let [values, setValues] = useState([]);
  let [selectVal, setSelectVal] = useState();

  const member = [
    "황 맹례 권사",
    "황 맹심 전도사",
    "신 승호 집사",
    "황 맹임 집사",
    "황 성익 성도",
    "황 찬익 청년",
    "신 민영 청년",
    "신 윤수 청년",
    "이 현우 성도",
  ];

  // 수정하기
  useEffect(() => {
    if (edit) {
      setValues([lastValue]);
    } else {
      setValues([]);
    }
  }, [edit]);

  const onChange = (e) => {
    const { value } = e.target;
    setValues([...values, value]);
    setSelectVal(value);
  };

  const onReset = () => {
    setValues([]);
    setSelectVal("입력하기");
  };

  console.log(values)

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
          value={values.join(", ") || ""}
          placeholder="오른쪽 박스에서 선택해주세요"
        />
        <button type="button" className={styles.resetBtn} onClick={onReset}>
          지우기
        </button>
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
      </div>
    </>
  );
};

const SelectBtnInputType = forwardRef(SelectBtnInput);

export default SelectBtnInputType;
