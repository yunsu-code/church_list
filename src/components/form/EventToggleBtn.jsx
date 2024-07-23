import { useState } from "react";
import cx from "classnames";
import styles from "./EventToggleBtn.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const EventToggleBtn = ({ setEventName, edit }) => {
  const [currentList, setCurrentList] = useState([]);
  const eventList = ["성찬 예배", "추수감사절", "맥추감사절", "부활절"];
  const lastEvent = useSelector((state) => state.event);

  const getBtnValue = (e) => {
    const { value } = e.target;
    if(!currentList.includes(value)){
      setEventName([...currentList, value]);
      setCurrentList([...currentList, value])
    } else {
      const arr = currentList.filter((item) => item !== value)
      setCurrentList(arr)
      setEventName(arr);

    }
  };

  useEffect(() => {
    if (edit) {
      setEventName(lastEvent);
      setCurrentList(lastEvent)
    } else {
      setEventName([]);
      setCurrentList([])
    }
  }, [edit]);

  return (
    <>
      {eventList.map((event, idx) => {
        return (
          
          <button
            key={event}
            type="button"
            className={cx(
              styles.eventButton,
              currentList.includes(event) ? styles.current : null
            )}
            value={event}
            onClick={(e) => getBtnValue(e, idx)}
          >
            {event === "" ? "없음" : event}
          </button>
        );
      })}
    </>
  );
};

export default EventToggleBtn;
