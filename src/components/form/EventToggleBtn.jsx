import { useState } from "react";
import cx from "classnames";
import styles from "./EventToggleBtn.module.scss";

const EventToggleBtn = ({ setEventName }) => {
  const [current, setCurrent] = useState(0);
  const eventList = ["", "성찬예배", "추수감사절", "맥추감사절", "부활절"];

  const getBtnValue = (e, idx) => {
    const { value } = e.target;
    setCurrent(idx);
    setEventName(value);
  };
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
