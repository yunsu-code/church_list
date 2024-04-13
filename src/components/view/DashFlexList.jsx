import { RiAsterisk } from "@remixicon/react";
import styles from "./DashFlexList.module.scss";
import cx from "classnames";

const DashFlexList = ({ label, tail, center, asterisk, part2, sermon, className }) => {
  return (
    <li className={cx(styles.dashFlexList, sermon && styles.sermon, part2 && styles.part2, className)}>
      <div className={styles.label}>
        {asterisk &&<RiAsterisk className={styles.asterisk} size={10} color="#000" />}
        <span>{label}</span></div>
      <div className={cx(styles.center, !center && styles.noCenter)}>
        <div className={styles.dash}>
          ------------------------------------------------------------------------------------------------------------------------------------
        </div>
        <div className={styles.centerTitle}>{center}</div>
        <div className={styles.dash}>
          -----------------------------------------------------------------------------------------------
        </div>
      </div>
      <div className={styles.tail}>{tail}</div>
    </li>
  );
};

export default DashFlexList;
