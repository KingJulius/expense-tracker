import styles from "./ChartBar.module.css";

const ChartBar = (props) => {
  let barFillHeieght = "0%";
  if (props.maxValue > 0) {
    barFillHeieght = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className={styles["chart-bar"]}>
      <div className={styles["chart-bar__inner"]}>
        <div
          className={styles["chart-bar__fill"]}
          style={{ height: barFillHeieght }}
        ></div>
      </div>
      <div className={styles["chart-bar__label"]}>{props.label}</div>
    </div>
  );
};

export default ChartBar;
