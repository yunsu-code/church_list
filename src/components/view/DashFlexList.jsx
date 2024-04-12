import styles from "./DashFlexList.module.scss";
import cx from "classnames";

const DashFlexList = ({ label, tail, center }) => {
  return (
    <li className={styles.dashFlexList}>
      <div className={styles.label}>{label}</div>
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
