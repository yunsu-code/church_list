import { forwardRef, useState } from "react";
import { useSelector } from "react-redux";

const TextList = ({ value }, ref) => {
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

  return (
    <>
      {inputList.map((item, idx) => {
        return (
          <div key={idx}>
            <input
              ref={(el) => (ref.current[idx] = el)}
              name="vaules"
              placeholder="Enter First Name"
              value={item || ""}
              onChange={(e) => handleInputChange(e, idx)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && (
                <button className="mr10" onClick={() => handleRemoveClick(idx)}>
                  Remove
                </button>
              )}
              {inputList.length - 1 === idx && (
                <button onClick={handleAddClick}>Add</button>
              )}
            </div>
          </div>
        );
      })}
    </>
  );
};

const TextListType = forwardRef(TextList);

export default TextListType;
