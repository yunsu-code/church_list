import styles from "./BasicInputType.module.scss";
import { forwardRef, useState } from "react";
import { useSelector } from "react-redux";

const SelectBtnInput = ({ label }, ref) => {
  const basicList = useSelector((state) => state.basicList);
  let [values, setValues] = useState([]);
  // let [values, setValues] = useState([basicList[`${label}`].value]);
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
      <div className={styles.basicInputWrap}>
        <div className={styles.inputWrap}>
          <label>{label}</label>
          <input
            readOnly
            inputMode="none"
            type="text"
            className={label}
            ref={ref}
            value={values || ""}
            placeholder="오른쪽 박스에서 선택해주세요"
          />
          <select
            name="member"
            className=""
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

          <button type="button" onClick={onReset}>
            지우기
          </button>
        </div>
        {/* <p className={styles.errorMessage}>내용을 입력해주세요</p> */}
      </div>
    </>
  );
};

const SelectBtnInputType = forwardRef(SelectBtnInput);

export default SelectBtnInputType;
