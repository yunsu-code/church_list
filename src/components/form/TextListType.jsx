import { forwardRef, useState } from "react";

const TextList = ({ value }, ref) => {
  const [inputList, setInputList] = useState([{ value: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { value: "" }]);
  };

  return (
    <>
      {inputList.map((x, i) => {
        return (
          <div key={i}>
            <input
              ref={(el) => (ref.current[i] = el)}
              name="vaule"
              placeholder="Enter First Name"
              value={x.vaule || ""}
              onChange={(e) => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && (
                <button className="mr10" onClick={() => handleRemoveClick(i)}>
                  Remove
                </button>
              )}
              {inputList.length - 1 === i && (
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
