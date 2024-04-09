import { forwardRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import AsteriskIcon from "remixicon-react/AsteriskIcon";
import styles from "./AddTextListType.module.scss";

const TextList = ({ label }, ref) => {
  const noticeList = useSelector((state) => state.notice);
  const [inputList, setInputList] = useState(
    noticeList.length !== 0 ? noticeList : [""]
  );

  const handleInputChange = (e, index) => {
    const { value } = e.target;
    const list = [...inputList];
    list[index] = value;
    setInputList(list);
  };

  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  const handleAddClick = () => {
    setInputList([...inputList, ""]);
  };

  useEffect(() => {
    setInputList(inputList);
  }, [inputList]);

  return (
    <div>
      <div className={styles.listTitle}>
        <AsteriskIcon size={18} color="#3860ff" />
        {label}
      </div>
      <div className={styles.inputBoxWrap}>
        {inputList.map((item, idx) => {
          return (
            <div className={styles.inputBox} key={idx}>
              <input
                ref={(el) => (ref.current[idx] = el)}
                name={"vaules" + idx}
                placeholder="내용을 입력하세요"
                value={item || ""}
                onChange={(e) => handleInputChange(e, idx)}
              />
              {inputList.length !== 1 && (
                <button
                  className={styles.delBtn}
                  onClick={() => handleRemoveClick(idx)}
                >
                  삭제
                </button>
              )}
              {inputList.length - 1 === idx && (
                <button className={styles.addBtn} onClick={handleAddClick}>
                  추가
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

const AddTextListType = forwardRef(TextList);

export default AddTextListType;
