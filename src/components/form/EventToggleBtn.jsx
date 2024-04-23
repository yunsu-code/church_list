import { useState } from "react";
import cx from "classnames";
import styles from "./EventToggleBtn.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
const EventToggleBtn = ({ setEventName, edit }) => {
  const [current, setCurrent] = useState(0);
  const eventList = ["", "성찬 예배", "추수감사절", "맥추감사절", "부활절"];
  const lastEvent = useSelector((state) => state.event);

  const getBtnValue = (e, idx) => {
    const { value } = e.target;
    setCurrent(idx);
    setEventName(value);
  };

  useEffect(() => {
    if (edit) {
      setCurrent(eventList.indexOf(lastEvent));
      setEventName(lastEvent);
    } else {
      setCurrent(0);
      setEventName("");
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
              current === idx ? styles.current : null
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
